import { brand, holboxImages } from "@/data/site";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal, LineReveal, Reveal } from "@/components/ui/Motion";

export function VisitStore() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="grain relative bg-sand/40 px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1680px] gap-y-12 md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow text-terracotta">09 · The boutique</p>
          </Reveal>
          <LineReveal id="visit-title" lines={["Visit us", <em key="e">in Holbox.</em>]} className="display mt-5 text-[52px] md:text-[96px]" />
          <Reveal delay={0.1} className="mt-10 border-t border-ink/20 pt-6">
            <p className="logo text-[18px]">ANA CARAV</p>
            <address className="mt-3 text-[15px] leading-relaxed text-ink-soft not-italic">
              {brand.address ?? "Isla Holbox"}
              <br />
              Quintana Roo, México
            </address>
            <p className="mt-6 max-w-[36ch] text-[14px] text-ink-soft">
              Barefoot is fine. Come by after the beach, try on a kimono, stay for the light.
            </p>
            <a href={brand.mapsUrl} target="_blank" rel="noreferrer" className="eyebrow group mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-ivory transition-colors hover:bg-terracotta">
              Visit the store <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>
        <div className="grid grid-cols-5 gap-4 md:col-span-6 md:col-start-7 md:gap-6">
          <ImageReveal className="col-span-3 aspect-[3/4]">
            <Photo src={holboxImages.beachHouse.src} alt={holboxImages.beachHouse.alt} tone="#d8c4a2" sizes="(min-width:768px) 30vw, 60vw" />
          </ImageReveal>
          <div className="col-span-2 flex flex-col gap-4 md:gap-6">
            <Reveal delay={0.15} className="relative aspect-[3/4] overflow-hidden bg-cream">
              <iframe
                title="Map of Isla Holbox, Quintana Roo, Mexico"
                src={brand.mapEmbed}
                loading="lazy"
                className="absolute inset-0 h-full w-full grayscale-[0.6] sepia-[0.25]"
              />
            </Reveal>
            <p className="eyebrow text-ink-soft">21.52° N · 87.37° W</p>
          </div>
        </div>
      </div>
    </section>
  );
}
