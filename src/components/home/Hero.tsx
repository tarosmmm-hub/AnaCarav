import { Photo } from "@/components/ui/Photo";
import { holboxImages } from "@/data/site";
import type { Product } from "@/data/types";
import Link from "next/link";
import { HeroParallax } from "./HeroParallax";

/**
 * Opening frame. Sequence (CSS, ~1.3s): ivory veil → ANA CARAV letters settle →
 * island photograph opens through a clip-path → slow settle → type rises →
 * header drops in (Header.tsx). A garment portrait sits over the landscape,
 * magazine-cover style, so place and clothing are read in the same glance.
 */
export function Hero({ look }: { look: Product }) {
  return (
    <section aria-label="ANA CARAV, Holbox Mexico" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ivory text-ivory">
      <div className="intro-clip absolute inset-0">
        <HeroParallax>
          <div className="intro-settle absolute inset-0">
            <Photo
              src={holboxImages.aerial.src}
              alt={holboxImages.aerial.alt}
              tone="#8fc3c0"
              sizes="100vw"
              priority
              position="50% 60%"
            />
          </div>
        </HeroParallax>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-ink/25" />
      </div>

      {/* Garment portrait */}
      <Link
        href={`/products/${look.handle}`}
        data-cursor="explore"
        className="intro-rise group absolute top-[13%] left-1/2 block aspect-[9/15] w-[56vw] max-w-[330px] -translate-x-1/2 md:top-auto md:right-[9vw] md:bottom-[12vh] md:left-auto md:w-[28vw] md:translate-x-0 lg:w-[22vw]"
        style={{ animationDelay: "1.05s" }}
      >
        <Photo
          src={look.images[0].src}
          alt={`${look.title}, ANA CARAV`}
          tone={look.tone}
          sizes="(min-width: 768px) 22vw, 56vw"
          priority
          imgClassName="transition-transform duration-[1.6s] ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
        />
        <span className="eyebrow absolute -bottom-7 left-0 text-[9.5px] text-ivory/90">Look 01 · {look.title}</span>
      </Link>

      {/* Type */}
      <div className="absolute inset-x-0 bottom-0 px-5 pb-8 md:px-10 md:pb-12">
        <div className="mx-auto flex max-w-[1680px] items-end justify-between gap-6">
          <div>
            <p className="eyebrow intro-rise text-ivory/85" style={{ animationDelay: "1.1s" }}>
              Holbox / Mexico
            </p>
            <h1 className="logo intro-rise mt-3 text-[8.4vw] leading-none md:text-[3.1vw]" style={{ animationDelay: "1.15s" }}>
              ANA CARAV
            </h1>
            <p className="display intro-rise mt-3 text-[19px] italic text-ivory/90 md:text-[22px]" style={{ animationDelay: "1.22s" }}>
              A fashion world born on an island.
            </p>
          </div>
          <a
            href="#world"
            className="eyebrow intro-rise hidden items-center gap-3 md:flex"
            style={{ animationDelay: "1.3s" }}
          >
            <span className="u-link">Discover</span>
            <span aria-hidden className="block h-10 w-px origin-top animate-pulse bg-ivory/70" />
          </a>
        </div>
        <a href="#world" className="eyebrow intro-rise mt-6 flex justify-between md:hidden" style={{ animationDelay: "1.3s" }}>
          <span className="u-link">Discover</span>
          <span>↓</span>
        </a>
      </div>

      {/* Intro veil */}
      <div aria-hidden className="intro-veil pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-ivory text-ink">
        <span className="logo intro-word text-[9vw] md:text-[4.2vw]">ANA CARAV</span>
      </div>
    </section>
  );
}
