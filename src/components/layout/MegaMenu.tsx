"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { shopMenu, holboxImages } from "@/data/site";
import { products } from "@/data/products";
import { Photo } from "@/components/ui/Photo";

const ease = [0.22, 1, 0.36, 1] as const;
const feature = products.find((p) => p.handle === "kimono-royal-bordo-gold")!;

export function MegaMenu({
  section,
  onEnter,
  onClose,
}: {
  section: "shop" | "collections";
  onEnter: () => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      id="mega-menu"
      role="region"
      aria-label="Shop menu"
      onMouseEnter={onEnter}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.55, ease } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="absolute inset-x-0 top-full hidden border-b border-ink/10 bg-ivory text-ink md:block"
    >
      <div className="mx-auto grid max-w-[1680px] grid-cols-12 gap-8 px-10 pt-10 pb-12">
        <div className="col-span-3">
          <p className={`eyebrow mb-6 transition-colors ${section === "shop" ? "text-terracotta" : "text-ink-soft"}`}>Shop</p>
          <ul className="space-y-2.5">
            {shopMenu.shop.map((l, i) => (
              <motion.li key={l.href} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.03, duration: 0.5, ease }}>
                <Link href={l.href} onClick={onClose} className="display u-link text-[26px] leading-tight">
                  {l.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          <p className={`eyebrow mb-6 transition-colors ${section === "collections" ? "text-terracotta" : "text-ink-soft"}`}>Collections</p>
          <ul className="space-y-2.5">
            {shopMenu.collections.map((l, i) => (
              <motion.li key={l.href} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.04, duration: 0.5, ease }}>
                <Link href={l.href} onClick={onClose} className="display u-link text-[26px] leading-tight italic">
                  {l.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          <p className="mt-10 max-w-[26ch] text-[13px] leading-relaxed text-ink-soft">
            Kimonos in natural viscose, block prints made by hand, velvet for island nights.
          </p>
        </div>

        <Link href={`/products/${feature.handle}`} onClick={onClose} className="group col-span-3 block" data-cursor="view">
          <div className="relative aspect-[4/5]">
            <Photo src={feature.images[0].src} alt={feature.images[0].alt} tone={feature.tone} sizes="22vw" imgClassName="transition-transform duration-[1.4s] ease-[var(--ease-editorial)] group-hover:scale-[1.04]" />
          </div>
          <p className="eyebrow mt-4 flex justify-between">
            <span>{feature.title}</span>
            <span className="arrow">→</span>
          </p>
        </Link>
        <Link href="/about" onClick={onClose} className="group col-span-3 block" data-cursor="view">
          <div className="relative aspect-[4/5]">
            <Photo src={holboxImages.boat.src} alt={holboxImages.boat.alt} tone="#7fb7b5" sizes="22vw" imgClassName="transition-transform duration-[1.4s] ease-[var(--ease-editorial)] group-hover:scale-[1.04]" />
            <span className="display absolute bottom-5 left-5 text-[30px] text-warm italic">Holbox</span>
          </div>
          <p className="eyebrow mt-4 flex justify-between">
            <span>The world of Ana Carav</span>
            <span className="arrow">→</span>
          </p>
        </Link>
      </div>
    </motion.div>
  );
}
