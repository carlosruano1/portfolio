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

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Latest Article */}
          <motion.article
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Link href="/blog/apple-ai-strategy">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-textSoft/60">
                  <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">Latest</span>
                  <time>February 20, 2026</time>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text group-hover:text-accent transition-colors">
                  Apple Might Win the AI Race by Not Doing Anything&hellip; Yet
                </h3>
                <p className="text-textSoft/80 leading-relaxed">
                  While Big Tech spends hundreds of billions racing to build foundation models, Apple is spending a fraction of that&mdash;and may emerge as the biggest winner in AI by perfecting what others prove first.
                </p>
                <div className="flex items-center gap-2 text-accent font-medium">
                  Read more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Second Article */}
          <motion.article
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Link href="/blog/americanization-football">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-textSoft/60">
                  <time>February 6, 2026</time>
                  <span>•</span>
                  <span>10 min read</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text group-hover:text-accent transition-colors">
                  La Liga&apos;s crisis, the Premier League&apos;s dominance and the Americanization of football
                </h3>
                <p className="text-textSoft/80 leading-relaxed">
                  Spanish football faces an existential crisis: squeezed between the financial might of the Premier League and private equity, while digital disruption threatens from below.
                </p>
                <div className="flex items-center gap-2 text-accent font-medium">
                  Read more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent font-medium transition-colors hover:text-accent/80"
          >
            View all articles
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
