import Link from "next/link";
import type { Product } from "@/data/types";
import { ProductCard } from "@/components/commerce/ProductCard";
import { Reveal } from "@/components/ui/Motion";
import { SectionHead } from "./SectionHead";

/** Staggered columns rather than a flat grid: every other column drops, like a contact sheet. */
export function NewArrivals({ products }: { products: Product[] }) {
  return (
    <section aria-labelledby="new-title" className="bg-ivory px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <SectionHead
          id="new-title"
          index="03"
          kicker="New Arrivals"
          lines={["Just landed", <em key="e">on the island.</em>]}
          aside={
            <Link href="/shop?sort=new" className="eyebrow group inline-flex gap-2 text-ink">
              <span className="u-link">Shop all new arrivals</span> <span className="arrow">→</span>
            </Link>
          }
        />
        <ul className="mt-16 grid grid-cols-2 gap-x-3 gap-y-10 md:mt-24 md:grid-cols-4 md:gap-x-8 md:gap-y-20">
          {products.map((p, i) => (
            <Reveal as="li" key={p.handle} delay={(i % 4) * 0.08} className={i % 2 === 1 ? "mt-10 md:mt-24" : ""}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
