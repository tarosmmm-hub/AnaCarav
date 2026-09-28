/**
 * Commerce types. Shaped after the Shopify Storefront API so the static
 * catalog in `products.ts` can be swapped for live Storefront queries
 * (see `src/lib/catalog.ts`) without touching any UI component.
 */
export type CategoryHandle =
  | "dresses"
  | "tops"
  | "bottoms"
  | "kimonos"
  | "sets"
  | "accessories";

export type Money = { amount: number; currencyCode: "CLP" };

export type ProductImage = { src: string; alt: string };

export type ProductVariant = {
  id: string;
  title: string;
  price: Money;
  compareAtPrice?: Money;
  availableForSale: boolean;
};

export type Product = {
  handle: string;
  title: string;
  category: CategoryHandle;
  /** Verbatim copy from the source store. Empty when the source has none. */
  description?: string;
  material?: string;
  measurements?: string;
  images: ProductImage[];
  variants: ProductVariant[];
  /** Order in "New arrivals": lower is newer (source store publish order). */
  rank: number;
  /** Swatch used while the photograph loads. */
  tone: string;
  sourceUrl: string;
};

export type Category = {
  handle: CategoryHandle;
  label: string;
  note: string;
};
