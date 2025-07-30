# Store Service

Управление магазинами: создание, редактирование профиля магазина (имя, описание, логотип), статус (active/suspended) и статистика.

## Начало работы

1. Установить зависимости: `npm install`
2. Создать и заполнить `.env` (пример в `.env.example`)
3. Запустить сервис в режиме разработки: `npm run start:dev`

## Эндпоинты
- GET `/api/stores`
- GET `/api/stores/:id`
- POST `/api/stores`
- PUT `/api/stores/:id`
- DELETE `/api/stores/:id`