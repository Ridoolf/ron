"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const INTERVAL_MS = 3500;
const HEIGHT_TRANSITION = { duration: 0.42, ease: [0.4, 0, 0.2, 1] };

export function HeroRotatingHeadline({ phrases, fixedLine, className }) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const measureRef = useRef(null);
  const [slotHeight, setSlotHeight] = useState(null);

  useEffect(() => {
    if (shouldReduceMotion || phrases.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [shouldReduceMotion, phrases.length]);

  const currentPhrase = phrases[shouldReduceMotion ? 0 : index];
  const srFullText = `${phrases.join(", ")} ${fixedLine}`;

  const measure = useCallback(() => {
    const el = measureRef.current;
    if (el) {
      setSlotHeight(el.getBoundingClientRect().height);
    }
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [currentPhrase, measure]);

  useEffect(() => {
    const el = measureRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => measure());
    observer.observe(el);
    return () => observer.disconnect();
  }, [currentPhrase, measure]);

  return (
    <h1 className={className}>
      <span className="sr-only">{srFullText}</span>
      <motion.span
        className="relative isolate block overflow-hidden"
        aria-hidden="true"
        aria-live="polite"
        initial={false}
        animate={{
          height: shouldReduceMotion ? "auto" : (slotHeight ?? "auto"),
        }}
        transition={shouldReduceMotion ? { duration: 0 } : HEIGHT_TRANSITION}
      >
        {shouldReduceMotion ? (
          <span className="block">{currentPhrase}</span>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={currentPhrase}
              ref={measureRef}
              className="block w-full"
              initial={{ x: 48, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -48, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {currentPhrase}
            </motion.span>
          </AnimatePresence>
        )}
      </motion.span>
      <span
        className="text-accent-strong mt-3 block text-balance sm:mt-2.5 md:mt-3"
        aria-hidden="true"
      >
        {fixedLine}
      </span>
    </h1>
  );
}
