"use client";

import { motion } from "framer-motion";

const languages = [
  { name: "Spanish", level: "Native", score: 5 },
  { name: "English", level: "Native / Very Fluent", score: 5 },
  { name: "French", level: "Advanced", score: 3 },
  { name: "Catalan", level: "Intermediate", score: 2 },
] as const;

const GRID_SIZE = 5;

function LanguageRow({
  name,
  level,
  score,
  rowIndex,
}: {
  name: string;
  level: string;
  score: number;
  rowIndex: number;
}) {
  return (
    <div className="border-b border-surface/50 py-3 last:border-b-0 md:py-4">
      {/* Mobile layout - compact vertical */}
      <div className="md:hidden">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <div className="font-medium text-text">{name}</div>
          <div className="flex items-baseline gap-2">
            <div className="text-sm text-textSoft/80">{level}</div>
            <span className="text-xs text-textSoft/60">
              {score}/{GRID_SIZE}
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: GRID_SIZE }, (_, i) => {
            const filled = i < score;
            return (
              <motion.div
                key={i}
                className="h-6 w-6 rounded border-2 border-surface bg-surface"
                initial={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-surface)" }}
                whileInView={
                  filled
                    ? {
                        backgroundColor: "var(--color-accent)",
                        borderColor: "var(--color-accent)",
                        transition: {
                          delay: rowIndex * 0.1 + i * 0.07,
                          duration: 0.35,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      }
                    : undefined
                }
                viewport={{ once: true, margin: "-30px" }}
              />
            );
          })}
        </div>
      </div>

      {/* Desktop layout - table-like horizontal */}
      <div className="hidden items-center gap-6 md:flex">
        <div className="w-28 shrink-0 font-medium text-text">{name}</div>
        <div className="w-44 shrink-0 text-textSoft/80">{level}</div>
        <div className="flex shrink-0 gap-1.5">
          {Array.from({ length: GRID_SIZE }, (_, i) => {
            const filled = i < score;
            return (
              <motion.div
                key={i}
                className="h-7 w-7 rounded border-2 border-surface bg-surface"
                initial={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-surface)" }}
                whileInView={
                  filled
                    ? {
                        backgroundColor: "var(--color-accent)",
                        borderColor: "var(--color-accent)",
                        transition: {
                          delay: rowIndex * 0.1 + i * 0.07,
                          duration: 0.35,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      }
                    : undefined
                }
                viewport={{ once: true, margin: "-30px" }}
              />
            );
          })}
        </div>
        <span className="ml-2 shrink-0 text-sm text-textSoft/70">
          {score}/{GRID_SIZE}
        </span>
      </div>
    </div>
  );
}

export function Languages() {
  return (
    <section className="border-t border-surface py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-4 md:px-8">
        <motion.h2
          className="font-serif text-4xl font-medium text-accent md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          Languages
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-textSoft/80"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Proficiency in each language; bars fill as you scroll into view.
        </motion.p>

        <div className="mt-10 rounded-xl border border-surface bg-surface/30 px-4 py-4 md:px-6">
          {languages.map((lang, i) => (
            <LanguageRow
              key={lang.name}
              name={lang.name}
              level={lang.level}
              score={lang.score}
              rowIndex={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
