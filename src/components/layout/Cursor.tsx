"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A quiet companion to the native pointer (desktop, fine pointers only).
 * Grows into a labelled disc over photographs ("View") and products ("Explore").
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"" | "link" | "view" | "explore">("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor], a, button");
      const m = t?.dataset.cursor as typeof mode | undefined;
      setMode(m ?? (t ? "link" : ""));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;
  const big = mode === "view" || mode === "explore";
  const size = big ? 76 : mode === "link" ? 30 : 8;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[80] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${
          big ? "bg-ivory/90 text-ink backdrop-blur-sm" : mode === "link" ? "border border-current mix-blend-difference text-ivory" : "bg-ink mix-blend-difference"
        }`}
        animate={{ width: size, height: size }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {big && <span className="eyebrow text-[9.5px]">{mode === "view" ? "View" : "Explore"}</span>}
      </motion.div>
    </motion.div>
  );
}
