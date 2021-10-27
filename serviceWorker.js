const cacheName = "tudo-de-bom-bebidas-v1"

const recursosCacheados = [
    "./",
    "./index.html",
    "./index.js",
    "./cocacola.html",
    "./vitamina.html",
    "./cerveja.html",
    "./pagamento.html",
    "./index.css",
    "./produto.css",
    "./pagamento.css",
    "./favicon.ico",
    "./manifest.json",
    "./icons/apple-icon-57x57.png",
    "./icons/apple-icon-60x60.png",
    "./icons/apple-icon-72x72.png",
    "./icons/apple-icon-76x76.png",
    "./icons/apple-icon-114x114.png",
    "./icons/apple-icon-120x120.png",
    "./icons/apple-icon-144x144.png",
    "./icons/apple-icon-152x152.png",
    "./icons/apple-icon-180x180.png",
    "./icons/favicon-512x512.png",
    "./icons/android-icon-192x192.png",
    "./icons/favicon-32x32.png",
    "./icons/favicon-96x96.png",
    "./icons/favicon-16x16.png",
    "./icons/ms-icon-144x144.png",
    "./img/ofertas-imperdiveis-paodeacucar-1.jpg",
    "./img/espanhola-cremoso.jpg",
    "./img/cerveja-becks.jpg",
  ];

self.addEventListener("install", function (event) {
    console.log("Service Worker instalado!")
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(recursosCacheados);
        })
    );
});

self.addEventListener("fetch", function (event) {
    console.log(`Request para o recurso ${event.request.url}`);
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          console.log(`Recurso encontrado no cache: ${event.request.url}`);
          return response;
        } else {
          console.log(
            `Recurso não encontrado no cache. Fazendo request para ${event.request.url}`
          );
          return fetch(event.request);
        }
      })
    );
  });