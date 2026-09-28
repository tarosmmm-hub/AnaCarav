"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Fade + rise when the element enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "p" | "span";
}) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </M>
  );
}

/** Photograph uncovered by a clip-path wipe with a slight settle in scale. */
export function ImageReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const from =
    direction === "up" ? "inset(100% 0% 0% 0%)" : direction === "left" ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)";
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={reduce ? false : { clipPath: from }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, delay, ease }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.8, delay, ease }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Moves its content against the scroll; `speed` is the travel in % of height. */
export function Parallax({ children, speed = 12, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);
  return (
    <div ref={ref} className={`overflow-hidden ${className.includes("absolute") ? className : `relative ${className}`}`}>
      <motion.div className="absolute -inset-y-[15%] inset-x-0" style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}

/** Line-by-line masked text reveal. Pass lines explicitly for typographic control. */
export function LineReveal({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  as = "h2",
  id,
}: {
  id?: string;
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  return (
    <Tag id={id} className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={reduce ? false : { y: "105%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 1.1, delay: delay + i * 0.09, ease }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
