import Link from "next/link";
import type { Category, Product } from "@/data/types";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal } from "@/components/ui/Motion";
import { SectionHead } from "./SectionHead";

// Desktop: an editorial layout with varied scale. Mobile: a horizontal strip.
const layout = [
  { li: "md:col-span-5 md:row-span-2", img: "md:aspect-[4/5]" },
  { li: "md:col-span-3 md:col-start-7", img: "md:aspect-[3/4]" },
  { li: "md:col-span-3 md:col-start-10 md:mt-32", img: "md:aspect-[3/4]" },
  { li: "md:col-span-3 md:col-start-7", img: "md:aspect-[1/1]" },
  { li: "md:col-span-3 md:col-start-2 md:mt-12", img: "md:aspect-[3/4]" },
  { li: "md:col-span-4 md:col-start-6 md:mt-12", img: "md:aspect-[4/3]" },
];

export function ShopByCategory({ items }: { items: { category: Category; product: Product }[] }) {
  return (
    <section aria-labelledby="cat-title" className="bg-warm py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <SectionHead id="cat-title" className="px-5 md:px-0" index="07" kicker="Shop by category" lines={["Find your", <em key="e">piece.</em>]} />
        <ul className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-pl-5 px-5 md:mt-24 md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-10 md:overflow-visible md:px-0">
          {items.map(({ category, product }, i) => (
            <li key={category.handle} className={`w-[62vw] shrink-0 snap-start md:w-auto ${layout[i]?.li ?? "md:col-span-3"}`}>
              <Link href={`/shop/${category.handle}`} className="group block" data-cursor="explore">
                <ImageReveal className={`aspect-[3/4] ${layout[i]?.img ?? ""}`} delay={(i % 3) * 0.08}>
                  <Photo
                    src={product.images[0].src}
                    alt={`${category.label}: ${product.title}`}
                    tone={product.tone}
                    sizes="(min-width:768px) 30vw, 62vw"
                    imgClassName="transition-transform duration-[1.6s] ease-[var(--ease-editorial)] group-hover:scale-[1.05]"
                  />
                </ImageReveal>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="display text-[28px] md:text-[34px]">{category.label}</span>
                  <span className="arrow">→</span>
                </div>
                <span className="eyebrow text-ink-soft">{category.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
