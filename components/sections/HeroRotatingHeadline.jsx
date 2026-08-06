"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const INTERVAL_MS = 3500;

export function HeroRotatingHeadline({ phrases, fixedLine, className }) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || phrases.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [shouldReduceMotion, phrases.length]);

  const currentPhrase = phrases[shouldReduceMotion ? 0 : index];
  const srFullText = `${phrases.join(", ")} ${fixedLine}`;

  return (
    <h1 className={className}>
      <span className="sr-only">{srFullText}</span>
      <span
        className="relative block min-h-[2.65em] overflow-x-hidden sm:min-h-[2.35em] md:min-h-0"
        aria-hidden="true"
        aria-live="polite"
      >
        {shouldReduceMotion ? (
          <span className="block">{currentPhrase}</span>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={currentPhrase}
              className="block"
              initial={{ x: 48, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -48, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {currentPhrase}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
      <span
        className="text-accent-strong mt-3 block text-balance sm:mt-2.5 md:mt-3"
        aria-hidden="true"
      >
        {fixedLine}
      </span>
    </h1>
  );
}
