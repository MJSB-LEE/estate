// Service worker: simpan salinan app supaya boleh buka tanpa internet.
// Tukar nombor versi bila anda kemas kini fail, supaya telefon ambil versi baru.
const CACHE = 'lawatan-ladang-v23';
const ASSETS = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './favicon.png', './logo.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c =>
    Promise.all(ASSETS.map(u => c.add(u).catch(() => {})))  // logo.jpg mungkin tiada — tak apa
  ));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('lawatan-ladang-') && k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || req.url.includes('script.google')) return;

  // Halaman: cuba internet dulu (dapat versi terbaru), jika gagal guna salinan
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => {
      caches.open(CACHE).then(c => c.put('./index.html', r.clone()));
      return r;
    }).catch(() => caches.match('./index.html')));
    return;
  }

  // Fail lain: guna salinan dulu, jika tiada ambil dari internet
  e.respondWith(caches.open(CACHE).then(c => c.match(req)).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return r;
  })));
});
