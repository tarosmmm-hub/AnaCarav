import type { Metadata } from "next";
import { ShopView } from "@/components/commerce/ShopView";
import { getProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Shop",
  description: "Kimonos, sets, dresses and jewellery from ANA CARAV, a boutique on the island of Holbox, Mexico.",
  alternates: { canonical: "/shop" },
};

const heads = {
  new: { kicker: "New arrivals", title: ["Just", "landed."] },
  sale: { kicker: "Sale", title: ["Island", "prices."] },
  royal: { kicker: "The Royal Edit", title: ["The Royal", "edit."] },
} as const;

export default async function Shop({ searchParams }: { searchParams: Promise<{ sort?: string }> }) {
  const { sort } = await searchParams;
  const s = sort === "new" || sort === "sale" || sort === "royal" ? sort : undefined;
  const products = await getProducts({ sort: s });
  const head = s ? heads[s] : { kicker: "Shop", title: ["All", "clothing."] };
  return (
    <ShopView
      products={products}
      kicker={head.kicker}
      title={[head.title[0], <em key="e">{head.title[1]}</em>]}
      active={s ? undefined : "all"}
      intro="Every piece currently in the ANA CARAV collection. Prices in Chilean pesos."
    />
  );
}
