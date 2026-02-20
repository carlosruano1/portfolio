"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";

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

        {/* Blog Posts Grid */}
        <div className="mt-16 space-y-8">
          <motion.article
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-accent/30 transition-all duration-300"
            {...fadeUp}
            transition={{ delay: 0.2, ...fadeUp.transition }}
          >
            <Link href="/blog/apple-ai-strategy">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-textSoft/60">
                  <time>February 20, 2026</time>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text group-hover:text-accent transition-colors">
                  Apple Might Win the AI Race by Not Doing Anything&hellip; Yet
                </h2>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.article>

          <motion.article
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-accent/30 transition-all duration-300"
            {...fadeUp}
            transition={{ delay: 0.25, ...fadeUp.transition }}
          >
            <Link href="/blog/americanization-football">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-textSoft/60">
                  <time>February 6, 2026</time>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text group-hover:text-accent transition-colors">
                  La Liga&apos;s crisis, the Premier League&apos;s dominance and the Americanization of football
                </h2>
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

          <motion.article
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-accent/30 transition-all duration-300"
            {...fadeUp}
            transition={{ delay: 0.35, ...fadeUp.transition }}
          >
            <Link href="/blog/price-penalty">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-textSoft/60">
                  <time>February 2026</time>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text group-hover:text-accent transition-colors">
                  Why Being &quot;Early&quot; to the Party is the Fastest Way to Lose Money
                </h2>
                <p className="text-textSoft/80 leading-relaxed">
                  Using historical data from 2000 to 2014, we analyzed the relationship between market valuations and actual returns. The results are a wake-up call for anyone investing in today&apos;s high-priced market.
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
      </div>
    </div>
  );
}
