"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Right-hand panel used by Quick View and the Bag. Escape closes, focus is kept inside. */
export function Drawer({
  label,
  onClose,
  children,
  width = "md:w-[520px]",
}: {
  label: string;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}) {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    panel.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !panel.current) return;
      const f = panel.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input,select,[tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60]">
      <motion.button
        aria-label="Close"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/35 backdrop-blur-[2px]"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      />
      <motion.div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-ivory text-ink shadow-[0_0_80px_rgba(28,25,21,0.18)] outline-none ${width}`}
        initial={{ x: "100%" }}
        animate={{ x: 0, transition: { duration: 0.75, ease } }}
        exit={{ x: "100%", transition: { duration: 0.55, ease } }}
      >
        {children}
      </motion.div>
    </div>
  );
}
