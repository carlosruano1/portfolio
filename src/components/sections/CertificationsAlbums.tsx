"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const AUTO_ADVANCE_MS = 7000;

const BROKERCHECK_URL = "https://brokercheck.finra.org/individual/summary/7938395";

const certifications = [
  {
    id: "bloomberg",
    image: "/licenses/bloomberg.png",
    title: "Bloomberg Market Concepts",
    bullets: ["Bloomberg Market Concepts", "Expedited: March 2019"],
    link: null,
    pdf: null,
  },
  {
    id: "institut",
    image: "/licenses/institut%20francais.png",
    title: "DELF B2",
    bullets: ["DELF B2", "Expedited: January 2015"],
    link: null,
    pdf: null,
  },
  {
    id: "nasaa",
    image: "/licenses/NASAA.png",
    title: "Series 66",
    bullets: ["Series 66", "Expedited: March 2025", "Unified Investment Adviser Law Exam"],
    link: BROKERCHECK_URL,
    pdf: null,
  },
  {
    id: "finra",
    image: "/licenses/finra.png",
    title: "SIE & Series 7",
    bullets: [
      "SIE (Securities Industry Essentials) — Expedited: Nov 2024",
      "Series 7 (General Securities Representative) — Expedited: Feb 2025",
    ],
    link: BROKERCHECK_URL,
    pdf: null,
  },
  {
    id: "certiport",
    image: "/licenses/certiport.png",
    title: "Microsoft Office Specialist",
    bullets: ["Microsoft Office Specialist", "Expedited: Feb 2017", "Credential ID: 90069689"],
    link: null,
    pdf: "/licenses/Microsoft%20Office%20Specialist_Credential%20ID%2090069689.pdf",
  },
];

export function CertificationsAlbums() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string>(certifications[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const scrollToCenter = (index: number) => {
    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;
    
    const containerWidth = container.offsetWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
    
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  const goNext = () => {
    const next = (currentIndex + 1) % certifications.length;
    setCurrentIndex(next);
    setSelectedId(certifications[next].id);
    scrollToCenter(next);
  };

  const goPrev = () => {
    const prev = (currentIndex - 1 + certifications.length) % certifications.length;
    setCurrentIndex(prev);
    setSelectedId(certifications[prev].id);
    scrollToCenter(prev);
  };

  const selectCert = (id: string, index: number) => {
    setSelectedId(id);
    setCurrentIndex(index);
    scrollToCenter(index);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % certifications.length;
        setSelectedId(certifications[next].id);
        scrollToCenter(next);
        return next;
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    // Center the first item on mount
    scrollToCenter(0);
  }, []);

  const selectedCert = certifications.find((c) => c.id === selectedId)!;

  return (
    <section className="border-t border-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          className="font-serif text-3xl font-medium text-accent sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          Certifications
        </motion.h2>

        {/* Mobile Layout: Large centered album with description below */}
        <div className="mt-10 md:hidden">
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous certification"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-surface bg-base/95 text-accent shadow-lg backdrop-blur-sm transition-all active:scale-90"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative h-[280px] w-[280px] shrink-0 overflow-hidden rounded-2xl border-2 border-accent/60 bg-surface/80 shadow-2xl shadow-accent/30"
              >
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-cover"
                  sizes="280px"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next certification"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-surface bg-base/95 text-accent shadow-lg backdrop-blur-sm transition-all active:scale-90"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-6 rounded-xl border border-surface bg-surface/95 px-5 py-5 backdrop-blur-sm"
            >
              <p className="font-semibold text-lg text-accent">{selectedCert.title}</p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-textSoft/90">
                {selectedCert.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                {selectedCert.link && (
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-accent underline decoration-accent/50 underline-offset-2 active:decoration-accent transition-colors"
                  >
                    Verify on BrokerCheck →
                  </a>
                )}
                {selectedCert.pdf && (
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded border border-accent/50 bg-accent/10 px-3 py-2 text-sm font-medium text-accent transition-colors active:bg-accent/30"
                  >
                    📄 PDF
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Layout: Carousel on left, description on right */}
        <div className="mt-12 hidden md:grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] md:gap-6 lg:gap-8 md:items-start">
          {/* Carousel - with proper overflow handling */}
          <div className="flex items-center gap-4 overflow-hidden">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous certification"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-surface bg-base/95 text-accent shadow-lg backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-surface active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 overflow-hidden">
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-[50%]"
              >
                {certifications.map((cert, index) => (
                  <motion.button
                    key={cert.id}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    type="button"
                    onClick={() => selectCert(cert.id, index)}
                    className={`relative h-[200px] w-[200px] shrink-0 overflow-hidden rounded-2xl border-2 bg-surface/80 shadow-xl transition-all hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-base ${
                      selectedId === cert.id
                        ? "border-accent/60 shadow-accent/30 shadow-2xl scale-105"
                        : "border-surface hover:border-accent/40"
                    }`}
                    style={{
                      marginLeft: index === 0 ? "-100px" : undefined,
                      marginRight: index === certifications.length - 1 ? "-100px" : undefined,
                    }}
                    whileHover={{ scale: selectedId === cert.id ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next certification"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-surface bg-base/95 text-accent shadow-lg backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-surface active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Desktop Description */}
          <div className="shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center rounded-xl border border-surface bg-surface/95 px-6 py-8 backdrop-blur-sm min-h-[300px]"
              >
                <h3 className="font-semibold text-xl text-accent">{selectedCert.title}</h3>
                <ul className="mt-4 list-inside list-disc space-y-2 text-base text-textSoft">
                  {selectedCert.bullets.map((b, j) => (
                    <li key={j} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  {selectedCert.link && (
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-base font-medium text-accent underline decoration-accent/50 underline-offset-2 hover:decoration-accent transition-colors"
                    >
                      Verify on BrokerCheck →
                    </a>
                  )}
                  {selectedCert.pdf && (
                    <a
                      href={selectedCert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded border border-accent/50 bg-accent/10 px-4 py-2.5 text-base font-medium text-accent transition-colors hover:bg-accent/20"
                    >
                      📄 PDF
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
