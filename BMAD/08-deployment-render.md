# Deployment (Render)

The backend uses a `render.yaml` Blueprint for infrastructure-as-code.

## Deployment Steps

1. Push code to GitHub.
2. Create New Blueprint Instance on Render.
3. **Manual Step**: Go to Dashboard → Environment.
   - Add `STRIPE_SECRET_KEY` (ensure no spaces).
   - Add all secret keys (`APP_KEYS`, `API_TOKEN_SALT`, etc.).

## Environment Variables on Render

- `DATABASE_URL`: Automatically provided by Render PostgreSQL.
- `NODE_ENV`: Set to `production`.
- `STRIPE_SECRET_KEY`: Set manually.
