"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Photo } from "@/components/ui/Photo";

/** Near-fullscreen photograph with parallax drift and a slow zoom tied to scroll. */
export function FullBleed({
  src,
  alt,
  tone,
  lines,
  kicker,
  position,
}: {
  src: string;
  alt: string;
  tone: string;
  lines: React.ReactNode[];
  kicker: string;
  position?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1.02]);
  const textY = useTransform(scrollYProgress, [0.2, 0.8], ["30%", "-30%"]);
  return (
    <section ref={ref} aria-label={typeof lines[0] === "string" ? lines.join(" ") : kicker} className="relative h-[92svh] min-h-[560px] overflow-hidden bg-ink text-ivory">
      <motion.div className="absolute -inset-y-[12%] inset-x-0" style={reduce ? undefined : { y, scale }}>
        <Photo src={src} alt={alt} tone={tone} sizes="100vw" position={position} />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-ink/25" />
      <motion.div className="relative flex h-full flex-col items-center justify-center px-5 text-center" style={reduce ? undefined : { y: textY }}>
        <p className="eyebrow text-ivory/80">{kicker}</p>
        <p className="display mt-6 text-[44px] leading-[0.95] md:text-[112px]">
          {lines.map((l, i) => (
            <span key={i} className={`block ${i % 2 ? "italic" : ""}`}>
              {l}
            </span>
          ))}
        </p>
      </motion.div>
    </section>
  );
}
