# ANA CARAV — Holbox, Mexico

Digital flagship for ANA CARAV: an editorial fashion experience with commerce built in.
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start   # production
```

Optional: `NEXT_PUBLIC_SITE_URL=https://your-domain` for canonical URLs, sitemap and Open Graph.

## Structure

```
src/
  data/
    types.ts       Commerce types (Storefront-API shaped)
    products.ts    Real catalog from caravana.cl, verified 2026-09-28
    site.ts        Brand, navigation, editorial copy, Holbox imagery, craft notes
  lib/
    catalog.ts     The only door UI uses to read products (async, swap for Shopify)
    image-loader.ts  Serves images from Shopify CDN / Unsplash at the requested width
  components/
    layout/        Header (transparent → solid), MegaMenu, MobileMenu, Footer, Cursor
    commerce/      ProductCard, QuickView, CartDrawer, SearchOverlay, ProductGallery, ProductInfo, ShopView
    home/          Hero, Marquee, HolboxSection, EditorialCollection, NewArrivals, FullBleed,
                   Story, Craft, Journey, ShopByCategory, FollowSection, VisitStore, Newsletter
    ui/            Photo, Motion (Reveal, ImageReveal, Parallax, LineReveal), Drawer, Accordion
  app/             Routes: /, /shop, /shop/[category], /collections, /products/[handle],
                   /about, /account, /checkout, /help, sitemap.xml, robots.txt
scripts/           QA helpers (Playwright screenshots and interaction flows)
```

## Connecting Shopify

1. Implement `getProducts`, `getProduct` in `src/lib/catalog.ts` with Storefront API
   queries and map the response to the `Product` type in `src/data/types.ts`.
2. In `src/components/commerce/CheckoutSummary.tsx`, call `cartCreate` with the bag
   lines and redirect to the returned `checkoutUrl`.
3. Newsletter: wire `Newsletter.tsx` to `customerCreate` (acceptsMarketing) or your ESP.

## Content still to confirm with the brand

- Exact street address of the Holbox boutique (`brand.address` in `src/data/site.ts`).
- Instagram images: Instagram blocks automated access; connect the Instagram Graph API
  (token) to feed `FollowSection`. Until then it uses the brand's product photography.
- Textile origin (e.g. India) for The Journey: add a stop in `journey` once confirmed.
- Holbox location photos are from Unsplash (free licence, credited in the footer);
  replace with ANA CARAV's own shoot when available.
