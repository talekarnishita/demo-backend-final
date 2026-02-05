/**
 * Payment controller – create Stripe Checkout Session.
 * Uses STRIPE_SECRET_KEY from env or config/defaults.ts (for testing).
 */
import { factories } from '@strapi/strapi';
import { defaults } from '../../../../config/defaults';

export default factories.createCoreController('api::payment.payment', ({ strapi }) => ({
  async createCheckoutSession(ctx) {
    const body = ctx.request.body ?? {};
    const amount = body.amount as number | undefined;
    const successUrl = body.successUrl as string | undefined;
    const cancelUrl = body.cancelUrl as string | undefined;
    const currency = (body.currency as string) ?? 'usd';
    const productId = body.productId as string | number | undefined;

    if (amount == null || !successUrl || !cancelUrl) {
      return ctx.badRequest('Missing amount, successUrl, or cancelUrl');
    }

    const stripeSecret = process.env.STRIPE_SECRET_KEY || defaults.STRIPE_SECRET_KEY;
    // #region agent log
    try {
      const fs = require('fs');
      const logPath = '/Users/nishitatalekar/BMAD/.cursor/debug.log';
      const logEntry = JSON.stringify({
        location: 'backend/src/api/payment/controllers/payment.ts:22',
        message: 'Checking Stripe Secret V3',
        data: {
          envSecretRaw: process.env.STRIPE_SECRET_KEY,
          envSecretLen: process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.length : 0,
          defaultsSecret: defaults.STRIPE_SECRET_KEY,
          allEnvKeys: Object.keys(process.env).filter(k => k.includes('STRIPE') || k === 'PORT')
        },
        timestamp: Date.now(),
        sessionId: 'debug-session-v3'
      }) + '\n';
      fs.appendFileSync(logPath, logEntry);
    } catch (e) {
      // ignore
    }
    // #endregion
    if (!stripeSecret) {
      return ctx.badRequest('STRIPE_SECRET_KEY is not set; set in env or config/defaults.ts for testing');
    }

    const stripe = require('stripe')(stripeSecret);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency,
            unit_amount: Math.round(Number(amount) * 100),
            product_data: { name: 'Order' },
          },
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { productId: String(productId ?? '') },
    });

    ctx.body = { url: session.url };
  },
}));
