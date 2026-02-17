"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const boxes = [
  {
    href: "https://owlrsvp.com",
    label: "Owl RSVP",
    description: "Event management platform",
    external: true,
  },
  {
    href: "/resume",
    label: "Expertise",
    description: "Professional qualifications",
    external: false,
  },
  {
    href: "/vision",
    label: "Vision",
    description: "Web design for financial advisories",
    external: false,
  },
];

export function LinkBoxes() {
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
          Find me
        </motion.h2>
        <p className="mt-4 text-xl text-textSoft/80 leading-relaxed md:text-2xl">
          Professional insights, strategic analysis, and institutional expertise.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {boxes.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <motion.span
                  className="flex aspect-square flex-col justify-end rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-accent/30 hover:bg-white/10"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="font-serif text-xl font-semibold text-text group-hover:text-accent">
                    {item.label}
                  </span>
                  <span className="mt-1 text-sm text-textSoft/80">
                    {item.description}
                  </span>
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
