# After creating Strapi: add payment route

Once you’ve run `npx create-strapi-app@latest . --quickstart` inside `backend/`, you can add a custom Stripe payment route.

## 1. Install Stripe in backend

```bash
cd backend
npm install stripe
```

## 2. Create the payment API in Strapi

In Strapi 5 you can add a custom route.

**`backend/src/api/payment/routes/01-create-checkout.ts`**:

```ts
import type { Core } from '@strapi/strapi';

const config: Core.RouterConfig = {
  type: 'content-api',
  prefix: '/payments',
  routes: [
    {
      method: 'POST',
      path: '/create-checkout-session',
      handler: 'api::payment.payment.createCheckoutSession',
      config: { auth: false }, // Public access (handled by controller or use API token)
    },
  ],
};

export default config;
```

**`backend/src/api/payment/controllers/payment.ts`**:

```ts
import { factories } from '@strapi/strapi';
import { defaults } from '../../../../config/defaults';

export default factories.createCoreController('api::payment.payment', ({ strapi }) => ({
  async createCheckoutSession(ctx) {
    const { amount, currency = 'usd', successUrl, cancelUrl, productId } = ctx.request.body ?? {};
    if (!amount || !successUrl || !cancelUrl) {
      return ctx.badRequest('Missing amount, successUrl, or cancelUrl');
    }
    
    const stripeSecret = process.env.STRIPE_SECRET_KEY || defaults.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
      return ctx.badRequest('STRIPE_SECRET_KEY is not set');
    }

    const stripe = require('stripe')(stripeSecret);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price_data: { currency, unit_amount: Math.round(Number(amount) * 100), product_data: { name: 'Order' } }, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { productId: String(productId ?? '') },
    });
    ctx.body = { url: session.url };
  },
}));
```

## 3. Register the route

The route is automatically registered by placing it in the `routes/` folder with the filename starting with `01-` (to ensure it loads before default routes) or simply `payment.ts`.

Set `STRIPE_SECRET_KEY` in `backend/.env`.

See [02 – Payment gateway](02-payment-gateway.md) for the full flow and frontend usage.
