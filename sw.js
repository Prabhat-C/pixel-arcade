// Caches the whole arcade so it keeps working offline after the first visit.
// Bump VERSION whenever you change any file, so players get the update.
var VERSION = 'pixel-arcade-v1';
var FILES = [
  './', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png',
  'core.js', 'g_dragon.js', 'g_cave.js', 'g_flip.js', 'g_copter.js', 'g_stack.js', 'g_snake.js',
  'g_breakout.js', 'g_asteroids.js', 'g_invaders.js', 'g_2048.js', 'g_sweeper.js', 'g_memory.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Network first (so updates show up), falling back to the cache when offline.
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      var copy = res.clone();
      caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(e.request, { ignoreSearch: true });
    })
  );
});
