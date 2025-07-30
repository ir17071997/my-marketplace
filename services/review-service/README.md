# Review & Rating Service

Обработка отзывов и рейтингов: добавление отзывов по товарам/продавцам, расчет рейтингов, модерация и жалобы (abuse reporting).

## Начало работы

1. Установить зависимости: `npm install`
2. Создать и заполнить `.env` (пример в `.env.example`)
3. Запустить сервис в режиме разработки: `npm run start:dev`

## Эндпоинты

- GET `/api/reviews` — список всех отзывов
- GET `/api/reviews/:id` — получить отзыв по ID
- POST `/api/reviews` — создать отзыв (userId, productId?, sellerId?, rating, comment)
- PUT `/api/reviews/:id` — обновить отзыв или статус жалобы (reported)
- DELETE `/api/reviews/:id` — удалить отзыв