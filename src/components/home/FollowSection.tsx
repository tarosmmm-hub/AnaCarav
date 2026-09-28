import { brand, holboxImages } from "@/data/site";
import type { Product } from "@/data/types";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal, LineReveal, Reveal } from "@/components/ui/Motion";

type Img = { src: string; alt: string; tone: string };

/**
 * Instagram does not allow its images to be pulled without an API token, so
 * this spread is composed from the brand's own product photography and
 * Holbox location images, and links out to @ana_carav. Swap `frames` for
 * the Instagram Graph API feed once a token is configured.
 */
export function FollowSection({ looks }: { looks: Product[] }) {
  const frames: Img[] = [
    { src: looks[0].images[0].src, alt: looks[0].images[0].alt, tone: looks[0].tone },
    { src: holboxImages.flamingos.src, alt: holboxImages.flamingos.alt, tone: "#e9b7a6" },
    { src: looks[1].images[0].src, alt: looks[1].images[0].alt, tone: looks[1].tone },
    { src: holboxImages.heron.src, alt: holboxImages.heron.alt, tone: "#b9d6d2" },
    { src: looks[2].images[0].src, alt: looks[2].images[0].alt, tone: looks[2].tone },
  ];
  const cell = (f: Img, cls: string, sizes: string, d = 0) => (
    <a href={brand.instagram} target="_blank" rel="noreferrer" className={`group block ${cls}`} data-cursor="view" aria-label={`${f.alt}. Open ${brand.instagramHandle} on Instagram`}>
      <ImageReveal className="h-full w-full" delay={d}>
        <Photo src={f.src} alt={f.alt} tone={f.tone} sizes={sizes} imgClassName="transition-transform duration-[1.6s] group-hover:scale-[1.05]" />
      </ImageReveal>
    </a>
  );
  return (
    <section aria-labelledby="follow-title" className="bg-ivory px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1680px] grid-cols-6 gap-3 md:grid-cols-12 md:gap-6">
        {cell(frames[0], "col-span-4 aspect-[4/5] md:col-span-5", "(min-width:768px) 42vw, 66vw")}
        {cell(frames[1], "col-span-2 aspect-[3/5] self-end md:col-span-3 md:aspect-[3/4] md:self-auto md:mt-40", "(min-width:768px) 25vw, 33vw", 0.1)}
        <div className="col-span-6 flex flex-col justify-center py-10 text-center md:col-span-4 md:py-0">
          <Reveal>
            <p className="eyebrow text-terracotta">08 · Follow</p>
          </Reveal>
          <LineReveal id="follow-title" lines={["ANA CARAV"]} className="logo mt-5 text-[30px] md:text-[40px]" />
          <Reveal delay={0.1}>
            <p className="display mx-auto mt-5 max-w-[18ch] text-[26px] leading-snug italic md:text-[32px]">The island, as it happens.</p>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="eyebrow group mt-8 inline-flex gap-2">
              <span className="u-link">{brand.instagramHandle}</span> <span className="arrow">↗</span>
            </a>
          </Reveal>
        </div>
        {cell(frames[2], "col-span-3 aspect-[3/4] md:col-span-3 md:col-start-2 md:mt-6", "(min-width:768px) 25vw, 50vw", 0.15)}
        {cell(frames[3], "col-span-3 aspect-[3/4] md:col-span-4 md:aspect-[4/3] md:mt-24", "(min-width:768px) 33vw, 50vw", 0.1)}
        {cell(frames[4], "col-span-6 aspect-[4/5] md:col-span-3 md:aspect-[3/4] md:-mt-32", "(min-width:768px) 25vw, 100vw", 0.2)}
      </div>
    </section>
  );
}
