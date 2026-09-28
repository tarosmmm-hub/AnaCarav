"use client";

import type { Product } from "@/data/types";

export function SizePicker({ product, value, onChange }: { product: Product; value: string; onChange: (id: string) => void }) {
  return (
    <fieldset>
      <legend className="eyebrow mb-3 text-ink-soft">Size</legend>
      <div className="flex flex-wrap gap-2">
        {product.variants.map((v) => (
          <label key={v.id} className={`relative ${!v.availableForSale ? "opacity-40" : ""}`}>
            <input
              type="radio"
              name={`size-${product.handle}`}
              value={v.id}
              checked={value === v.id}
              disabled={!v.availableForSale}
              onChange={() => onChange(v.id)}
              className="peer sr-only"
            />
            <span className="block min-w-12 cursor-pointer border border-ink/20 px-4 py-2.5 text-center text-[12px] tracking-wider uppercase transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-ivory peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-terracotta peer-disabled:cursor-not-allowed peer-disabled:line-through hover:border-ink">
              {v.title}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export const firstAvailable = (p: Product) => p.variants.find((v) => v.availableForSale)?.id ?? "";
