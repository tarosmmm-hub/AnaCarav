"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/components/providers/StoreProvider";
import { searchProducts, formatPrice } from "@/lib/catalog";
import { categories } from "@/data/site";
import { Photo } from "@/components/ui/Photo";

const ease = [0.22, 1, 0.36, 1] as const;

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const results = searchProducts(q);

  useEffect(() => {
    if (!searchOpen) return;
    setTimeout(() => input.current?.focus(), 250);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSearchOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, setSearchOpen]);

  const close = () => setSearchOpen(false);

  return (
    <AnimatePresence>
      {searchOpen && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search">
          <motion.button
            tabIndex={-1}
            aria-label="Close search"
            className="absolute inset-0 h-full w-full bg-ink/35"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="grain relative bg-ivory px-5 pt-6 pb-10 text-ink md:px-10 md:pt-8"
            initial={{ y: "-100%" }}
            animate={{ y: 0, transition: { duration: 0.7, ease } }}
            exit={{ y: "-100%", transition: { duration: 0.5, ease } }}
          >
            <div className="mx-auto max-w-[1680px]">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-ink-soft">Search the collection</span>
                <button className="eyebrow u-link" onClick={close}>
                  Close
                </button>
              </div>
              <label htmlFor="site-search" className="sr-only">
                Search products
              </label>
              <input
                id="site-search"
                ref={input}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Kimono, velvet, paisley…"
                autoComplete="off"
                className="display mt-6 w-full border-b border-ink/25 bg-transparent pb-3 text-[40px] placeholder:text-ink/25 focus:border-ink focus:outline-none md:text-[72px]"
              />
              {q && results.length === 0 && <p className="mt-6 text-[14px] text-ink-soft">Nothing found for “{q}”.</p>}
              {results.length > 0 ? (
                <ul className="no-scrollbar mt-8 flex gap-4 overflow-x-auto">
                  {results.map((p) => (
                    <li key={p.handle} className="w-[150px] shrink-0 md:w-[190px]">
                      <Link href={`/products/${p.handle}`} onClick={close} className="group block">
                        <div className="relative aspect-[9/14]">
                          <Photo src={p.images[0].src} alt={p.images[0].alt} tone={p.tone} sizes="190px" />
                        </div>
                        <p className="mt-2 text-[13px] leading-snug">{p.title}</p>
                        <p className="text-[12px] text-ink-soft">{formatPrice(p.variants[0].price.amount)}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                !q && (
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                    {categories.map((c) => (
                      <Link key={c.handle} href={`/shop/${c.handle}`} onClick={close} className="eyebrow u-link">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
