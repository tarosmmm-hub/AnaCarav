import type { Metadata } from "next";
import Link from "next/link";
import { getProducts, pick } from "@/lib/catalog";
import { holboxImages } from "@/data/site";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal, LineReveal, Reveal } from "@/components/ui/Motion";
import { ProductCard } from "@/components/commerce/ProductCard";

export const metadata: Metadata = {
  title: "Current Collection",
  description: "The current ANA CARAV collection: royal kimonos in natural viscose, hand block-printed sets, velvet and shine. From Holbox, Mexico.",
  alternates: { canonical: "/collections" },
};

export default async function Collections() {
  const current = (await getProducts({ sort: "new" })).filter((p) => p.category !== "accessories").slice(0, 12);
  const [kimono, set, dress] = pick(["sin-titulo-23may_16-43-22", "conjunto-royal-orange", "vestido-toscano-green-shine"]);
  return (
    <>
      <section className="relative h-[92svh] min-h-[560px] overflow-hidden text-ivory">
        <Photo src={holboxImages.heron.src} alt={holboxImages.heron.alt} tone="#b9d6d2" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1680px] px-5 pb-10 md:px-10 md:pb-16">
          <p className="eyebrow text-ivory/85">Current collection</p>
          <LineReveal as="h1" lines={["Now,", <em key="e">on the island.</em>]} className="display mt-4 text-[60px] md:text-[140px]" />
        </div>
      </section>

      <section className="bg-ivory px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1680px] gap-y-14 md:grid-cols-12 md:gap-x-8">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-terracotta">Chapter I</p>
            <p className="display mt-4 text-[34px] leading-tight italic md:text-[44px]">Royal kimonos, cut long and worn open.</p>
            <p className="mt-6 max-w-[36ch] text-[14px] text-ink-soft">Kimono manga 3/4 con textura. 100% viscosa natural. Talla única, largo 130 cm.</p>
          </Reveal>
          {[kimono, set, dress].map((p, i) => (
            <Link key={p.handle} href={`/products/${p.handle}`} className={`group block ${["md:col-span-4", "md:col-span-2 md:mt-40", "md:col-span-2 md:mt-12"][i]}`} data-cursor="explore">
              <ImageReveal className="aspect-[9/14]" delay={i * 0.1}>
                <Photo src={p.images[0].src} alt={p.images[0].alt} tone={p.tone} sizes="(min-width:768px) 33vw, 100vw" imgClassName="transition-transform duration-[1.6s] group-hover:scale-[1.04]" />
              </ImageReveal>
              <p className="eyebrow mt-3 flex justify-between">
                <span>{p.title}</span> <span className="arrow">→</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-warm px-3 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1680px]">
          <Reveal className="flex items-end justify-between px-2 md:px-0">
            <h2 className="display text-[40px] md:text-[72px]">
              The <em>pieces</em>
            </h2>
            <Link href="/shop" className="eyebrow group flex gap-2">
              <span className="u-link">Shop all</span> <span className="arrow">→</span>
            </Link>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-x-8 md:gap-y-16">
            {current.map((p, i) => (
              <Reveal as="li" key={p.handle} delay={(i % 4) * 0.06} className={i % 4 === 1 || i % 4 === 3 ? "md:mt-16" : ""}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
