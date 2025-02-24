importScripts('/proxy/uv.bundle.js');
importScripts('/proxy/uv.config.js');
importScripts('/proxy/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
