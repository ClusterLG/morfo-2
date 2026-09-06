// scripts/upload_to_supabase.js
// Script CLI para sincronizar archivos pesados a Supabase Storage

const fs = require('fs');
const path = require('path');
const https = require('https');

const SUPABASE_URL = "https://ugvwcdvwmxijzmkfjydb.supabase.co";
// Clave Service Role administrativa para subida sin restricciones RLS
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVndndjZHZ3bXhpanpta2ZqeWRiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODY3ODEyNCwiZXhwIjoyMTA0MjU0MTI0fQ.B9_0QM8O02zK3cKnzXAh45AFUShB499nXJlK3ZkYMtA";
const BUCKET_NAME = "morfo-files";

const BASE_ROOT = path.join(__dirname, "..");
const TARGET_DIRS = [
    "Morfo 1",
    "Morfo 2",
    "Morfo 3",
    "Bibliografias",
    "Logo"
];

const TARGET_EXTENSIONS = new Set([
    '.pdf', '.mp4', '.avi', '.mov', '.docx', '.doc', '.ppt', '.pptx', '.pps', '.zip'
]);

function sanitizeKey(k) {
    let clean = k.replace(/\\/g, '/');
    if (clean.startsWith('./')) clean = clean.substring(2);
    if (clean.startsWith('/')) clean = clean.substring(1);
    // Normalizar caracteres acentuados y caracteres especiales compatibles con S3 Storage
    clean = clean.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9_\-\.\/ ]/g, '_');
    return clean;
}

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const map = {
        '.pdf': 'application/pdf',
        '.mp4': 'video/mp4',
        '.avi': 'video/x-msvideo',
        '.mov': 'video/quicktime',
        '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        '.doc': 'application/msword',
        '.ppt': 'application/vnd.ms-powerpoint',
        '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        '.pps': 'application/vnd.ms-powerpoint',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.zip': 'application/zip'
    };
    return map[ext] || 'application/octet-stream';
}

function scanFiles(dirPath, fileList = []) {
    if (!fs.existsSync(dirPath)) return fileList;
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.name.startsWith('~$') || entry.name.startsWith('._')) continue; // Ignorar temporales de Office/macOS
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            scanFiles(fullPath, fileList);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (TARGET_EXTENSIONS.has(ext)) {
                fileList.push(fullPath);
            }
        }
    }
    return fileList;
}

function uploadFile(fullPath, relativePath) {
    return new Promise((resolve) => {
        const fileBuffer = fs.readFileSync(fullPath);
        const mimeType = getMimeType(fullPath);
        const sanitizedRelative = sanitizeKey(relativePath);
        const encodedPath = sanitizedRelative.split('/').map(encodeURIComponent).join('/');
        
        const urlObj = new URL(`${SUPABASE_URL}/storage/v1/object/${BUCKET_NAME}/${encodedPath}`);

        const options = {
            method: 'POST',
            hostname: urlObj.hostname,
            path: urlObj.pathname,
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': mimeType,
                'Content-Length': fileBuffer.length,
                'x-upsert': 'true'
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve({ success: true, path: sanitizedRelative, statusCode: res.statusCode });
                } else {
                    resolve({ success: false, path: sanitizedRelative, statusCode: res.statusCode, error: body });
                }
            });
        });

        req.on('error', (err) => {
            resolve({ success: false, path: sanitizedRelative, error: err.message });
        });

        req.write(fileBuffer);
        req.end();
    });
}

async function main() {
    console.log("==================================================");
    console.log("  MORFO PORTAL - SINCRONIZADOR A SUPABASE STORAGE");
    console.log("==================================================");
    console.log(`Proyecto: ${SUPABASE_URL}`);
    console.log(`Bucket:   ${BUCKET_NAME}\n`);

    let allFiles = [];
    for (const dirName of TARGET_DIRS) {
        const dirPath = path.join(BASE_ROOT, dirName);
        const list = scanFiles(dirPath);
        console.log(`- ${dirName}: ${list.length} archivos detectados`);
        allFiles = allFiles.concat(list);
    }

    console.log(`\nTotal general a sincronizar: ${allFiles.length} archivos.`);

    if (process.argv.includes('--dry-run')) {
        console.log("\n[DRY RUN] Modo de prueba terminado.");
        return;
    }

    console.log("\nIniciando subida de archivos (Concurrencia: 4)...");
    const CONCURRENCY = 4;
    let index = 0;
    let successCount = 0;
    let errorCount = 0;
    const skippedLarge = [];

    async function worker() {
        while (index < allFiles.length) {
            const currentIdx = index++;
            const fullPath = allFiles[currentIdx];
            const relativePath = path.relative(BASE_ROOT, fullPath);
            const sizeMb = (fs.statSync(fullPath).size / (1024 * 1024)).toFixed(2);

            process.stdout.write(`[${currentIdx + 1}/${allFiles.length}] (${sizeMb} MB) ${relativePath}... `);
            const res = await uploadFile(fullPath, relativePath);
            if (res.success) {
                successCount++;
                console.log("✅ OK");
            } else {
                errorCount++;
                if (res.statusCode === 413) {
                    skippedLarge.push({ path: relativePath, size: sizeMb });
                    console.log(`⚠️ EXCEEDE LÍMITE 50MB DE SUPABASE FREE PLAN (${sizeMb} MB)`);
                } else {
                    console.log(`❌ ERROR (${res.statusCode}): ${res.error}`);
                }
            }
        }
    }

    const workers = [];
    for (let i = 0; i < CONCURRENCY; i++) {
        workers.push(worker());
    }

    await Promise.all(workers);

    console.log("\n==================================================");
    console.log(`🎉 Sincronización Finalizada:`);
    console.log(`- Subidos con éxito:  ${successCount}`);
    console.log(`- Errores / Bloqueos: ${errorCount}`);
    if (skippedLarge.length > 0) {
        console.log(`\nArchivos que superan el límite de 50MB de Supabase Free (${skippedLarge.length}):`);
        skippedLarge.forEach(f => console.log(`  * [${f.size} MB] ${f.path}`));
    }
    console.log("==================================================");
}

main().catch(err => console.error("Error fatal:", err));
