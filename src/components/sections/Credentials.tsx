"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const education = [
  {
    school: "University of North Carolina, Kenan-Flagler Business School",
    url: "https://www.kenan-flagler.unc.edu/",
    location: "Chapel Hill, NC",
    degree: "Master of Business Administration, Full-Time MBA Program",
    date: "May 2025",
    details: [
      "Capital Markets and Investments Concentration",
      "Kenan-Flagler Fellowship",
      "Relevant coursework: Private Wealth Management, Derivatives, Project for Investment Management Experiential Learning (Prime), Investments I & II, Taxes and Business Strategy",
    ],
  },
  {
    school: "St. Bonaventure University",
    url: "https://www.sbu.edu/",
    location: "St. Bonaventure, NY",
    degree: "Bachelor's in Business Administration, Major in Finance",
    date: "May 2020",
    details: [
      "GPA: 3.81 / 4.0 (Magna Cum Laude) & The Austin Finan Award in Finance Honorable Mention",
      "D1 Soccer Player - A10 Conference Commissioner's Honor Roll: Fall 2016 and Spring 2017",
    ],
  },
];

const experience = [
  {
    company: "Integrated Wealth Management",
    url: "https://www.integratedwm.com",
    location: "New Braunfels, TX",
    role: "Wealth Advisor",
    date: "June 2025 - January 2026",
    tagline: "Independent financial advisory firm offering personalized planning and investment strategies",
    bullets: [
      "Assisted in financial planning and advisory for a $120M portfolio, contributing to the development of risk-adjusted strategies for clients and integrating tax-efficient solutions to facilitate long-term retirement planning.",
      "Designed and deployed an automated Excel-based tracking tool, utilizing VBA macros to monitor the stage of the book of business, next relationship task, and streamline client data management and opportunity tracking.",
    ],
  },
  {
    company: "Speedout Advisory",
    url: "https://speedout.es",
    location: "Valencia, Spain",
    role: "Investment Banking Analyst",
    date: "2020-2023",
    tagline: "Mergers and acquisition boutique specialized in sell-side transactions for industrial and agricultural companies",
    bullets: [
      "Performed financial analysis through Excel models to value 30+ companies.",
      "Produced Information Memorandums and Investor's Decks for sell-side operations, and designed a new company-wide layout used to pitch 200+ business proposals.",
      "Created over 10 Financial Due Diligence reports for Private Equity funds, a new line of business resulting in a 33% increase in the company's revenues.",
    ],
  },
  {
    company: "Ironside Asset Advisors",
    url: "https://adviserinfo.sec.gov/firm/summary/161683",
    location: "Chapel Hill, NC",
    role: "Project for Investment Management Experiential Learning",
    date: "Spring 2024",
    tagline: "Semester-long experiential learning with Mark Roberts, CIO of the company",
    bullets: [
      "Optimized a spreadsheet for private equity managers by re-organizing data and turning it into an analytical tool, improving evaluation of sector exposure and trends.",
      "Led the evaluation and improvement of an internal asset allocation model, integrating forward estimates and Monte Carlo simulations to refine investment strategies.",
    ],
  },
  {
    company: "Students in Money Management (SIMM)",
    url: "https://www.bonasimm.org/",
    location: "St. Bonaventure, NY",
    role: "Head of the International Sector",
    date: "2018-2020",
    tagline: "Student organization for the management of an equity portfolio",
    bullets: [
      "Led International Sector Expansion: Founded and managed a team of 10 analysts, expanding the club's portfolio to include non-US stocks, tracking 15% of the total holdings.",
      "Developed financial models and reports: Created DCF models and presented top-performing investment ideas, contributing to a 13% year-over-year increase in fund performance.",
    ],
  },
];

const additional = {
  workAuth: "USA – Green Card",
  languages: "Spanish (Native), English (Native), French (Fluent), Catalan (Fluent)",
  certifications:
    "SIE, Series 7, 66, Life and Health Insurance License, Microsoft Office Specialist, Bloomberg Market Concepts, French DELF B2",
  interests:
    "Soccer, Racket Sports (Tennis, Squash, Pickleball, Padel), Equity Markets, Traveling, Video-Editing and Guitar, Web development (founded owlrsvp.com)",
};

const listVariants = {
  initial: { opacity: 0, x: -16 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

export function Credentials() {
  return (
    <section className="border-t border-surface py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <motion.h2
          className="font-serif text-4xl font-medium text-accent md:text-5xl lg:text-6xl"
          {...fadeUp}
          transition={{ duration: 0.45 }}
        >
          Resume
        </motion.h2>
        <motion.p
          className="mt-4 text-xl text-textSoft/80 leading-relaxed md:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Professional accreditations, education, and experience.
        </motion.p>

        {/* Education */}
        <motion.h3
          className="mt-16 font-serif text-2xl font-medium text-accent md:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Education
        </motion.h3>
        <ul className="mt-6 space-y-10">
          {education.map((ed, i) => (
            <motion.li
              key={ed.school}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              variants={listVariants}
              className="rounded-xl border border-surface bg-surface/50 px-5 py-5 md:px-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium text-text">
                  {ed.url ? (
                    <a
                      href={ed.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-accent/50 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {ed.school}
                    </a>
                  ) : (
                    ed.school
                  )}
                </p>
                <span className="text-sm text-textSoft/70">{ed.date}</span>
              </div>
              <p className="mt-0.5 text-sm text-textSoft/80">{ed.location}</p>
              <p className="mt-2 text-textSoft/90">{ed.degree}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-textSoft/80">
                {ed.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>

        {/* Experience */}
        <motion.h3
          className="mt-16 font-serif text-2xl font-medium text-accent md:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Experience
        </motion.h3>
        <ul className="mt-6 space-y-10">
          {experience.map((exp, i) => (
            <motion.li
              key={`${exp.company}-${exp.role}`}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              custom={i + education.length}
              variants={listVariants}
              className="rounded-xl border border-surface bg-surface/50 px-5 py-5 md:px-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium text-text">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-accent/50 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
                <span className="text-sm text-textSoft/70">{exp.date}</span>
              </div>
              <p className="mt-0.5 text-sm text-textSoft/80">{exp.location}</p>
              <p className="mt-1 font-medium text-accent">{exp.role}</p>
              <p className="mt-2 text-sm italic text-textSoft/80">{exp.tagline}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-textSoft/80">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>

        {/* Additional */}
        <motion.h3
          className="mt-16 font-serif text-2xl font-medium text-accent md:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Additional
        </motion.h3>
        <motion.div
          className="mt-6 rounded-xl border border-surface bg-surface/50 px-5 py-5 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0}
          variants={listVariants}
        >
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-medium text-textSoft/90">Work Authorization</dt>
              <dd className="mt-0.5 text-textSoft/80">{additional.workAuth}</dd>
            </div>
            <div>
              <dt className="font-medium text-textSoft/90">Languages</dt>
              <dd className="mt-0.5 text-textSoft/80">{additional.languages}</dd>
            </div>
            <div>
              <dt className="font-medium text-textSoft/90">Certifications</dt>
              <dd className="mt-0.5 text-textSoft/80">{additional.certifications}</dd>
            </div>
            <div>
              <dt className="font-medium text-textSoft/90">Interests</dt>
              <dd className="mt-0.5 text-textSoft/80">{additional.interests}</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="/Resume/Carlos%20Ruano%20RESUME.pdf"
            download="Carlos Ruano RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-accent bg-accent/10 px-6 py-3 text-accent transition-colors hover:bg-accent/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
