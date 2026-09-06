// scripts/upload_images_to_supabase.js
// Sincronizador de alta velocidad para imágenes (Laminarios Histológicos, Atlas Anatómico, etc.)

const fs = require('fs');
const path = require('path');
const https = require('https');

const SUPABASE_URL = "https://ugvwcdvwmxijzmkfjydb.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVndndjZHZ3bXhpanpta2ZqeWRiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODY3ODEyNCwiZXhwIjoyMTA0MjU0MTI0fQ.B9_0QM8O02zK3cKnzXAh45AFUShB499nXJlK3ZkYMtA";
const BUCKET_NAME = "morfo-files";

const BASE_ROOT = path.join(__dirname, "..");
const TARGET_DIRS = [
    "Morfo 1",
    "Morfo 2",
    "Morfo 3",
    "Logo",
    "Bibliografias"
];

const TARGET_EXTENSIONS = new Set([
    '.jpg', '.jpeg', '.png', '.gif', '.webp'
]);

function sanitizeKey(k) {
    let clean = k.replace(/\\/g, '/');
    if (clean.startsWith('./')) clean = clean.substring(2);
    if (clean.startsWith('/')) clean = clean.substring(1);
    clean = clean.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9_\-\.\/ ]/g, '_');
    return clean;
}

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const map = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.webp': 'image/webp'
    };
    return map[ext] || 'application/octet-stream';
}

function scanFiles(dirPath, fileList = []) {
    if (!fs.existsSync(dirPath)) return fileList;
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.name.startsWith('~$') || entry.name.startsWith('._')) continue;
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
    console.log("  MORFO PORTAL - SINCRONIZADOR DE IMÁGENES A SUPABASE");
    console.log("==================================================");

    let allFiles = [];
    for (const dirName of TARGET_DIRS) {
        const dirPath = path.join(BASE_ROOT, dirName);
        const list = scanFiles(dirPath);
        console.log(`- ${dirName}: ${list.length} imágenes detectadas`);
        allFiles = allFiles.concat(list);
    }

    console.log(`\nTotal general de imágenes a sincronizar: ${allFiles.length}`);

    console.log("\nIniciando subida de imágenes (Concurrencia: 8)...");
    const CONCURRENCY = 8;
    let index = 0;
    let successCount = 0;
    let errorCount = 0;

    async function worker() {
        while (index < allFiles.length) {
            const currentIdx = index++;
            const fullPath = allFiles[currentIdx];
            const relativePath = path.relative(BASE_ROOT, fullPath);

            const res = await uploadFile(fullPath, relativePath);
            if (res.success) {
                successCount++;
                if (successCount % 50 === 0 || successCount === allFiles.length) {
                    const pct = Math.round((successCount / allFiles.length) * 100);
                    console.log(`[${successCount}/${allFiles.length}] (${pct}%) Subidas exitosamente...`);
                }
            } else {
                errorCount++;
                console.log(`❌ ERROR en "${relativePath}": ${res.error}`);
            }
        }
    }

    const workers = [];
    for (let i = 0; i < CONCURRENCY; i++) {
        workers.push(worker());
    }

    await Promise.all(workers);

    console.log("\n==================================================");
    console.log(`🎉 Sincronización de Imágenes Finalizada:`);
    console.log(`- Subidas con éxito: ${successCount}`);
    console.log(`- Errores:           ${errorCount}`);
    console.log("==================================================");
}

main().catch(err => console.error("Error fatal:", err));
