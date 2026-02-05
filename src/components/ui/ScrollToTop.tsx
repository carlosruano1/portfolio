"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SCROLL_THRESHOLD = 300;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 bg-base/90 text-accent shadow-lg backdrop-blur-md safe-bottom md:bottom-6 md:right-6 md:h-11 md:w-11"
          aria-label="Scroll to top"
        >
          <span className="text-lg md:text-xl" aria-hidden>↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
