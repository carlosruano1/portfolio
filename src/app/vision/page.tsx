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
            Many financial advisory firms operate with websites that haven't
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
            elevate a firm's online identity. Rather than abstract promises, I
            present concrete examples that speak directly to the value of
            modernization.
          </p>

          <p>
            Each project is approached with an understanding of the financial
            services industry's unique requirements: trust, clarity,
            accessibility, and compliance. The result is a digital presence that
            aligns with the caliber of expertise these firms provide to their
            clients.
          </p>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
