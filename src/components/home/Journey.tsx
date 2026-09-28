"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journey } from "@/data/site";
import { Photo } from "@/components/ui/Photo";

type Stop = { src: string; alt: string; tone: string };

/**
 * Chile → Holbox → the world. On desktop the page scroll drives a horizontal
 * travel through the stops; on mobile it becomes a swipeable strip.
 */
export function Journey({ images }: { images: Stop[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-150vw"]);
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const intro = (withId: boolean) => (
    <div className="flex w-[82vw] shrink-0 snap-start flex-col justify-end self-stretch pr-6 md:w-[40vw] md:pr-16 md:pb-24">
      <p className="eyebrow text-ink-soft">
        <span className="mr-4">06</span>The Journey
      </p>
      <h2 id={withId ? "journey-title" : undefined} className="display mt-5 text-[46px] md:text-[88px]">
        Travel, find,
        <br />
        <em>wear.</em>
      </h2>
      <p className="mt-6 max-w-[34ch] text-[14px] leading-relaxed text-ink-soft">
        A route rather than an origin story: where the house has been, and where the clothes go next.
      </p>
    </div>
  );

  const stops = journey.map((s, i) => (
    <article key={s.place} className="flex w-[82vw] shrink-0 snap-start flex-col md:w-[36vw] md:pr-16">
      <div className="relative aspect-[4/5] md:aspect-[5/6]">
        <Photo src={images[i].src} alt={images[i].alt} tone={images[i].tone} sizes="(min-width:768px) 36vw, 82vw" />
      </div>
      <div className="mt-5 flex items-baseline gap-4">
        <span className="eyebrow text-terracotta">{String(i + 1).padStart(2, "0")}</span>
        <h3 className="display text-[40px] md:text-[56px]">{s.place}</h3>
      </div>
      <p className="mt-2 max-w-[36ch] text-[14px] text-ink-soft">{s.line}</p>
      <p className="eyebrow mt-3 text-ink-soft/70">{s.detail}</p>
    </article>
  ));

  return (
    <section ref={ref} aria-labelledby="journey-title" className={`relative bg-ivory ${reduce ? "" : "md:h-[260vh]"}`}>
      {/* Desktop: pinned horizontal travel */}
      <div className={`sticky top-0 hidden h-screen items-center md:flex ${reduce ? "overflow-x-auto" : "overflow-hidden"}`}>
        <motion.div className="flex items-start pl-10" style={reduce ? undefined : { x }}>
          {intro(true)}
          {stops}
        </motion.div>
        <div className="absolute inset-x-10 bottom-10 h-px bg-ink/15">
          <motion.div className="h-px bg-terracotta" style={{ width: line }} />
        </div>
      </div>
      {/* Mobile: swipe */}
      <div className="py-24 md:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 px-5">
          {intro(false)}
          {stops}
        </div>
        <p className="eyebrow mt-6 px-5 text-ink-soft">Swipe →</p>
      </div>
    </section>
  );
}
