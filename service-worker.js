const CACHE='pocketpal-v1';
const ASSETS=['./','./index.html','./style.css','./script.js','./manifest.json','./assets/icons/icon.svg'];
const CDN=['https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(async cache=>{await cache.addAll(ASSETS);await Promise.all(CDN.map(url=>fetch(url,{mode:'no-cors'}).then(r=>cache.put(url,r)).catch(()=>null)))}).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{const copy=response.clone();if(new URL(event.request.url).origin===location.origin)caches.open(CACHE).then(c=>c.put(event.request,copy));return response}).catch(()=>caches.match('./index.html'))))});
