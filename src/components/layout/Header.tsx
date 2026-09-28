"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/components/providers/StoreProvider";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

// Routes that open on a full-bleed photograph: header starts transparent there.
const OVER_IMAGE = ["/", "/collections", "/about"];

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { count, setCartOpen, setSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<null | "shop" | "collections">(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setMega(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMega(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const overImage = OVER_IMAGE.includes(pathname);
  const solid = scrolled || !overImage || !!mega || mobileOpen;
  const light = !solid; // ivory text over photograph

  const openMega = (k: "shop" | "collections") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(k);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMega(null), 180);
  };

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={isHome && !reduce ? { opacity: 0, y: -12 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: isHome ? 1.25 : 0, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
        onMouseLeave={scheduleClose}
      >
        <div
          className={`relative transition-[background-color,height,color,backdrop-filter,border-color] duration-700 ease-[var(--ease-editorial)] ${
            solid
              ? "h-[60px] border-b border-ink/10 bg-ivory/85 text-ink backdrop-blur-xl md:h-[64px]"
              : "h-[72px] border-b border-transparent bg-transparent text-ivory md:h-[88px]"
          }`}
        >
          <div className="mx-auto grid h-full max-w-[1680px] grid-cols-[1fr_auto_1fr] items-center px-4 md:px-10">
            {/* Left */}
            <nav aria-label="Primary" className="flex items-center gap-7">
              <button
                className="eyebrow -ml-2 p-2 md:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? "Close" : "Menu"}
              </button>
              {(["shop", "collections"] as const).map((k) => (
                <button
                  key={k}
                  className="eyebrow u-link hidden md:inline-block"
                  aria-expanded={mega === k}
                  aria-controls="mega-menu"
                  onMouseEnter={() => openMega(k)}
                  onFocus={() => openMega(k)}
                  onClick={() => setMega((m) => (m === k ? null : k))}
                  data-cursor="link"
                >
                  {k}
                </button>
              ))}
              <Link href="/about" className="eyebrow u-link hidden md:inline-block" aria-current={pathname === "/about" ? "page" : undefined}>
                About
              </Link>
            </nav>

            {/* Centre */}
            <Link href="/" aria-label="ANA CARAV, home" className="logo whitespace-nowrap text-center" onMouseEnter={scheduleClose}>
              <span
                className={`block transition-[font-size] duration-700 ease-[var(--ease-editorial)] ${
                  solid ? "text-[17px] md:text-[21px]" : "text-[19px] md:text-[26px]"
                }`}
              >
                ANA CARAV
              </span>
            </Link>

            {/* Right */}
            <div className="flex items-center justify-end gap-6" onMouseEnter={scheduleClose}>
              <button className="eyebrow u-link hidden md:inline-block" onClick={() => setSearchOpen(true)}>
                Search
              </button>
              <Link href="/account" className="eyebrow u-link hidden md:inline-block">
                Account
              </Link>
              <button className="eyebrow u-link -mr-2 p-2 md:m-0 md:p-0" onClick={() => setCartOpen(true)} aria-label={`Bag, ${count} items`}>
                Bag <span className="tabular-nums">({count})</span>
              </button>
            </div>
          </div>
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink/35 to-transparent transition-opacity duration-700 ${
              light ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <AnimatePresence>{mega && <MegaMenu section={mega} onEnter={() => openMega(mega)} onClose={() => setMega(null)} />}</AnimatePresence>
      </motion.header>

      <AnimatePresence>{mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </>
  );
}
