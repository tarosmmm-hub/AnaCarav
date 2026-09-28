"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * UI only: wire `onSubmit` to Shopify customer marketing consent
 * (customerCreate with acceptsMarketing) or your email platform.
 */
export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section aria-labelledby="nl-title" className="bg-ivory px-5 py-28 text-center md:py-40">
      <p className="eyebrow text-ink-soft">10 · Letters from the island</p>
      <h2 id="nl-title" className="display mx-auto mt-6 max-w-[14ch] text-[40px] leading-[1] md:text-[72px]">
        Enter the world of <span className="logo block pt-3 text-[0.55em] not-italic">ANA CARAV</span>
      </h2>
      <p className="mx-auto mt-6 max-w-[40ch] text-[14px] text-ink-soft">New pieces, island notes and first access to each arrival. Rarely, and never noisy.</p>
      <AnimatePresence mode="wait">
        {done ? (
          <motion.p key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="display mt-12 text-[26px] italic" role="status">
            Welcome to the island.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="mx-auto mt-12 flex max-w-[520px] items-end gap-4 border-b border-ink/30 focus-within:border-ink"
          >
            <label htmlFor="nl-email" className="sr-only">
              Email address
            </label>
            <input id="nl-email" type="email" required autoComplete="email" placeholder="Your email" className="w-full bg-transparent py-3 text-[16px] placeholder:text-ink/35 focus:outline-none" />
            <button className="eyebrow u-link shrink-0 pb-3.5">Subscribe</button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}
