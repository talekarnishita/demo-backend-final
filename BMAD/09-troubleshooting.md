# Troubleshooting

## 1. API 403 Forbidden
- **Cause**: Public role permissions not set.
- **Fix**: Go to Admin → Settings → Roles → Public. Enable `find/findOne` for Product and `createCheckoutSession` for Payment.

## 2. "STRIPE_SECRET_KEY is not set"
- **Cause**: Missing env var or `render.yaml` `sync: false`.
- **Fix**: Add it manually in Render Dashboard.

## 3. Stripe Authentication Error
- **Cause**: Leading/trailing space in `STRIPE_SECRET_KEY`.
- **Fix**: Edit env var and remove spaces.

## 4. "Could not read package.json"
- **Cause**: Running commands from root instead of `backend/`.
- **Fix**: `cd backend` before running `npm`.
