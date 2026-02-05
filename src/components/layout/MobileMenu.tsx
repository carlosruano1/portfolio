"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/resume", label: "Resume" },
  ];
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded md:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <span className="h-0.5 w-6 bg-textSoft" />
        <span className="h-0.5 w-6 bg-textSoft" />
        <span className="h-0.5 w-6 bg-textSoft" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex min-h-dvh flex-col bg-gradient-to-br from-base via-black to-base/90 md:hidden"
            aria-modal
            aria-label="Main navigation"
          >
            {/* Close button */}
            <div className="flex h-20 shrink-0 items-center justify-end px-6">
              <motion.button
                type="button"
                onClick={close}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-textSoft/20 text-white transition-colors hover:border-accent hover:bg-accent/10"
                aria-label="Close menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-4xl leading-none">×</span>
              </motion.button>
            </div>

            {/* Navigation items */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-8 pb-20">
              {navItems.map(({ href, label }, index) => {
                const isActive =
                  (href === "/" && pathname === "/") ||
                  (href !== "/" && pathname?.startsWith(href));
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={href}
                      onClick={close}
                      className={`font-serif text-6xl font-bold transition-all duration-300 ${
                        isActive 
                          ? "text-accent" 
                          : "text-white hover:text-accent hover:scale-105"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Download button */}
              <motion.a
                href="/Resume/Carlos%20Ruano%20RESUME.pdf"
                download="Carlos Ruano RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mt-8 rounded-lg border-2 border-accent bg-accent/10 px-8 py-4 text-xl font-medium text-accent backdrop-blur-sm transition-all hover:scale-105 hover:border-accent hover:bg-accent/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </nav>

            {/* Decorative gradient orb */}
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
