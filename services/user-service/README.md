# User Service

Отвечает за регистрацию, вход, управление профилями пользователей (покупатели, продавцы, администраторы), роли и права, восстановление пароля.

## Начало работы

Для запуска разработки необходимо:
1. Установить зависимости: `npm install`
2. Настроить `.env` (пример в `.env.example`):
   ```
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=marketplace
   JWT_SECRET=yourSecretKey
   JWT_EXPIRES_IN=3600s
   ```
3. Запустить в режиме разработки: `npm run start:dev`
4. Регистрация и логин:
   - POST `/api/auth/register`
   - POST `/api/auth/login`