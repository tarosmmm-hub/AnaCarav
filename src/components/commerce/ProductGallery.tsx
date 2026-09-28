"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { Product } from "@/data/types";
import { Photo } from "@/components/ui/Photo";
import { ImageReveal } from "@/components/ui/Motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Large stacked photographs; any one opens a fullscreen, keyboard-driven gallery. */
export function ProductGallery({ product }: { product: Product }) {
  const [open, setOpen] = useState<number | null>(null);
  const n = product.images.length;
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (open === null) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go]);

  return (
    <>
      {/* Mobile: swipe strip. Desktop: editorial stack, second row paired. */}
      <div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto md:grid md:grid-cols-2 md:gap-3 md:overflow-visible">
        {product.images.map((im, i) => (
          <button
            key={im.src}
            onClick={() => setOpen(i)}
            className={`relative w-full shrink-0 snap-start text-left ${i === 0 || n === 1 ? "md:col-span-2" : ""}`}
            aria-label={`Open photo ${i + 1} of ${n} fullscreen`}
            data-cursor="view"
          >
            <ImageReveal className={i === 0 ? "aspect-[9/14] md:aspect-[4/5]" : "aspect-[9/14]"} delay={i * 0.08}>
              <Photo src={im.src} alt={im.alt} tone={product.tone} priority={i === 0} sizes={i === 0 ? "(min-width:768px) 60vw, 100vw" : "(min-width:768px) 30vw, 100vw"} position="50% 30%" />
            </ImageReveal>
            <span className="eyebrow absolute right-3 bottom-3 text-[9.5px] text-ivory md:hidden">
              {i + 1} / {n}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${product.title}, photo ${open + 1} of ${n}`}
            className="fixed inset-0 z-[70] flex flex-col bg-warm text-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <div className="flex items-center justify-between px-5 py-5 md:px-10">
              <span className="eyebrow tabular-nums">
                {String(open + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </span>
              <span className="eyebrow hidden md:block">{product.title}</span>
              <button className="eyebrow u-link" onClick={() => setOpen(null)} autoFocus>
                Close
              </button>
            </div>
            <div className="relative flex-1">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={open}
                  className="absolute inset-x-0 inset-y-2 md:inset-y-4"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease } }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  drag={n > 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) go(1);
                    if (info.offset.x > 60) go(-1);
                  }}
                >
                  <Photo src={product.images[open].src} alt={product.images[open].alt} tone="transparent" sizes="100vw" imgClassName="!object-contain" />
                </motion.div>
              </AnimatePresence>
            </div>
            {n > 1 && (
              <div className="flex items-center justify-between px-5 py-5 md:px-10">
                <button className="eyebrow group flex gap-2" onClick={() => go(-1)}>
                  <span className="arrow rotate-180">→</span> <span className="u-link">Previous</span>
                </button>
                <button className="eyebrow group flex gap-2" onClick={() => go(1)}>
                  <span className="u-link">Next</span> <span className="arrow">→</span>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
