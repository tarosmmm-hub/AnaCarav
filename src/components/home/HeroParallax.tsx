"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Photograph drifts slower than the page as the hero scrolls away. */
export function HeroParallax({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);
  return (
    <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
