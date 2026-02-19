"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function VisionPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-24 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl font-semibold text-accent md:text-6xl lg:text-7xl">
            Vision
          </h1>
          <p className="mt-6 text-xl text-textSoft/80 leading-relaxed md:text-2xl">
            Modernizing digital presence for financial advisory firms
          </p>
        </motion.div>

        <motion.div
          className="mt-16 space-y-8 text-lg leading-relaxed text-text/90 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Many financial advisory firms operate with websites that haven&apos;t
            evolved with the digital age. These platforms often fail to reflect
            the sophistication and professionalism of the services they
            represent.
          </p>

          <p>
            I specialize in creating modern, elegant web experiences
            specifically tailored for financial advisory firms. My approach
            begins with developing a custom vision—a sample implementation that
            demonstrates the potential of a contemporary digital presence.
          </p>

          <p>
            This vision serves as a tangible proposal, showcasing how a refined
            user interface, intuitive navigation, and professional design can
            elevate a firm&apos;s online identity. Rather than abstract promises, I
            present concrete examples that speak directly to the value of
            modernization.
          </p>

          <p>
            Each project is approached with an understanding of the financial
            services industry&apos;s unique requirements: trust, clarity,
            accessibility, and compliance. The result is a digital presence that
            aligns with the caliber of expertise these firms provide to their
            clients.
          </p>
        </motion.div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-serif text-3xl font-semibold text-accent md:text-4xl">
            Financial Advisors
          </h2>
          <p className="mt-3 text-base text-textSoft/60">
            Custom website proposals for wealth management firms
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <a
              href="/demos/financial-advisor"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  Redesign Proposal
                </span>
                <span className="text-xs text-textSoft/40 transition-colors group-hover:text-accent">
                  View →
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-text">
                Independent Wealth Management Firm
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-textSoft/70">
                Multi-page website proposal for a San Antonio-based SEC-registered
                fiduciary advisory firm. Mobile-responsive design, server-side
                contact API, FAQ accordion, team profiles, and regulatory
                compliance throughout.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Node.js", "Express"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-2 py-1 text-xs text-textSoft/60"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to portfolio
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
