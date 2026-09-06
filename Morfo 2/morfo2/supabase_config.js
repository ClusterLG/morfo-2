// ============================================================
//  MORFO II - Supabase Configuration & Media Resolver
// ============================================================

const SUPABASE_CONFIG = {
    url: "https://ugvwcdvwmxijzmkfjydb.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVndndjZHZ3bXhpanpta2ZqeWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2NzgxMjQsImV4cCI6MjEwNDI1NDEyNH0.MqphWVcMhgylBbL0WMkS9uKxaFxV_9B87ONHI0esPY0",
    bucket: "morfo-files"
};

const USE_SUPABASE_STORAGE = true;

function sanitizeStorageKey(path) {
    if (!path) return "";
    let clean = path.replace(/\\/g, "/");
    if (clean.startsWith("./")) clean = clean.substring(2);
    if (clean.startsWith("/")) clean = clean.substring(1);
    
    clean = clean.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9_\-\.\/ ]/g, "_");
    return clean;
}

function resolveMediaUrl(path) {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }
    if (!USE_SUPABASE_STORAGE) {
        return path;
    }

    const cleanPath = sanitizeStorageKey(path);
    const encodedSegments = cleanPath.split("/").map(seg => encodeURIComponent(seg));
    const encodedPath = encodedSegments.join("/");

    return `${SUPABASE_CONFIG.url}/storage/v1/object/public/${SUPABASE_CONFIG.bucket}/${encodedPath}`;
}

if (typeof window !== "undefined") {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
    window.resolveMediaUrl = resolveMediaUrl;
    window.sanitizeStorageKey = sanitizeStorageKey;
    window.USE_SUPABASE_STORAGE = USE_SUPABASE_STORAGE;
}
