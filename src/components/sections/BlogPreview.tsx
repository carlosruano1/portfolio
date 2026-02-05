"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function BlogPreview() {
  return (
    <section className="relative border-t border-surface/50 py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.h2
          className="font-serif text-4xl font-semibold text-accent md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          Latest Insights
        </motion.h2>
        <p className="mt-4 text-xl text-textSoft/80 leading-relaxed md:text-2xl">
          Thoughts on markets, strategy, and wealth preservation.
        </p>

        <motion.div
          className="mt-12 flex min-h-[200px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="text-center">
            <p className="font-serif text-2xl text-textSoft/60 md:text-3xl">
              Working on some blogs...
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-block text-accent transition-colors hover:text-accent/80"
            >
              Visit blog page →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
