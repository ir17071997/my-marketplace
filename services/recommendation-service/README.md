# AI Recommendation Service

Персонализированные рекомендации продуктов, часто покупаемые вместе, аналитика поисковых запросов.

## Начало работы

1. Установить зависимости: `npm install`
2. Создать и заполнить `.env` (пример в `.env.example`)
3. Запустить сервис в режиме разработки: `npm run start:dev`

## Эндпоинты

- GET `/api/recommendations/personalized?userId={userId}` — персонализованная лента продуктов
- GET `/api/recommendations/bundles?productId={productId}` — часто покупаемые вместе продукты
- GET `/api/recommendations/logs?userId={userId}` — история выдачи рекомендаций