# MyMarketplace

Etsy-like multi-vendor marketplace platform.

## Prerequisites

- Ubuntu 20.04 or later (or any Linux distribution)
- Node.js v16+ and npm
- Docker and Docker Compose v2
- Git

## Quick Start (Ubuntu)

```bash
# Clone the repository
git clone <repository_url> my-marketplace
cd my-marketplace

# Copy environment examples for each service
cp infra/.env.example infra/.env
cp services/user-service/.env.example services/user-service/.env
cp services/product-service/.env.example services/product-service/.env
# ... repeat for other services as needed
cp web/.env.example web/.env.local

# Build and start all services and frontend
cd infra
docker compose up -d --build

# Open your browser at http://localhost:3000
```

---

## Архитектура

- Backend: NestJS (TypeScript, microservice)
- Frontend (Web): Next.js (React, TypeScript)
- Mobile: React Native (TypeScript)
- Database: PostgreSQL
- Cache/Queue: Redis, RabbitMQ
- DevOps: Docker, GitHub Actions, Docker Compose
- Authentication: JWT/OAuth2

## Структура проекта

- `services/user-service/` – Сервис пользователей
- `services/product-service/` – Сервис товаров
- `services/store-service/` – Сервис магазинов
- `services/order-service/` – Сервис заказов
- `services/cart-service/` – Сервис корзины и избранного
- `services/payment-service/` – Сервис оплаты
- `services/review-service/` – Сервис отзывов и рейтингов
- `services/notification-service/` – Сервис уведомлений
- `services/search-service/` – Сервис поиска
- `services/recommendation-service/` – Сервис AI-рекомендаций
- `services/analytics-service/` – Сервис аналитики
- `services/admin-panel-service/` – Сервис админ-панели
- `services/seller-panel-service/` – Сервис панели продавца
- `web/` – Веб-фронтенд (Next.js)
- `mobile/` – Мобильное приложение (React Native)
- `infra/` – Инфраструктура: Docker Compose, CI/CD
- `project_mcp.md` – Исходный MCP проекта

## Следующие шаги

1. Инициализация первых микросервисов (начнем с User, Product, Store, Order, Cart, Payment, Review, Notification, Search, Recommendation, Analytics, Admin Panel и Seller Panel Services)
2. Запуск Web Frontend (Next.js) и UI панелей: `cd web && npm run dev`
3. Настройка CI/CD: `Создан GitHub Actions workflow .github/workflows/ci.yml`
2. Настройка окружения Docker и Docker Compose
3. Разработка API и схем базы данных
4. Реализация аутентификации и управления пользователями
5. …