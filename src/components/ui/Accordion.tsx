"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

export function Accordion({ items }: { items: { title: string; body: React.ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <div className="border-t border-ink/15">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.title} className="border-b border-ink/15">
            <h3>
              <button
                id={`${base}-h${i}`}
                aria-expanded={isOpen}
                aria-controls={`${base}-p${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="eyebrow flex w-full items-center justify-between py-5 text-left"
              >
                {it.title}
                <span aria-hidden className={`text-[16px] transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${base}-p${i}`}
                  role="region"
                  aria-labelledby={`${base}-h${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-[14px] leading-relaxed text-ink-soft">{it.body}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
