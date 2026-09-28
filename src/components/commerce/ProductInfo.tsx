"use client";

import { useState } from "react";
import type { Product } from "@/data/types";
import { useStore } from "@/components/providers/StoreProvider";
import { Accordion } from "@/components/ui/Accordion";
import { brand } from "@/data/site";
import { Price } from "./Price";
import { SizePicker, firstAvailable } from "./SizePicker";

export function ProductInfo({ product }: { product: Product }) {
  const { add } = useStore();
  const [variant, setVariant] = useState(firstAvailable(product));
  const oneSize = product.variants.length === 1;
  return (
    <div>
      <p className="logo text-[12px]">ANA CARAV</p>
      <h1 className="display mt-4 text-[40px] leading-[1] md:text-[56px]">{product.title}</h1>
      <Price product={product} className="mt-4 block text-[15px]" />
      {product.description && <p className="mt-6 max-w-[42ch] text-[14px] leading-relaxed text-ink-soft">{product.description}</p>}

      <div className="mt-8">
        <SizePicker product={product} value={variant} onChange={setVariant} />
      </div>

      <button
        disabled={!variant}
        onClick={() => add(product, variant)}
        className="eyebrow mt-8 w-full bg-ink py-4.5 text-ivory transition-colors duration-500 hover:bg-terracotta disabled:cursor-not-allowed disabled:bg-ink/30"
      >
        {variant ? "Add to bag" : "Sold out"}
      </button>
      <p className="mt-3 text-[12px] text-ink-soft">{brand.shippingNote}</p>

      <div className="mt-12">
        <Accordion
          items={[
            { title: "Description", body: product.description ?? "Ask us for details about this piece." },
            { title: "Material", body: product.material ?? "Ask us about the fabric of this piece." },
            { title: "Size & fit", body: product.measurements ?? (oneSize ? "Talla única." : `Available in ${product.variants.map((v) => v.title).join(", ")}.`) },
            { title: "Care", body: "Follow the care label sewn into the garment." },
            { title: "Shipping", body: brand.shippingNote },
            {
              title: "Returns",
              body: (
                <>
                  Changes and returns are handled personally.{" "}
                  <a href={brand.instagram} target="_blank" rel="noreferrer" className="u-link text-ink">
                    Write to us
                  </a>{" "}
                  before sending a piece back.
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
