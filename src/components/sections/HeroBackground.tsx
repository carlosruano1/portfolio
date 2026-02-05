"use client";

import { motion } from "framer-motion";
import { InteractiveGrid } from "./InteractiveGrid";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Interactive grid overlay */}
      <InteractiveGrid />

      {/* Soft gradient orbs - more subtle now */}
      <motion.div
        className="absolute -left-1/4 top-1/4 h-[60vmax] w-[60vmax] rounded-full bg-accent/5 blur-3xl pointer-events-none"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/2 h-[50vmax] w-[50vmax] rounded-full bg-action/3 blur-3xl pointer-events-none"
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-[40vmax] w-[40vmax] -translate-x-1/2 rounded-full bg-accent/3 blur-3xl pointer-events-none"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
