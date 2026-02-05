"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { tapScale } from "@/lib/motion";

const navItems = [
  { href: "/", label: "Home", icon: "⌂" },
  { href: "/blog", label: "Blog", icon: "✎" },
  { href: "/resume", label: "Resume", icon: "★" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-surface bg-base/90 backdrop-blur-md safe-bottom md:hidden"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-2">
        {navItems.map(({ href, label, icon }) => {
          const isActive =
            (href === "/" && pathname === "/") ||
            (href !== "/" && pathname?.startsWith(href));
          return (
            <Link key={href} href={href}>
              <motion.span
                className="flex flex-col items-center gap-0.5 px-3 py-2 text-xs"
                {...tapScale}
              >
                <span
                  className={`text-lg ${isActive ? "text-accent" : "text-textSoft/70"}`}
                  aria-hidden
                >
                  {icon}
                </span>
                <span
                  className={`font-medium ${isActive ? "text-accent" : "text-textSoft/70"}`}
                >
                  {label}
                </span>
              </motion.span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
