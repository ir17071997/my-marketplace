# Notification Service

Уведомления: email, SMS, push-уведомления, внутренняя переписка между пользователями.

## Начало работы

1. Установить зависимости: `npm install`
2. Создать и заполнить `.env` (пример в `.env.example`)
3. Запустить сервис в режиме разработки: `npm run start:dev`

## Эндпоинты

- GET `/api/notifications` — список уведомлений
- GET `/api/notifications/:id` — детальная информация об уведомлении
- POST `/api/notifications` — создать уведомление (userId, type, payload)
- PUT `/api/notifications/:id` — обновить статус (например, прочитано)
- DELETE `/api/notifications/:id` — удалить уведомление