# Payment Gateway (Stripe) Integration

## How It Works

1. Frontend calls `POST /api/payments/create-checkout-session` with `amount`, `successUrl`, `cancelUrl`.
2. Backend controller (`src/api/payment/controllers/payment.ts`) creates a Stripe Checkout Session.
3. Backend returns `{ url }`.
4. Frontend redirects user to Stripe.

## Critical: Stripe Key Configuration

- **Local**: Set `STRIPE_SECRET_KEY` in `.env`.
- **Render**: You **MUST** manually add `STRIPE_SECRET_KEY` in the Render Dashboard (Environment variables).
- **Warning**: Ensure there are **no leading spaces** in the key value (e.g. ` sk_test...` will fail).
