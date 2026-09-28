import type { Metadata } from "next";
import { brand } from "@/data/site";

export const metadata: Metadata = { title: "Shipping & Returns", alternates: { canonical: "/help" } };

export default function Help() {
  return (
    <section className="bg-ivory px-5 pt-32 pb-24 md:px-10 md:pt-44">
      <div className="mx-auto max-w-[760px]">
        <p className="eyebrow text-ink-soft">Care</p>
        <h1 className="display mt-4 text-[52px] md:text-[88px]">
          Shipping <em>&amp; returns</em>
        </h1>
        <div id="shipping" className="mt-16 scroll-mt-28 border-t border-ink/15 pt-8">
          <h2 className="eyebrow">Shipping</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{brand.shippingNote}</p>
        </div>
        <div id="returns" className="mt-12 scroll-mt-28 border-t border-ink/15 pt-8">
          <h2 className="eyebrow">Returns</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Changes and returns are handled personally by our team.{" "}
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="u-link text-ink">
              Write to us
            </a>{" "}
            before sending a piece back.
          </p>
        </div>
      </div>
    </section>
  );
}
