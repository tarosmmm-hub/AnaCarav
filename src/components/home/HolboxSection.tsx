import Link from "next/link";
import { holboxImages } from "@/data/site";
import type { Product } from "@/data/types";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal, LineReveal, Parallax, Reveal } from "@/components/ui/Motion";

export function HolboxSection({ look }: { look: Product }) {
  return (
    <section id="world" aria-labelledby="holbox-title" className="grain relative overflow-hidden bg-ivory px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1680px] gap-y-14 md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-6">
          <ImageReveal className="aspect-[4/5]">
            <Parallax className="absolute inset-0" speed={8}>
              <Photo src={holboxImages.bicycle.src} alt={holboxImages.bicycle.alt} tone="#cdb48c" sizes="(min-width:768px) 50vw, 100vw" />
            </Parallax>
          </ImageReveal>
          <Reveal className="mt-4 flex justify-between text-[12px] text-ink-soft">
            <span className="eyebrow">Calle de arena</span>
            <span className="eyebrow">21.52° N · 87.37° W</span>
          </Reveal>
        </div>

        <div className="flex flex-col md:col-span-5 md:col-start-8">
          <Reveal>
            <p className="eyebrow text-terracotta">Desde Holbox, con amor</p>
          </Reveal>
          <LineReveal
            id="holbox-title"
            lines={["Sand streets,", <em key="i">slow light.</em>]}
            className="display mt-6 text-[52px] md:text-[84px]"
            as="h2"
          />
          <Reveal delay={0.1} className="mt-8 max-w-[38ch] text-[15px] leading-relaxed text-ink-soft">
            <p>
              Holbox is an island without asphalt, where the street is sand and the day is measured by the tide. ANA CARAV lives here: a boutique of
              kimonos, prints and colour, dressed for the heat and made to travel.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-5 items-end gap-4 md:mt-auto md:pt-16">
            <Link href={`/products/${look.handle}`} className="group col-span-3" data-cursor="explore">
              <ImageReveal className="aspect-[9/14]" delay={0.1}>
                <Photo src={look.images[0].src} alt={look.images[0].alt} tone={look.tone} sizes="(min-width:768px) 22vw, 55vw" imgClassName="transition-transform duration-[1.6s] group-hover:scale-[1.04]" />
              </ImageReveal>
              <p className="eyebrow mt-3 flex justify-between">
                <span>Wearing {look.title}</span>
                <span className="arrow">→</span>
              </p>
            </Link>
            <div className="col-span-2 mb-14">
              <ImageReveal className="aspect-square" direction="left" delay={0.25}>
                <Photo src={holboxImages.mural.src} alt={holboxImages.mural.alt} tone="#5d8fb0" sizes="(min-width:768px) 14vw, 36vw" />
              </ImageReveal>
              <p className="mt-3 text-[11px] text-ink-soft">The village walls, painted.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
