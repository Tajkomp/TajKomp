self.addEventListener('fetch', function(event) {});
// Обработка клика по уведомлению
self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // Закрываем уведомление после клика
    event.waitUntil(
        clients.openWindow('/') // Открываем главную страницу сайта TajKomp
    );
});
