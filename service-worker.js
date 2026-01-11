// اسم الكاش الخاص بنا
const CACHE_NAME = 'deerty-menu-v2';

// الملفات الأساسية التي يجب تخزينها مؤقتاً لتمكين التثبيت (PWA) من المجلد الرئيسي مباشرة
const urlsToCache = [
    '/', 
    'index.html',
    'menu.html',
    'branch_selector.html',
    'style.css',
    'Script.js',
    'manifest.json',
    'logo-bg.webp' // أضفنا شعار الموقع لضمان ظهوره دائماً
];

self.addEventListener('install', (evt) => {
    // تخزين الملفات الأساسية الضرورية لتمكين التثبيت
    evt.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('تم فتح الكاش وتخزين الملفات الأساسية بنجاح 📦');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting()) // تفعيل العامل الخدمي فوراً
    );
});

self.addEventListener('activate', (evt) => {
    // السيطرة على العميل ومسح أي كاش قديم لضمان تحديث البيانات
    evt.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.map(k => {
                if (k !== CACHE_NAME) {
                    console.log('حذف الكاش القديم:', k);
                    return caches.delete(k);
                }
            }))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (evt) => {
    // استراتيجية "الشبكة أولاً" لضمان تحديث قائمة الطعام دائماً
    evt.respondWith(
        fetch(evt.request).catch(function() {
            // إذا كان المستخدم أوفلاين، نرجع النسخة المخزنة مؤقتاً
            return caches.match(evt.request);
        })
    );
});
