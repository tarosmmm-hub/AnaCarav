import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/site";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anacarav.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/shop", "/collections", "/about", "/help"].map((p) => ({ url: `${SITE}${p}` }));
  return [
    ...pages,
    ...categories.map((c) => ({ url: `${SITE}/shop/${c.handle}` })),
    ...products.map((p) => ({ url: `${SITE}/products/${p.handle}` })),
  ];
}
