// scripts/replace_with_supabase_urls.js
// Reemplaza todas las rutas relativas en las bases de datos por URLs directas y permanentes de Supabase Storage

const fs = require('fs');
const path = require('path');

const SUPABASE_BASE = 'https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/';

function sanitizeKey(k) {
    let clean = k.replace(/\\/g, '/');
    if (clean.startsWith('./')) clean = clean.substring(2);
    if (clean.startsWith('/')) clean = clean.substring(1);
    clean = clean.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9_\-\.\/ ]/g, '_');
    const segments = clean.split('/').map(encodeURIComponent);
    return segments.join('/');
}

const filesToUpdate = [
    path.join(__dirname, '..', 'bibliografias_data.js'),
    path.join(__dirname, '..', 'Morfo 1', 'laminarios_data_m1.js'),
    path.join(__dirname, '..', 'Morfo 2', 'morfo2', 'laminarios_data.js'),
    path.join(__dirname, '..', 'Morfo 3', 'laminarios_data_m3.js'),
    path.join(__dirname, '..', 'Morfo 2', 'morfo2', 'gallery_data.js')
];

let totalReplaced = 0;

filesToUpdate.forEach(fullPath => {
    if (!fs.existsSync(fullPath)) {
        console.log('Archivo no encontrado:', fullPath);
        return;
    }
    const content = fs.readFileSync(fullPath, 'utf8');
    let count = 0;

    // Buscar cualquier ocurrencia de "Morfo 1/...", "Morfo 2/...", "Morfo 3/...", "Bibliografias/..."
    const regex = /"(Morfo 1\/[^"]+|Morfo 2\/[^"]+|Morfo 3\/[^"]+|Bibliografias\/[^"]+)"/g;

    const newContent = content.replace(regex, (match, p1) => {
        count++;
        totalReplaced++;
        const supabaseUrl = SUPABASE_BASE + sanitizeKey(p1);
        return `"${supabaseUrl}"`;
    });

    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`✅ ${path.basename(fullPath)}: ${count} enlaces actualizados a URLs de Supabase.`);
});

console.log(`\n🎉 Total de enlaces directos a Supabase insertados: ${totalReplaced}`);
