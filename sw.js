
const CACHE='kids-games-v2';
const ASSETS = [
    '/', '/index.html',
    '/manifest.json', '/sw.js',
    '/styles/app.css', '/js/common.js',
    '/games/memory.html','/games/bingo.html','/games/plant.html',
    '/games/math.html','/games/media.html',
    '/assets/images/common/card_back.png',
    '/assets/images/common/haeun.png','/assets/images/common/harim.png'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request).then(r=>{
      const copy = r.clone();
      caches.open(CACHE).then(c=> c.put(e.request, copy));
      return r;
    }).catch(()=> caches.match('/index.html')))
  );
});
