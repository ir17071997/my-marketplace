# Web Frontend (Next.js)

Веб-приложение (Next.js) для покупателей, продавцов и администраторов.

## Начало работы

1. Установить зависимости: `npm install`
2. Создать `.env.local` (пример в `.env.example`):
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```
3. Запустить в режиме разработки: `npm run dev`
4. Запустить тесты: `npm run test`

## Структура проекта

- `pages/` – страницы Next.js (SSR/SSG)
- `components/` – переиспользуемые React-компоненты
- `public/` – статические файлы (изображения, favicon и т.п.)
- `styles/` – глобальные и модульные стили (CSS/SCSS)
```