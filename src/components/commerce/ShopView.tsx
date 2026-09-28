import Link from "next/link";
import type { CategoryHandle, Product } from "@/data/types";
import { categories, holboxImages } from "@/data/site";
import { ProductCard } from "./ProductCard";
import { Photo } from "@/components/ui/Photo";
import { LineReveal, Reveal } from "@/components/ui/Motion";
import { Fragment } from "react";

export function ShopView({
  products,
  title,
  kicker,
  active,
  intro,
}: {
  products: Product[];
  title: React.ReactNode[];
  kicker: string;
  active?: CategoryHandle | "all";
  intro?: string;
}) {
  return (
    <div className="bg-ivory px-3 pt-28 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1680px]">
        <header className="grid gap-6 px-2 md:grid-cols-12 md:items-end md:px-0">
          <div className="md:col-span-8">
            <p className="eyebrow text-ink-soft">{kicker}</p>
            <LineReveal as="h1" lines={title} className="display mt-4 text-[54px] md:text-[120px]" />
          </div>
          <p className="text-[14px] text-ink-soft md:col-span-3 md:col-start-10">{intro}</p>
        </header>

        <nav aria-label="Categories" className="no-scrollbar sticky top-[60px] z-20 -mx-3 mt-10 flex gap-6 overflow-x-auto border-b border-ink/10 bg-ivory/90 px-5 py-4 backdrop-blur md:top-[64px] md:mx-0 md:mt-16 md:px-0">
          <Link href="/shop" className="eyebrow u-link shrink-0" aria-current={active === "all" ? "page" : undefined}>
            All
          </Link>
          {categories.map((c) => (
            <Link key={c.handle} href={`/shop/${c.handle}`} className="eyebrow u-link shrink-0" aria-current={active === c.handle ? "page" : undefined}>
              {c.label}
            </Link>
          ))}
          <span className="eyebrow ml-auto shrink-0 text-ink-soft">{products.length} pieces</span>
        </nav>

        <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 md:mt-14 md:grid-cols-4 md:gap-x-8 md:gap-y-16">
          {products.map((p, i) => (
            <Fragment key={p.handle}>
              {i === 6 && (
                <li className="col-span-2 md:col-span-4">
                  <Reveal className="relative aspect-[4/5] overflow-hidden md:aspect-[21/8]">
                    <Photo src={holboxImages.aerial.src} alt={holboxImages.aerial.alt} tone="#8fc3c0" sizes="100vw" position="50% 70%" />
                    <p className="display absolute bottom-6 left-6 text-[34px] text-ivory italic md:bottom-10 md:left-10 md:text-[64px]">Dressed for the shallows.</p>
                  </Reveal>
                </li>
              )}
              <Reveal as="li" delay={(i % 4) * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            </Fragment>
          ))}
        </ul>
        {products.length === 0 && <p className="mt-16 text-center text-ink-soft">Nothing here yet.</p>}
      </div>
    </div>
  );
}
