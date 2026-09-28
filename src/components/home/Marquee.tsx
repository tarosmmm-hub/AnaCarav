"use client";

import { useRef } from "react";

const WORDS = ["ANA CARAV", "Holbox", "México", "Handcrafted", "Travel", "Textiles", "Viscosa natural", "Block print"];

/** Slow ribbon of words. Hovering eases it down to a drift (Web Animations playbackRate). */
export function Marquee({ tone = "light" }: { tone?: "light" | "dark" }) {
  const track = useRef<HTMLDivElement>(null);
  const rate = (r: number) => track.current?.getAnimations().forEach((a) => a.updatePlaybackRate(r));
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {WORDS.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className={`px-6 md:px-10 ${i % 2 ? "display text-[34px] italic md:text-[54px]" : "logo text-[22px] md:text-[34px]"}`}>{w}</span>
          <span className="text-[10px] text-terracotta">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <section
      aria-label="ANA CARAV · Holbox · México · Handcrafted · Travel · Textiles"
      className={`overflow-hidden border-y py-6 md:py-8 ${tone === "dark" ? "border-ivory/15 bg-ink text-ivory" : "border-ink/10 bg-ivory text-ink"}`}
      onMouseEnter={() => rate(0.35)}
      onMouseLeave={() => rate(1)}
    >
      <div ref={track} className="flex w-max" style={{ animation: "marquee 60s linear infinite" }}>
        {row}
        {row}
      </div>
    </section>
  );
}
