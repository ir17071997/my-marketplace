# Product Service

Отвечает за создание, редактирование и удаление товаров, управление статусом и атрибутами продукта.

## Начало работы

1. Установить зависимости: `npm install`
2. Создать и заполнить `.env` (пример в `.env.example`):
   ```
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=marketplace
   ```
3. Запустить сервис в режиме разработки: `npm run start:dev`

## Эндпоинты

- GET `/api/products` — список всех товаров
- GET `/api/products/:id` — получить товар по ID
- POST `/api/products` — создать новый товар
- PUT `/api/products/:id` — обновить товар
- DELETE `/api/products/:id` — удалить товар