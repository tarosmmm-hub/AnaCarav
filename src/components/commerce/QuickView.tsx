"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useStore } from "@/components/providers/StoreProvider";
import { Drawer } from "@/components/ui/Drawer";
import { Photo } from "@/components/ui/Photo";
import { Price } from "./Price";
import { SizePicker, firstAvailable } from "./SizePicker";
import { categoryLabel } from "@/data/site";

export function QuickView() {
  const { quickView: p, openQuickView, add } = useStore();
  const [variant, setVariant] = useState("");
  const [img, setImg] = useState(0);
  useEffect(() => {
    if (p) {
      setVariant(firstAvailable(p));
      setImg(0);
    }
  }, [p]);

  return (
    <AnimatePresence>
      {p && (
        <Drawer key={p.handle} label={`Quick view: ${p.title}`} onClose={() => openQuickView(null)} width="md:w-[560px]">
          <div className="flex items-center justify-between px-6 py-5 md:px-8">
            <span className="eyebrow text-ink-soft">{categoryLabel(p.category)}</span>
            <button className="eyebrow u-link" onClick={() => openQuickView(null)}>
              Close
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 pb-8 md:px-8">
            <div className="grid grid-cols-[1fr_56px] gap-3">
              <div className="relative h-[46svh] overflow-hidden md:h-[52svh]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div key={img} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    <Photo src={p.images[img].src} alt={p.images[img].alt} tone={p.tone} sizes="(min-width:768px) 440px, 80vw" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex flex-col gap-2">
                {p.images.map((im, i) => (
                  <button
                    key={im.src}
                    onClick={() => setImg(i)}
                    aria-label={`Photo ${i + 1}`}
                    aria-pressed={img === i}
                    className={`relative aspect-[9/14] transition-opacity ${img === i ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
                  >
                    <Photo src={im.src} alt="" tone={p.tone} sizes="56px" />
                  </button>
                ))}
              </div>
            </div>
            <p className="logo mt-8 text-[11px]">ANA CARAV</p>
            <h2 className="display mt-2 text-[32px] leading-[1.02]">{p.title}</h2>
            <Price product={p} className="mt-3 block text-[14px]" />
            <div className="mt-8">
              <SizePicker product={p} value={variant} onChange={setVariant} />
            </div>
          </div>
          <div className="border-t border-ink/10 px-6 py-5 md:px-8">
            <button
              disabled={!variant}
              onClick={() => add(p, variant)}
              className="eyebrow w-full bg-ink py-4 text-ivory transition-colors hover:bg-terracotta disabled:cursor-not-allowed disabled:bg-ink/30"
            >
              {variant ? "Add to bag" : "Sold out"}
            </button>
            <Link href={`/products/${p.handle}`} onClick={() => openQuickView(null)} className="eyebrow mt-4 flex justify-center gap-2 text-ink-soft">
              <span className="u-link">View full details</span> <span className="arrow">→</span>
            </Link>
          </div>
        </Drawer>
      )}
    </AnimatePresence>
  );
}
