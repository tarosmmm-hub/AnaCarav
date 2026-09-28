import Link from "next/link";
import type { Product } from "@/data/types";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal, Reveal } from "@/components/ui/Motion";
import { SectionHead } from "./SectionHead";

type Tile = { product: Product; img?: number; kicker: string; note: string; position?: string };

function Frame({ t, aspect, sizes, className = "", delay = 0 }: { t: Tile; aspect: string; sizes: string; className?: string; delay?: number }) {
  const im = t.product.images[t.img ?? 0];
  return (
    <Link href={`/products/${t.product.handle}`} className={`group block ${className}`} data-cursor="view">
      <ImageReveal className={aspect} delay={delay}>
        <Photo
          src={im.src}
          alt={im.alt}
          tone={t.product.tone}
          sizes={sizes}
          position={t.position}
          imgClassName="transition-transform duration-[1.6s] ease-[var(--ease-editorial)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <p className="absolute inset-x-5 bottom-5 translate-y-3 text-[13px] text-ivory opacity-0 transition-all duration-700 ease-[var(--ease-editorial)] group-hover:translate-y-0 group-hover:opacity-100 max-md:hidden">
          {t.note}
        </p>
      </ImageReveal>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <p className="eyebrow">{t.kicker}</p>
        <p className="flex items-baseline gap-2 text-[13px]">
          <span className="u-link">{t.product.title}</span>
          <span className="arrow">→</span>
        </p>
      </div>
      <p className="mt-1 text-[12px] text-ink-soft md:hidden">{t.note}</p>
    </Link>
  );
}

/** Asymmetric spread: one tall portrait, one square, one landscape, like facing magazine pages. */
export function EditorialCollection({ tiles }: { tiles: [Tile, Tile, Tile] }) {
  const [a, b, c] = tiles;
  return (
    <section aria-labelledby="collection-title" className="bg-warm px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <SectionHead
          id="collection-title"
          index="02"
          kicker="The Collection"
          lines={["Colour worn", <em key="e">like a climate.</em>]}
          aside={<p>Kimonos cut to be worn open, block prints made by hand, velvet for the evenings. Each piece travels light.</p>}
        />
        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 md:mt-24 md:grid-cols-12 md:gap-x-8">
          <Frame t={a} aspect="aspect-[4/5]" sizes="(min-width:768px) 50vw, 100vw" className="col-span-2 md:col-span-6" />
          <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-12 md:col-span-6 md:grid-cols-6 md:content-start md:gap-x-8 md:pt-40">
            <Frame t={b} aspect="aspect-square" sizes="(min-width:768px) 25vw, 50vw" className="md:col-span-3" delay={0.1} />
            <Frame t={c} aspect="aspect-[4/5] md:aspect-[4/3]" sizes="(min-width:768px) 25vw, 50vw" className="md:col-span-3 md:mt-32" delay={0.2} />
            <Reveal className="col-span-2 md:col-span-4 md:col-start-2 md:mt-8">
              <Link href="/collections" className="group flex items-center justify-between border-t border-ink/20 pt-5">
                <span className="display text-[30px] italic md:text-[40px]">See the full collection</span>
                <span className="arrow text-[24px]">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
