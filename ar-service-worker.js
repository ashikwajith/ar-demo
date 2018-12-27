self.addEventListener('install', e => {
    console.log('service worker installed');
});

self.addEventListener('activated', e => {
    console.log('service worker activated');
});
