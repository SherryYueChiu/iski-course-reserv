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
    fetch(event.request)
      .then(response => {
        // Clone the response as it can only be consumed once
        const responseToCache = response.clone();
        
        // Open the cache and store the response
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
        
        return response;
      })
      .catch(() => {
        // If network fails, try to get from cache
        return caches.match(event.request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If not in cache, return a fallback response
            return new Response('Network error occurred');
          });
      })
  );
}); 