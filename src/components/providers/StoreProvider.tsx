"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/types";

export type CartLine = {
  variantId: string;
  handle: string;
  title: string;
  size: string;
  image: string;
  price: number;
  quantity: number;
};

type Store = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  add: (product: Product, variantId: string) => void;
  setQty: (variantId: string, qty: number) => void;
  remove: (variantId: string) => void;
  quickView: Product | null;
  openQuickView: (p: Product | null) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
};

const Ctx = createContext<Store | null>(null);
const KEY = "anacarav.bag.v1";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickView, openQuickView] = useState<Product | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {}
  }, [lines]);

  // Lock page scroll while any overlay is open.
  const locked = cartOpen || !!quickView || searchOpen;
  useEffect(() => {
    document.documentElement.style.overflow = locked ? "hidden" : "";
  }, [locked]);

  const add = useCallback((product: Product, variantId: string) => {
    const v = product.variants.find((x) => x.id === variantId);
    if (!v) return;
    setLines((prev) => {
      const hit = prev.find((l) => l.variantId === variantId);
      if (hit) return prev.map((l) => (l === hit ? { ...l, quantity: l.quantity + 1 } : l));
      return [
        ...prev,
        {
          variantId,
          handle: product.handle,
          title: product.title,
          size: v.title,
          image: product.images[0]?.src ?? "",
          price: v.price.amount,
          quantity: 1,
        },
      ];
    });
    openQuickView(null);
    setCartOpen(true);
  }, []);

  const setQty = useCallback((variantId: string, qty: number) => {
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.variantId !== variantId) : prev.map((l) => (l.variantId === variantId ? { ...l, quantity: qty } : l)),
    );
  }, []);
  const remove = useCallback((variantId: string) => setLines((p) => p.filter((l) => l.variantId !== variantId)), []);

  const value = useMemo<Store>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: lines.reduce((n, l) => n + l.quantity * l.price, 0),
      cartOpen,
      setCartOpen,
      add,
      setQty,
      remove,
      quickView,
      openQuickView,
      searchOpen,
      setSearchOpen,
    }),
    [lines, cartOpen, add, setQty, remove, quickView, searchOpen],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error("useStore outside StoreProvider");
  return s;
}
