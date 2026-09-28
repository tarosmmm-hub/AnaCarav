import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopView } from "@/components/commerce/ShopView";
import { getProducts } from "@/lib/catalog";
import { categories } from "@/data/site";
import type { CategoryHandle } from "@/data/types";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.handle }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const c = categories.find((x) => x.handle === category);
  return c
    ? { title: c.label, description: `${c.label} by ANA CARAV, Holbox, Mexico. ${c.note}.`, alternates: { canonical: `/shop/${c.handle}` } }
    : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = categories.find((x) => x.handle === category);
  if (!c) notFound();
  const products = await getProducts({ category: category as CategoryHandle });
  return <ShopView products={products} kicker={c.note} title={[<em key="e">{c.label}</em>]} active={c.handle} intro="Prices in Chilean pesos." />;
}
