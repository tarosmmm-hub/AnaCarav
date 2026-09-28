"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/components/providers/StoreProvider";
import { Drawer } from "@/components/ui/Drawer";
import { Photo } from "@/components/ui/Photo";
import { formatPrice } from "@/lib/catalog";
import { brand } from "@/data/site";

export function CartDrawer() {
  const { cartOpen, setCartOpen, lines, subtotal, setQty, remove, count } = useStore();
  const close = () => setCartOpen(false);
  return (
    <AnimatePresence>
      {cartOpen && (
        <Drawer label="Bag" onClose={close}>
          <div className="flex items-baseline justify-between px-6 pt-6 pb-5 md:px-8">
            <h2 className="display text-[34px]">
              Bag <span className="align-top font-sans text-[12px] tracking-widest">({count})</span>
            </h2>
            <button className="eyebrow u-link" onClick={close}>
              Close
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 md:px-8">
            {lines.length === 0 ? (
              <div className="flex h-full flex-col items-start justify-center pb-24">
                <p className="display text-[28px] italic">Your bag is empty.</p>
                <p className="mt-3 max-w-[32ch] text-[13px] text-ink-soft">Kimonos, sets and dresses from the island are waiting.</p>
                <Link href="/shop" onClick={close} className="eyebrow mt-8 flex gap-2">
                  <span className="u-link">Discover the collection</span> <span className="arrow">→</span>
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-ink/10 border-t border-ink/10">
                <AnimatePresence initial={false}>
                  {lines.map((l) => (
                    <motion.li
                      key={l.variantId}
                      layout
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex gap-4 py-5"
                    >
                      <Link href={`/products/${l.handle}`} onClick={close} className="relative block aspect-[9/14] w-[88px] shrink-0">
                        <Photo src={l.image} alt={l.title} sizes="88px" />
                      </Link>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex justify-between gap-3">
                          <p className="text-[14px] leading-snug">{l.title}</p>
                          <p className="text-[13px] whitespace-nowrap tabular-nums">{formatPrice(l.price * l.quantity)}</p>
                        </div>
                        <p className="eyebrow mt-1 text-ink-soft">Size {l.size}</p>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center border border-ink/15" role="group" aria-label={`Quantity for ${l.title}`}>
                            <button className="px-3 py-1.5" onClick={() => setQty(l.variantId, l.quantity - 1)} aria-label="Decrease quantity">
                              −
                            </button>
                            <span className="w-6 text-center text-[13px] tabular-nums" aria-live="polite">
                              {l.quantity}
                            </span>
                            <button className="px-3 py-1.5" onClick={() => setQty(l.variantId, l.quantity + 1)} aria-label="Increase quantity">
                              +
                            </button>
                          </div>
                          <button className="eyebrow u-link text-ink-soft" onClick={() => remove(l.variantId)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </div>
          {lines.length > 0 && (
            <div className="border-t border-ink/10 px-6 py-6 md:px-8">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow">Subtotal</span>
                <span className="display text-[24px] tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-[12px] text-ink-soft">{brand.shippingNote} Taxes and shipping at checkout.</p>
              <Link href="/checkout" onClick={close} className="eyebrow mt-5 block w-full bg-ink py-4 text-center text-ivory transition-colors hover:bg-terracotta">
                Checkout
              </Link>
              <button onClick={close} className="eyebrow mt-4 flex w-full justify-center gap-2 text-ink-soft">
                <span className="u-link">Continue shopping</span>
              </button>
            </div>
          )}
        </Drawer>
      )}
    </AnimatePresence>
  );
}
