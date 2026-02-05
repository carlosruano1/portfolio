"use client";

import { motion } from "framer-motion";
import { tapScale } from "@/lib/motion";

type Props = {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
};

export function CTAButton({ href, children, secondary }: Props) {
  const baseClass =
    "inline-flex items-center justify-center rounded px-5 py-2.5 font-medium transition-colors";
  const primaryClass = "border border-action bg-action text-base hover:bg-action/90";
  const secondaryClass = "border border-surface bg-surface text-textSoft hover:border-accent/50";

  return (
    <motion.a
      href={href}
      className={`${baseClass} ${secondary ? secondaryClass : primaryClass}`}
      {...tapScale}
    >
      {children}
    </motion.a>
  );
}
