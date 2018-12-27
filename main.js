if('serviceWorker' in navigator) {
    window.addEventListener('load', ()=> {
        navigator.serviceWorker
        .register('./ar-service-worker.js')
        .then(reg => console.log("sw -> registered"))
        .catch(err => console.log('sw -> not registered'));
    });
}