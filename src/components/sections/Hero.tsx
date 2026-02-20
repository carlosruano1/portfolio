"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-24 pb-20 md:px-8 md:pt-28">
      <HeroBackground />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="relative mb-12 flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-accent/50 shadow-2xl ring-4 ring-base md:h-44 md:w-44"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {!imageError ? (
            <div className="absolute inset-0">
              <Image
                src="/carlos_profile.png"
                alt="Carlos Ruano"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 144px, 176px"
                priority
                quality={85}
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <span className="font-serif text-4xl font-semibold text-accent md:text-5xl">
              CR
            </span>
          )}
        </motion.div>

        <motion.h1
          className="mt-2 font-serif text-7xl font-semibold leading-[0.9] text-text md:text-8xl lg:text-9xl"
          {...fadeUp}
          transition={{ delay: 0.2, ...fadeUp.transition }}
        >
          Carlos Ruano
        </motion.h1>
        <motion.p
          className="mt-2 text-sm font-medium uppercase tracking-[0.35em] md:text-base"
          style={{ color: "white" }}
          {...fadeUp}
          transition={{ delay: 0.3, ...fadeUp.transition }}
        >
          MBA
        </motion.p>
        <motion.div
          className="mt-8 flex items-center justify-center gap-6"
          {...fadeUp}
          transition={{ delay: 0.45, ...fadeUp.transition }}
        >
          <motion.a
            href="https://www.linkedin.com/in/ruano-carlos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-accent"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 md:h-9 md:w-9"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            href="mailto:ruano.carlos@outlook.com"
            className="text-white transition-colors hover:text-accent"
            aria-label="Email"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 md:h-9 md:w-9"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
