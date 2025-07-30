🟢 PROJECT MCP: ETSY-LIKE MULTI-VENDOR MARKETPLACE
Project Info
Name: MyMarketplace

Type: Multi-vendor, scalable, microservice, mobile+web, AI-Ready

Stack:

Backend: NestJS (TypeScript, microservice)

Frontend (web): Next.js (React, TypeScript)

Mobile app: React Native (TypeScript)

Database: PostgreSQL

Cache/Queue: Redis, RabbitMQ

DevOps: Docker, Github Actions, Docker Compose

Authentication: JWT/OAuth2

🟦 1. Core Backend Microservices (NestJS – TypeScript, Docker)
1.1. User Service
1.1.1. Registration (buyer/seller/admin)

1.1.2. Login (JWT, OAuth)

1.1.3. Roles & permissions (buyer/seller/admin)

1.1.4. Profile management (edit info, avatar)

1.1.5. Password recovery

1.2. Product Service
1.2.1. Create/Edit/Delete product (seller)

1.2.2. Product attributes (size, color, category)

1.2.3. Product media upload (images/video)

1.2.4. Product status (active/inactive)

1.2.5. Admin moderation (approve, reject)

1.3. Store (Shop) Service
1.3.1. Seller creates/edits own store (profile, logo, description)

1.3.2. Store page and stats

1.3.3. Store status (active/suspended)

1.4. Order Service
1.4.1. Create order (buyer)

1.4.2. Track order status (pending, shipped, delivered, cancelled)

1.4.3. Order management (buyer/seller/admin)

1.4.4. Refunds/returns

1.5. Cart/Wishlist Service
1.5.1. Add/remove to cart

1.5.2. Add/remove to wishlist

1.6. Payment Service
1.6.1. Payment gateway integration (Stripe, PayPal, future UzCard/Humo)

1.6.2. Transaction log

1.6.3. Seller payout management

1.7. Review & Rating Service
1.7.1. Buyer reviews product/seller

1.7.2. Rating calculation

1.7.3. Abuse reporting

1.8. Notification Service
1.8.1. Email, SMS, push (order update, new message, etc)

1.8.2. Internal messaging (buyer-seller/admin)

1.9. Search Service
1.9.1. Full-text search (product/store)

1.9.2. Filter, sort, keyword analytics

1.9.3. Auto-suggest

1.10. AI Recommendation Service
1.10.1. Personalized products feed

1.10.2. Frequently bought together

1.10.3. Search keyword analytics

1.11. Analytics Service
1.11.1. Marketplace stats (sales, visitors, trends)

1.11.2. Seller analytics

1.11.3. Admin dashboard

1.12. Admin Panel Service
1.12.1. Moderation (product, review, store, user)

1.12.2. Platform config (fees, rules)

1.12.3. Ticket/support system

1.12.4. Banner/marketing management

1.13. Seller Panel Service
1.13.1. Product management

1.13.2. Order management

1.13.3. Store settings

1.13.4. Financial reports

1.13.5. Ad management (for paid promotions)

🟦 2. Frontend (Web) – Next.js (React, TypeScript, Docker)
2.1. Public Site
2.1.1. Homepage, categories, search, product pages

2.1.2. Registration/login pages

2.1.3. Storefront pages

2.1.4. Cart, wishlist, checkout

2.2. Buyer Dashboard
2.2.1. Orders

2.2.2. Wishlist

2.2.3. Messages

2.2.4. Profile/settings

2.3. Seller Dashboard
2.3.1. My products

2.3.2. My orders

2.3.3. Store stats

2.3.4. Finances

2.3.5. Promotions

2.4. Admin Dashboard
2.4.1. Manage users, products, stores

2.4.2. Platform settings

2.4.3. Analytics/reports

🟦 3. Mobile App (React Native, TypeScript, Docker for API)
3.1. Buyer App
3.1.1. Product search/browse

3.1.2. Cart, checkout

3.1.3. Orders tracking

3.1.4. Notifications

3.2. Seller App
3.2.1. Manage products/orders

3.2.2. Store analytics

3.2.3. Messaging

3.3. Push notifications
🟦 4. DevOps & Deployment
4.1. Docker Compose
4.1.1. All microservices as containers

4.1.2. PostgreSQL, Redis, RabbitMQ as containers

4.2. CI/CD
4.2.1. Github Actions

🟦 5. Workflow: Sort by AI task order
1. Core Backend Microservices

1.1 ➔ 1.2 ➔ 1.3 ➔ 1.4 ➔ ... (yuqoridagidek tartibda)

2. Frontend (Web)

2.1 ➔ 2.2 ➔ 2.3 ➔ 2.4

3. Mobile App

3.1 ➔ 3.2 ➔ 3.3

4. DevOps

4.1 ➔ 4.2