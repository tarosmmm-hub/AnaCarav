"use client";

import Link from "next/link";
import { useStore } from "@/components/providers/StoreProvider";
import { Photo } from "@/components/ui/Photo";
import { formatPrice } from "@/lib/catalog";
import { brand } from "@/data/site";

/**
 * Order review. The hand-off to payment is a single call: create a Shopify
 * cart with these lines (cartCreate) and redirect to its `checkoutUrl`.
 */
export function CheckoutSummary() {
  const { lines, subtotal } = useStore();
  return (
    <section className="bg-ivory px-5 pt-28 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-ink-soft">Checkout</p>
          <h1 className="display mt-4 text-[52px] md:text-[80px]">
            Almost <em>yours.</em>
          </h1>
          <p className="mt-6 max-w-[40ch] text-[14px] text-ink-soft">
            Secure payment is handled by Shopify when the online store goes live. For now, send us your bag and we will confirm availability and shipping.
          </p>
          <a href={brand.instagram} target="_blank" rel="noreferrer" className="eyebrow mt-10 inline-flex gap-3 bg-ink px-7 py-4 text-ivory transition-colors hover:bg-terracotta">
            Complete order with us <span className="arrow">→</span>
          </a>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow mb-4">Your bag</p>
          {lines.length === 0 ? (
            <p className="text-[14px] text-ink-soft">
              Your bag is empty.{" "}
              <Link href="/shop" className="u-link text-ink">
                Discover the collection
              </Link>
            </p>
          ) : (
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {lines.map((l) => (
                <li key={l.variantId} className="flex gap-4 py-4">
                  <div className="relative aspect-[9/14] w-16 shrink-0">
                    <Photo src={l.image} alt={l.title} sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px]">{l.title}</p>
                    <p className="eyebrow mt-1 text-ink-soft">
                      Size {l.size} · Qty {l.quantity}
                    </p>
                  </div>
                  <p className="text-[13px] tabular-nums">{formatPrice(l.price * l.quantity)}</p>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex items-baseline justify-between">
            <span className="eyebrow">Subtotal</span>
            <span className="display text-[28px] tabular-nums">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-[12px] text-ink-soft">{brand.shippingNote}</p>
        </div>
      </div>
    </section>
  );
}
