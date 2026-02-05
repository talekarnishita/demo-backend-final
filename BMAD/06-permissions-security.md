# Permissions & Security

## Crucial Step for New Deployments

By default, Strapi APIs are private (403 Forbidden). You must configure the **Public** role to allow access.

1. Go to **Admin Panel** (`/admin`) → **Settings** → **Users & Permissions** → **Roles**.
2. Click **Public**.
3. Enable Permissions:
   - **Product**: `find`, `findOne`
   - **Payment**: `createCheckoutSession`
4. Click **Save**.

Without this, the frontend will receive 403 errors.
