"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function BlogPage() {
  return (
    <div className="min-h-screen px-4 pt-32 pb-20 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h1
          className="font-serif text-5xl font-semibold text-accent md:text-6xl lg:text-7xl"
          {...fadeUp}
        >
          Blog
        </motion.h1>
        <motion.p
          className="mt-6 text-xl text-textSoft/80 leading-relaxed md:text-2xl"
          {...fadeUp}
          transition={{ delay: 0.1, ...fadeUp.transition }}
        >
          Insights on wealth management, market analysis, and strategic thinking.
        </motion.p>

        <motion.div
          className="mt-16 flex min-h-[400px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          {...fadeUp}
          transition={{ delay: 0.2, ...fadeUp.transition }}
        >
          <div className="text-center px-6">
            <p className="font-serif text-3xl text-textSoft/60 md:text-4xl">
              Working on some blogs...
            </p>
            <p className="mt-4 text-lg text-textSoft/50">
              Check back soon for market insights and strategic analysis.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
