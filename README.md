# containerhuizen-shop

MVP webshop voor containerwoningen met admin, Postgres (Prisma) en Mollie betalingen (iDEAL + PayPal).

## Setup
1. Kopieer `.env.example` naar `.env` en vul de variabelen.
2. `npm install`
3. `npx prisma generate`
4. `npx prisma migrate dev --name init`
5. `node prisma/seed.js`
6. `npm run dev`

Deploy op Vercel + Supabase of Railway (Postgres).
