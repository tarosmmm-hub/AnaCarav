import type { Metadata } from "next";
import Link from "next/link";
import { brand, holboxImages, journey } from "@/data/site";
import { pick } from "@/lib/catalog";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal, LineReveal, Parallax, Reveal } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "About",
  description: "ANA CARAV began in Chile as Caravana and today lives in a boutique on the island of Holbox, Mexico.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const [a, b] = pick(["kimono-royal-bordo-gold", "conjunto-block-cobre"]);
  return (
    <>
      <section className="relative h-[100svh] min-h-[600px] overflow-hidden text-ivory">
        <Parallax className="absolute inset-0" speed={10}>
          <Photo src={holboxImages.swings.src} alt={holboxImages.swings.alt} tone="#93c4c1" sizes="100vw" priority />
        </Parallax>
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <p className="eyebrow">About</p>
          <h1 className="logo mt-6 text-[11vw] md:text-[5vw]">ANA CARAV</h1>
          <p className="display mt-4 text-[22px] italic md:text-[30px]">{brand.tagline}</p>
        </div>
      </section>

      <section className="bg-ivory px-5 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1680px] gap-y-14 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-5">
            <LineReveal lines={["Two coasts,", <em key="e">one wardrobe.</em>]} className="display text-[48px] md:text-[88px]" />
          </div>
          <Reveal className="space-y-6 text-[16px] leading-relaxed text-ink-soft md:col-span-4 md:col-start-8 md:pt-6">
            <p>ANA CARAV began in Chile, where the house is still known as Caravana and sells online at caravana.cl.</p>
            <p>
              Its new home is Holbox, an island off the north coast of the Yucatán peninsula, in Quintana Roo, Mexico. Here the boutique opens onto sand
              streets and the Caribbean light that colours everything we choose.
            </p>
            <p>The wardrobe is what the product labels describe: kimonos in natural viscose, sets with hand block prints in metallic pigment, velvet, crochet and gold.</p>
          </Reveal>
        </div>
        <div className="mx-auto mt-20 grid max-w-[1680px] grid-cols-2 gap-4 md:mt-32 md:grid-cols-12 md:gap-8">
          <ImageReveal className="aspect-[9/14] md:col-span-4">
            <Photo src={a.images[0].src} alt={a.images[0].alt} tone={a.tone} sizes="(min-width:768px) 33vw, 50vw" />
          </ImageReveal>
          <ImageReveal className="aspect-[9/14] md:col-span-3 md:col-start-6 md:mt-40" delay={0.1}>
            <Photo src={b.images[0].src} alt={b.images[0].alt} tone={b.tone} sizes="(min-width:768px) 25vw, 50vw" />
          </ImageReveal>
          <ImageReveal className="col-span-2 aspect-[4/3] md:col-span-3 md:col-start-10 md:mt-16 md:aspect-[3/4]" delay={0.2}>
            <Photo src={holboxImages.mural.src} alt={holboxImages.mural.alt} tone="#5d8fb0" sizes="(min-width:768px) 25vw, 100vw" />
          </ImageReveal>
        </div>
      </section>

      <section className="bg-cream px-5 py-24 md:px-10 md:py-32">
        <ol className="mx-auto grid max-w-[1680px] gap-10 md:grid-cols-3">
          {journey.map((j, i) => (
            <Reveal as="li" key={j.place} delay={i * 0.08} className="border-t border-ink/20 pt-6">
              <span className="eyebrow text-terracotta">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display mt-3 text-[44px]">{j.place}</h2>
              <p className="mt-2 text-[14px] text-ink-soft">{j.line}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="contact" className="bg-ivory px-5 py-24 text-center md:py-32">
        <p className="eyebrow text-ink-soft">Contact</p>
        <p className="display mx-auto mt-5 max-w-[20ch] text-[34px] italic md:text-[52px]">The quickest way to reach us is a message.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <a href={brand.instagram} target="_blank" rel="noreferrer" className="eyebrow u-link">
            Instagram {brand.instagramHandle}
          </a>
          <Link href="/#visit" className="eyebrow u-link">
            Visit the boutique
          </Link>
          <a href={brand.chileStore} target="_blank" rel="noreferrer" className="eyebrow u-link">
            Chile · caravana.cl
          </a>
        </div>
      </section>
    </>
  );
}
