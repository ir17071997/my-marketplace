# Инфраструктура

Содержит конфигурацию для запуска приложения:
- `docker-compose.yml` – Поднимает все микросервисы и зависимости (PostgreSQL, Redis, RabbitMQ).
- CI/CD (GitHub Actions) и другие скрипты.

## Быстрый старт

```bash
cd infra
docker compose up -d --build
```