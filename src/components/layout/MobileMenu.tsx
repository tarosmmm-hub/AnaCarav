"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { brand, shopMenu } from "@/data/site";
import { useStore } from "@/components/providers/StoreProvider";
import { useEffect } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const { setSearchOpen } = useStore();
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);
  const items = [...shopMenu.shop, ...shopMenu.collections, { label: "About", href: "/about" }, { label: "Visit Holbox", href: "/#visit" }];
  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="grain fixed inset-0 z-40 flex flex-col bg-ivory px-5 pt-[84px] pb-8 text-ink md:hidden"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)", transition: { duration: 0.7, ease } }}
      exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.5, ease } }}
    >
      <nav aria-label="Mobile" className="flex-1 overflow-y-auto">
        <ul>
          {items.map((l, i) => (
            <motion.li
              key={l.href + l.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.035, duration: 0.6, ease }}
              className="border-b border-ink/10"
            >
              <Link href={l.href} onClick={onClose} className="display flex items-baseline justify-between py-3 text-[30px]">
                {l.label}
                <span className="eyebrow text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-between pt-6">
        <button
          className="eyebrow u-link"
          onClick={() => {
            onClose();
            setSearchOpen(true);
          }}
        >
          Search
        </button>
        <Link href="/account" onClick={onClose} className="eyebrow u-link">
          Account
        </Link>
        <a href={brand.instagram} target="_blank" rel="noreferrer" className="eyebrow u-link">
          Instagram
        </a>
      </div>
      <p className="eyebrow mt-6 text-center text-ink-soft">{brand.place}</p>
    </motion.div>
  );
}
