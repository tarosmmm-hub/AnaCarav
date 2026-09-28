import type { Product } from "@/data/types";
import { formatPrice } from "@/lib/catalog";

export function Price({ product, className = "" }: { product: Product; className?: string }) {
  const v = product.variants[0];
  if (!v) return null;
  const sale = v.compareAtPrice && v.compareAtPrice.amount > v.price.amount;
  return (
    <span className={`tabular-nums ${className}`}>
      <span className="whitespace-nowrap">{formatPrice(v.price.amount)}</span>
      {sale && (
        <s className="ml-2 whitespace-nowrap text-ink-soft/70" aria-label={`Before ${formatPrice(v.compareAtPrice!.amount)}`}>
          {"$" + v.compareAtPrice!.amount.toLocaleString("es-CL")}
        </s>
      )}
    </span>
  );
}
