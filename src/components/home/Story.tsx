import Link from "next/link";
import { holboxImages } from "@/data/site";
import type { Product } from "@/data/types";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal, LineReveal, Parallax, Reveal } from "@/components/ui/Motion";

/** Photograph · text · photograph, the rhythm of a magazine feature. */
export function Story({ look }: { look: Product }) {
  return (
    <section aria-labelledby="story-title" className="bg-cream px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1680px] items-center gap-y-14 md:grid-cols-12 md:gap-x-8">
        <div className="order-2 md:order-1 md:col-span-4">
          <ImageReveal className="aspect-[3/4]" direction="right">
            <Parallax className="absolute inset-0" speed={6}>
              <Photo src={holboxImages.swings.src} alt={holboxImages.swings.alt} tone="#93c4c1" sizes="(min-width:768px) 33vw, 100vw" />
            </Parallax>
          </ImageReveal>
          <p className="eyebrow mt-3 text-ink-soft">Holbox, north of the Yucatán coast</p>
        </div>

        <div className="order-1 text-center md:order-2 md:col-span-4 md:px-4">
          <Reveal>
            <p className="eyebrow text-terracotta">04 · The world of</p>
          </Reveal>
          <LineReveal id="story-title" lines={["Ana Carav"]} className="logo mt-5 text-[34px] md:text-[44px]" />
          <Reveal delay={0.1} className="mx-auto mt-8 max-w-[34ch] space-y-5 text-[15px] leading-relaxed text-ink-soft">
            <p>The house began in Chile, where it is still known as Caravana.</p>
            <p>Today its heart beats in Holbox, a boutique on an island of sand streets and shallow turquoise water.</p>
            <p className="display text-[24px] leading-snug text-ink italic">Clothes that feel like the place they were found.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/about" className="eyebrow group mt-10 inline-flex gap-2">
              <span className="u-link">Read our story</span> <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="order-3 md:col-span-4 md:mt-48">
          <Link href={`/products/${look.handle}`} className="group block" data-cursor="explore">
            <ImageReveal className="aspect-[9/14]" delay={0.15}>
              <Photo src={look.images[0].src} alt={look.images[0].alt} tone={look.tone} sizes="(min-width:768px) 33vw, 100vw" imgClassName="transition-transform duration-[1.6s] group-hover:scale-[1.04]" />
            </ImageReveal>
            <p className="eyebrow mt-3 flex justify-between text-ink-soft">
              <span>{look.title}</span>
              <span className="arrow">→</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
