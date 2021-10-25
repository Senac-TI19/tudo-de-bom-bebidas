const cacheName = 'cache-app-v1'

const recursosCacheados = ["index.html", "index.css", "produto.html", "produto.css", "pagamento.html", "pagamento.css", "index.js"]

self.addEventListener("install", function (event) {
    console.log("Service Worker instalado!")
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(recursosCacheados);
        })
    );
});

