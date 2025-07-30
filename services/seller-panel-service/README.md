# Seller Panel Service

Панель продавца: управление товарами, заказами, настройками магазина, финансовая отчетность и рекламные кампании.

## Начало работы

1. Установить зависимости: `npm install`
2. Создать и заполнить `.env` (пример в `.env.example`)
3. Запустить сервис в режиме разработки: `npm run start:dev`

## Эндпоинты
- GET `/api/seller/products?userId={userId}`
- POST `/api/seller/products` — создать товар
- PUT `/api/seller/products/:id` — обновить товар
- DELETE `/api/seller/products/:id` — удалить товар
- GET `/api/seller/orders?userId={userId}`
- GET `/api/seller/orders/:id`
- ... и т.д.