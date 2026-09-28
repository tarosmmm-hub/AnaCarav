import Link from "next/link";
import { craftNotes } from "@/data/site";
import type { Product } from "@/data/types";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal, Reveal } from "@/components/ui/Motion";
import { SectionHead } from "./SectionHead";

/**
 * Close-ups of cloth. Each note is quoted from the product's own description
 * on the source store and links to that product.
 */
export function Craft({ items }: { items: { product: Product; img: number; zoom: string }[] }) {
  return (
    <section aria-labelledby="craft-title" className="grain relative bg-ink px-5 py-24 text-ivory md:px-10 md:py-36">
      <div className="mx-auto max-w-[1680px]">
        <SectionHead
          id="craft-title"
          light
          index="05"
          kicker="The Craft"
          lines={["Made by hand,", <em key="e">read by touch.</em>]}
          aside={<p>What the labels say, in their own words.</p>}
        />
        <ul className="mt-16 grid grid-cols-2 gap-x-3 gap-y-12 md:mt-24 md:grid-cols-4 md:gap-x-8">
          {craftNotes.map((note, i) => {
            const it = items[i];
            const im = it.product.images[it.img] ?? it.product.images[0];
            return (
              <li key={note.k} className={i % 2 ? "md:mt-28" : ""}>
                <Link href={`/products/${it.product.handle}`} className="group block" data-cursor="view">
                  <ImageReveal className="aspect-[3/4]" delay={i * 0.08}>
                    <Photo
                      src={im.src}
                      alt={`Detail: ${im.alt}`}
                      tone={it.product.tone}
                      sizes="(min-width:768px) 25vw, 50vw"
                      position={it.zoom}
                      imgClassName="scale-[1.9] transition-transform duration-[1.8s] ease-[var(--ease-editorial)] group-hover:scale-[2.05]"
                    />
                  </ImageReveal>
                  <Reveal delay={0.1 + i * 0.05}>
                    <p className="eyebrow mt-5 text-sand">{note.k}</p>
                    <p className="display mt-2 text-[21px] leading-snug italic md:text-[24px]">“{note.v}”</p>
                    <p className="mt-3 text-[12px] text-ivory/55">{it.product.title}</p>
                  </Reveal>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
