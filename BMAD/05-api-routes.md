# API Routes

## Product Routes (Auto-generated CRUD)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products |
| GET | `/api/products/:id` | Get single product by ID |
| POST | `/api/products` | Create product (requires auth) |

**Query Parameters**:
- `populate=image` - Include image relation in response

## Payment Routes (Custom)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/payments/create-checkout-session` | No* | Create Stripe Checkout session |

*Auth*: Configured as public (`config: { auth: false }`) in `routes/01-create-checkout.ts`.
