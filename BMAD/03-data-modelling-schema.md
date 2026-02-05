# Content Types & Schema

## Product

Collection type for managing products in the store.

**Schema** (`src/api/product/content-types/product/schema.json`):

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Product name |
| `slug` | uid | No | Auto-generated from name (URL-friendly) |
| `price` | decimal | No | Product price in USD |
| `description` | text | No | Product description |
| `image` | media | No | Single media file (image) |

## Payment

Collection type for tracking payment-related data (minimal schema; main logic in controller).

**Schema** (`src/api/payment/content-types/payment/schema.json`):

| Field | Type | Description |
|-------|------|-------------|
| `stripeSessionId` | string | ID of the Stripe Checkout Session |
