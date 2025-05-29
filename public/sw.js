const CACHE_NAME = 'iski-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/image/1.webp',
  '/image/2.webp',
  '/image/3.webp',
  '/image/4.webp',
  '/image/5.webp',
  '/image/6.webp',
  '/image/7.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
}); 