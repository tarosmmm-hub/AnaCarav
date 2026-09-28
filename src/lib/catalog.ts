import { products } from "@/data/products";
import type { CategoryHandle, Product } from "@/data/types";

/**
 * The only module UI reads product data through. Every function is async so
 * the static catalog can be replaced by Shopify Storefront API calls
 * (e.g. `storefront.query(PRODUCTS_QUERY)`) mapped to `Product` with no UI changes.
 */
export async function getProducts(opts?: {
  category?: CategoryHandle;
  sort?: "new" | "sale" | "royal";
}): Promise<Product[]> {
  let list = [...products];
  if (opts?.category) list = list.filter((p) => p.category === opts.category);
  if (opts?.sort === "royal") list = list.filter((p) => /royal/i.test(p.title));
  if (opts?.sort === "sale") list = list.filter((p) => p.variants.some((v) => v.compareAtPrice));
  return list.sort((a, b) => a.rank - b.rank);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return products.find((p) => p.handle === handle);
}

export async function getNewArrivals(limit = 8) {
  const list = await getProducts();
  return list.filter((p) => p.category !== "accessories" && p.images.length > 1).slice(0, limit);
}

export async function getRelated(product: Product, limit = 4) {
  const list = await getProducts({ category: product.category });
  return list.filter((p) => p.handle !== product.handle).slice(0, limit);
}

export function pick(handles: string[]): Product[] {
  return handles
    .map((h) => products.find((p) => p.handle === h))
    .filter((p): p is Product => Boolean(p));
}

export function searchProducts(q: string): Product[] {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return products.filter((p) => `${p.title} ${p.category}`.toLowerCase().includes(s)).slice(0, 8);
}

export const formatPrice = (amount: number) =>
  "$" + amount.toLocaleString("es-CL") + " CLP";

export const isOnSale = (p: Product) => p.variants.some((v) => v.compareAtPrice && v.compareAtPrice.amount > v.price.amount);
