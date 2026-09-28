import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { getProduct, getRelated } from "@/lib/catalog";
import { categoryLabel } from "@/data/site";
import { ProductGallery } from "@/components/commerce/ProductGallery";
import { ProductInfo } from "@/components/commerce/ProductInfo";
import { ProductCard } from "@/components/commerce/ProductCard";
import { Reveal } from "@/components/ui/Motion";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const p = await getProduct((await params).handle);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description ?? `${p.title} by ANA CARAV, a boutique on the island of Holbox, Mexico.`,
    alternates: { canonical: `/products/${p.handle}` },
    openGraph: { images: [{ url: `${p.images[0].src}&width=1200` }] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const p = await getProduct((await params).handle);
  if (!p) notFound();
  const related = await getRelated(p, 4);
  const v = p.variants[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    image: p.images.map((i) => i.src),
    brand: { "@type": "Brand", name: "ANA CARAV" },
    ...(p.description ? { description: p.description } : {}),
    offers: {
      "@type": "Offer",
      priceCurrency: v.price.currencyCode,
      price: v.price.amount,
      availability: p.variants.some((x) => x.availableForSale) ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <>
      <div className="bg-ivory pt-[60px] md:pt-[64px]">
        <nav aria-label="Breadcrumb" className="eyebrow flex gap-2 px-5 py-4 text-ink-soft md:px-10">
          <Link href="/shop" className="u-link">
            Shop
          </Link>
          <span>/</span>
          <Link href={`/shop/${p.category}`} className="u-link">
            {categoryLabel(p.category)}
          </Link>
        </nav>
        <div className="md:grid md:grid-cols-[60fr_40fr]">
          <div className="md:pl-10">
            <ProductGallery product={p} />
          </div>
          <div className="px-5 pt-10 pb-16 md:px-14 md:pt-8">
            <div className="md:sticky md:top-[100px]">
              <ProductInfo product={p} />
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="bg-warm px-3 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1680px]">
            <Reveal className="flex items-end justify-between px-2 md:px-0">
              <h2 id="related-title" className="display text-[40px] md:text-[64px]">
                Wear it <em>with</em>
              </h2>
              <Link href={`/shop/${p.category}`} className="eyebrow group flex gap-2">
                <span className="u-link">All {categoryLabel(p.category)}</span> <span className="arrow">→</span>
              </Link>
            </Reveal>
            <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-x-8">
              {related.map((r, i) => (
                <Reveal as="li" key={r.handle} delay={i * 0.06} className={i % 2 ? "md:mt-16" : ""}>
                  <ProductCard product={r} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
