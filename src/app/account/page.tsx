import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/data/site";

export const metadata: Metadata = { title: "Account", robots: { index: false } };

export default function Account() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ivory px-5 pt-32 pb-24 md:px-10">
      <div className="mx-auto w-full max-w-[520px] text-center">
        <p className="eyebrow text-ink-soft">Account</p>
        <h1 className="display mt-5 text-[48px] md:text-[64px]">
          Welcome <em>back.</em>
        </h1>
        <p className="mt-6 text-[14px] text-ink-soft">
          Customer accounts open with the online store launch. Until then, your bag is saved on this device, and our team answers on Instagram.
        </p>
        <div className="mt-10 flex justify-center gap-8">
          <a href={brand.instagram} target="_blank" rel="noreferrer" className="eyebrow u-link">
            Message us
          </a>
          <Link href="/shop" className="eyebrow u-link">
            Continue shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
