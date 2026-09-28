"use client";

import Link from "next/link";
import type { Product } from "@/data/types";
import { Photo } from "@/components/ui/Photo";
import { Price } from "./Price";
import { useStore } from "@/components/providers/StoreProvider";

/**
 * No box, no border, no shadow: the photograph is the card.
 * Hover crossfades to the second photograph and reveals Quick View.
 */
export function ProductCard({
  product,
  sizes = "(min-width: 768px) 25vw, 50vw",
  aspect = "aspect-[9/16]",
  index,
}: {
  product: Product;
  sizes?: string;
  aspect?: string;
  index?: number;
}) {
  const { openQuickView } = useStore();
  const [a, b] = product.images;
  const soldOut = !product.variants.some((v) => v.availableForSale);
  return (
    <article className="group relative">
      <div className={`relative ${aspect} overflow-hidden`}>
        <Link href={`/products/${product.handle}`} className="absolute inset-0 block" data-cursor="explore" aria-label={product.title}>
          <Photo src={a.src} alt={a.alt} tone={product.tone} sizes={sizes} imgClassName="transition-transform duration-[1.6s] ease-[var(--ease-editorial)] group-hover:scale-[1.035]" />
          {b && (
            <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[var(--ease-editorial)] group-hover:opacity-100">
              <Photo src={b.src} alt="" tone={product.tone} sizes={sizes} imgClassName="scale-[1.035]" />
            </div>
          )}
        </Link>
        {soldOut && <span className="eyebrow pointer-events-none absolute top-3 left-3 bg-ivory/90 px-2 py-1 text-[9.5px]">Sold out</span>}
        <button
          onClick={() => openQuickView(product)}
          className="eyebrow absolute inset-x-3 bottom-3 translate-y-2 bg-ivory/90 py-3 text-center opacity-0 backdrop-blur transition-all duration-500 ease-[var(--ease-editorial)] group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 max-md:hidden"
          aria-label={`Quick view: ${product.title}`}
        >
          Quick view
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3 md:mt-4">
        <div className="min-w-0">
          {index !== undefined && <span className="eyebrow mb-1 block text-ink-soft/70">{String(index + 1).padStart(2, "0")}</span>}
          <h3 className="text-[13px] leading-snug md:text-[14px]">
            <Link href={`/products/${product.handle}`} className="u-link">
              {product.title}
            </Link>
          </h3>
          <Price product={product} className="mt-1 block text-[12px] text-ink-soft md:text-[13px]" />
        </div>
        <button
          onClick={() => openQuickView(product)}
          className="shrink-0 p-1 text-[18px] leading-none md:hidden"
          aria-label={`Quick view: ${product.title}`}
        >
          +
        </button>
      </div>
    </article>
  );
}
