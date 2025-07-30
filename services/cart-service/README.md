# Cart & Wishlist Service

Cart & Wishlist Service: добавление и удаление товаров в корзину и в список желаемого.

## Начало работы

1. Установить зависимости: `npm install`
2. Создать и заполнить `.env` (пример в `.env.example`)
3. Запустить сервис в режиме разработки: `npm run start:dev`

## Эндпоинты

- GET `/api/cart?userId={userId}` — получить содержимое корзины пользователя
- POST `/api/cart` — добавить товар в корзину
- DELETE `/api/cart/:id` — удалить товар из корзины
- GET `/api/wishlist?userId={userId}` — получить список желаемого
- POST `/api/wishlist` — добавить товар в список желаемого
- DELETE `/api/wishlist/:id` — удалить товар из списка желаемого