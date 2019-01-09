if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js', { scope: './' })
        .then(function(reg) {
            console.log('[Page] Service worker registered!');
        });
}