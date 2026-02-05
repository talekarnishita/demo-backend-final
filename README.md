# 🦅 Backend Master Guide

> **Your central command center for the Strapi Headless CMS.**
> Everything you need to know about the API, Database, and Payment Logic.

**Status**: 🟢 **Live & Production Ready**
- **Backend API**: [https://demo-backend-final.onrender.com](https://demo-backend-final.onrender.com)

---

## 📚 Documentation Modules

Navigate the backend universe with these focused guides:

| Module | What's Inside |
|--------|---------------|
| **[🏗️ Architecture & Stack](backend/01-architecture-tech-stack.md)** | The blueprint. How Strapi, Node.js, and Postgres power the engine. |
| **[📂 Project Structure](backend/04-project-structure.md)** | A map of the codebase. Know exactly where `routes`, `controllers`, and `config` live. |
| **[🔌 API Routes](backend/05-api-routes.md)** | The API Contract. Detailed endpoints for Products (`GET`, `POST`) and Payments. |
| **[💳 Payment Gateway](backend/02-payment-gateway.md)** | **Critical**. How we talk to Stripe, handle secrets, and process checkouts. |
| **[🗄️ Data Schema](backend/03-data-modelling-schema.md)** | The Data Model. Deep dive into `Product` and `Payment` content types. |
| **[🔐 Permissions & Security](backend/06-permissions-security.md)** | **Must Read**. How to fix `403 Forbidden` errors by configuring Public roles. |
| **[🚀 Deployment (Render)](backend/08-deployment-render.md)** | Go Live. Steps to deploy on Render using `render.yaml` and environment vars. |
| **[🕷️ Scraper Integration](backend/07-scrapy-integration.md)** | Automate content. Feeding the beast with Python Scrapy. |
| **[🆘 Troubleshooting](backend/09-troubleshooting.md)** | Got a problem? Find the solution here (Keys, Database, Permissions). |

---

## ⚡ Quick Start (Local Dev)

Get your backend running in 60 seconds:

1.  **Enter the arena**:
    ```bash
    cd backend
    ```
2.  **Equip dependencies**:
    ```bash
    npm install
    ```
3.  **Configure secrets**:
    ```bash
    cp .env.example .env
    # ⚠️ EDIT .env: Add your STRIPE_SECRET_KEY (No spaces!)
    ```
4.  **Ignite the server**:
    ```bash
    npm run develop
    ```

---

## 🧩 Key Systems

### 1. The Engine (Strapi v5)
We use Strapi 5 for its robust Headless CMS capabilities. It provides the **Admin Panel** for content managers and the **REST API** for our React frontend.

### 2. The Bank (Stripe)
Payments are handled securely via a custom controller. The frontend never touches the secret key.
- **Route**: `POST /api/payments/create-checkout-session`
- **Logic**: Creates a Stripe Session -> Returns URL -> Frontend Redirects.

### 3. The Vault (Database)
- **Local**: fast `sqlite` (`.tmp/data.db`)
- **Production**: robust `postgres` (Managed by Render)

---

*Documentation is a living entity. Keep it updated.*
