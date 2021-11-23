'use strict';
//const { response } = require("express");

//Puede ser necesario ponerlo para versiones anteriores de JS

//Crear una variable para cache de tipo String
const CACHE_NAME = 'static-cache-v9';

//Array de elementos que se guardaran en cache (uso offline)
const FILES_TO_CACHE = [
    '/index.html',
    '/images/icon512.png',
    '/install.js'
];

//Evento Fetch 
// Este evento permite revisar mi cache para usar recursos guardados, de lo contrario
// será necesario ir a la web usando Fetch
self.addEventListener('fetch', (evt) =>{
    console.log('Fetch del Service Worker', evt.request.url);
    evt.respondWith(
        caches.open(CACHE_NAME).then((cache)=> {
            return cache.match(evt.request).then((response)=>{
                console.log('RESP', response);
                return response || fetch(evt.request);
            });
        })
    );
});


//Evento Activar
//Sirve para comparar la cache, recorre los elementos y realiza el mapeo
//Borrando los elementos antiguos que ya no se usan

self.addEventListener('activate',(evt) => {
    console.log('ServiceWorker Activte');
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if(key != CACHE_NAME) {
                    console.log('Elementos viejos de cache removidos');
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

//Evento instalar

self.addEventListener('install', (evt)=>{
    console.log('La instalación esta funcionando');
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log('Cargando archivos...');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});
