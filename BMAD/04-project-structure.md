# Project Structure

```
backend/
├── config/
│   ├── admin.ts          # Admin panel config
│   ├── database.ts       # Database connection config
│   ├── defaults.ts       # Default values for testing
│   ├── plugins.ts        # Plugin configuration
│   └── server.ts         # Server host/port config
├── src/
│   └── api/
│       ├── payment/      # Payment content type & custom routes
│       │   ├── content-types/payment/schema.json
│       │   ├── controllers/payment.ts
│       │   ├── routes/
│       │   │   ├── 01-create-checkout.ts  # Custom Stripe route
│       │   │   └── payment.ts             # Default CRUD routes
│       │   └── services/payment.ts
│       └── product/      # Product content type
│           ├── content-types/product/schema.json
│           ├── controllers/product.ts
│           ├── routes/product.ts
│           └── services/product.ts
├── .env                  # Environment variables (not committed)
├── .env.example          # Environment template
├── render.yaml           # Render deployment config
└── package.json
```
