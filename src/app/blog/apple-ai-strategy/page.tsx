"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";

const CapexChart = dynamic(
  () => import("@/components/ui/CapexChart").then((m) => m.CapexChart),
  { ssr: false }
);

export default function AppleAIStrategyBlog() {
  return (
    <div className="min-h-screen px-4 pt-32 pb-20 md:px-8">
      <article className="mx-auto max-w-4xl">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-textSoft/60 hover:text-accent transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Title */}
        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6"
          {...fadeUp}
        >
          Apple Might Win the AI Race by Not Doing Anything&hellip; Yet
        </motion.h1>

        {/* Meta info */}
        <motion.div
          className="flex items-center gap-4 text-textSoft/60 text-sm mb-12 pb-8 border-b border-white/10"
          {...fadeUp}
          transition={{ delay: 0.1, ...fadeUp.transition }}
        >
          <time>February 20, 2026</time>
          <span>•</span>
          <span>8 min read</span>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="prose prose-invert max-w-none"
          {...fadeUp}
          transition={{ delay: 0.2, ...fadeUp.transition }}
        >
          <p className="text-xl md:text-2xl text-textSoft/90 leading-relaxed mb-8 font-light">
            While Microsoft, Google, Meta, and Amazon are waging an all-out capital expenditure arms race in AI, Apple is barely showing up to the fight.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            That restraint is not a strategic blunder. It is a pattern Apple has executed perfectly before&mdash;and it might be the most dangerous move in the AI era.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-12">
            Apple&apos;s approach to artificial intelligence is a stark contrast to its Big Tech rivals. The company is spending a fraction of what competitors pour into AI infrastructure, data centers, and foundation model training. Yet it commands a premium valuation and sits on one of the most powerful distribution networks in history. Here is why that matters.
          </p>
        </motion.div>

        {/* Section 1: The Capex Gap */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.3, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            The Capex Gap is Not an Accident
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            The numbers tell the story plainly. Amazon is projected to spend <span className="text-text font-semibold">$131.8 billion</span> in capital expenditures in 2025. Alphabet, $91.4 billion. Meta, $72 billion. Apple? A comparatively modest <span className="text-accent font-semibold">$12.7 billion</span>.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-8">
            This is not a company that cannot afford to spend more. Apple generates some of the highest free cash flows in corporate history. The restraint is deliberate.
          </p>

          {/* Capex Chart */}
          <div className="my-12">
            <CapexChart />
          </div>

          <p className="text-sm text-textSoft/60 italic leading-relaxed mb-12">
            <strong className="text-textSoft/80 not-italic">Figure 1:</strong> Cumulative capital expenditures for major Big Tech companies, 2020&ndash;2025 (Actual or Estimated). Apple&apos;s line (gold) barely registers against the steep acceleration of its peers&mdash;by end of 2025, Amazon will have spent more than <em>seven times</em> Apple&apos;s cumulative total over the same period. Source: Google Finance.<sup className="text-textSoft/40">(1)</sup>
          </p>
        </motion.section>

        {/* Section 2: The Gemini Gambit */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.35, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            The Gemini Gambit: A Calculated Contradiction
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            Apple&apos;s conservative stance was recently complicated by one of its more revealing moves: partnering with Google to integrate the <strong className="text-text">Gemini</strong> model into Apple Intelligence.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            This decision is notable precisely because it appears to contradict Apple&apos;s deepest brand promise&mdash;user privacy. Routing queries to a third-party, cloud-based model is an admission that Apple&apos;s internal server-side models are not yet competitive. It is a rare public acknowledgment of a gap.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-12">
            The genius, or the calculated risk, lies in how Apple manages this tension. The likely solution is to gate what gets sent to the cloud&mdash;trivial or non-sensitive queries go to Gemini, while anything personal stays on-device. It is privacy as a filter, not an absolute. Whether users accept this trade-off will be one of the defining product stories of 2026.
          </p>
        </motion.section>

        {/* Section 3: Edge AI */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.4, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            Where Apple Is Actually Winning: Edge AI
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            While the cloud AI arms race dominates headlines, Apple has been quietly building an insurmountable lead in a different category: <em className="text-accent font-normal">edge AI</em>&mdash;intelligence processed directly on the device.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-8">
            On-device processing is the technological backbone of Apple&apos;s privacy commitment. When your iPhone recognizes a face, transcribes speech, or enhances a photo, none of that data leaves the device. That is not a marketing claim; it is an architectural reality enabled by Apple&apos;s custom silicon.
          </p>

          <div className="space-y-4 mb-12">
            <div className="p-6 rounded-xl bg-accent/10 border border-accent/30">
              <h3 className="text-xl font-semibold text-accent mb-3">The Neural Engine Advantage</h3>
              <p className="text-textSoft/80 leading-relaxed">
                The A-series (iPhone/iPad) and M-series (Mac) chips each contain a dedicated Neural Engine&mdash;a specialized processing unit built exclusively for machine learning workloads. Competitors running AI on general-purpose cloud hardware simply cannot match the power efficiency and latency of purpose-built silicon running inference locally.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-accent/10 border border-accent/30">
              <h3 className="text-xl font-semibold text-accent mb-3">Vertical Integration as a Moat</h3>
              <p className="text-textSoft/80 leading-relaxed">
                Apple designs both the silicon and the software that runs on it. This vertical integration lets Apple extract AI performance that third-party hardware vendors cannot replicate&mdash;regardless of how many GPU clusters they rent from AWS or Azure. The moat is physical.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 4: The Playbook */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.45, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            Apple&apos;s Playbook: Let Others Pay for the R&amp;D
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            Apple has never been first. It has been <em>best</em>.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-8">
            The history of innovation is littered with first movers who lost. What matters is who perfects a technology once the optimal use case is clear&mdash;and no company does that better than Apple.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                label: "MP3 Players → iPod",
                text: "Creative and Sony had portable music players first. They were clunky. Apple waited, observed the failure modes, and launched the iPod with iTunes. It redefined the category.",
              },
              {
                label: "Smartphones → iPhone",
                text: "Nokia and BlackBerry owned the market. Apple identified the missing piece—a rich, touch-centric, multimedia experience—and in 2007 launched the iPhone, which forced every competitor to rebuild from scratch.",
              },
              {
                label: "GUIs → Mac OS",
                text: "Xerox PARC invented the graphical user interface. Microsoft commercialized it poorly. Apple made it approachable and democratized personal computing.",
              },
              {
                label: "Smartwatches → Apple Watch",
                text: "Pebble and Samsung released smartwatches that struggled with battery life, utility, and fashion. Apple entered later with health tracking, refined haptics, and deep iPhone integration. It now owns the category.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <span className="text-accent text-lg flex-shrink-0 mt-0.5">→</span>
                <div>
                  <strong className="text-text block mb-1">{item.label}</strong>
                  <span className="text-textSoft/80 text-base leading-relaxed">{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            The AI era is no different. Apple is letting OpenAI, Google, and Meta absorb the enormous costs and reputational risks of training frontier models. Once the commercially viable use cases crystallize, Apple will integrate the best-in-class solution into its ecosystem&mdash;instantly reaching hundreds of millions of users with a single software update. No competitor can match that distribution.
          </p>
        </motion.section>

        {/* Section 5: Valuation */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.5, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            The Valuation Premium: What the Market Knows
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            Here is the remarkable part: despite avoiding the massive capex bets its rivals are making, Apple continues to trade at a premium Price-to-Earnings multiple compared to most of Big Tech.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-8">
            That premium is not irrational. The market is pricing in four structural advantages:
          </p>

          <div className="p-8 rounded-2xl bg-accent/10 border border-accent/30 mb-12">
            <ul className="space-y-5">
              {[
                {
                  label: "Predictable High Margins",
                  text: "Apple's hardware-software integration delivers consistent, superior profitability that cloud-heavy AI businesses have yet to demonstrate.",
                },
                {
                  label: "Ecosystem Stickiness",
                  text: "Switching costs across iPhone, Mac, AirPods, iCloud, and Apple Watch create a recurring revenue moat that compounds annually.",
                },
                {
                  label: "The Edge AI Advantage",
                  text: "Investors recognize that on-device AI delivers immediate, tangible value to consumers—while cloud foundation model bets remain speculative.",
                },
                {
                  label: "Financial Prudence",
                  text: "By limiting speculative capex, Apple maintains a stronger balance sheet and superior free cash flow during a period of genuine technological uncertainty.",
                },
              ].map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="text-accent text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-text block mb-1">{item.label}</strong>
                    <span className="text-textSoft/80">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-textSoft/80 leading-relaxed">
            In essence, the market is rewarding Apple for prioritizing profitability, privacy, and proven execution over the high-risk, high-reward gambles of the AI infrastructure race. The bet is not that Apple will train the largest model. The bet is that Apple will <strong className="text-text">monetize whoever does</strong>.
          </p>
        </motion.section>

        {/* References */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.55, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-8">
            References
          </h2>

          <ol className="space-y-4 text-textSoft/80">
            <li>
              Google Finance. &quot;Capital Expenditures — Amazon, Alphabet, Microsoft, Meta, Apple.&quot; Accessed February 20, 2026.{" "}
              <a
                href="https://www.google.com/finance"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.google.com/finance
              </a>
              .
            </li>
            <li>
              Apple Inc. &quot;Apple Intelligence Overview.&quot; Apple Newsroom, 2025.{" "}
              <a
                href="https://www.apple.com/apple-intelligence/"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.apple.com/apple-intelligence/
              </a>
              .
            </li>
            <li>
              Gurman, Mark. &quot;Apple to Add Google Gemini to iPhones in AI Push.&quot; Bloomberg, March 2024.
            </li>
            <li>
              Apple Inc. &quot;Apple Silicon — A-series and M-series Neural Engine.&quot; Apple Developer Documentation, 2025.{" "}
              <a
                href="https://developer.apple.com/machine-learning/"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://developer.apple.com/machine-learning/
              </a>
              .
            </li>
          </ol>
        </motion.section>

        {/* Read More Articles */}
        <motion.section
          className="mt-16 pt-8 border-t border-white/10"
          {...fadeUp}
          transition={{ delay: 0.6, ...fadeUp.transition }}
        >
          <h3 className="font-serif text-2xl font-semibold text-accent mb-6">
            Read Other Articles
          </h3>

          <div className="space-y-4">
            <Link href="/blog/price-penalty">
              <div className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 text-sm text-textSoft/60 mb-3">
                  <time>February 2026</time>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h4 className="font-serif text-xl md:text-2xl font-semibold text-text group-hover:text-accent transition-colors mb-2">
                  Why Being &quot;Early&quot; to the Party is the Fastest Way to Lose Money
                </h4>
                <p className="text-textSoft/80 leading-relaxed text-sm">
                  Historical data shows that high P/E ratios at the time of purchase consistently predict lower future returns. A wake-up call for today&apos;s market.
                </p>
              </div>
            </Link>

            <Link href="/blog/americanization-football">
              <div className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 text-sm text-textSoft/60 mb-3">
                  <time>February 6, 2026</time>
                  <span>•</span>
                  <span>10 min read</span>
                </div>
                <h4 className="font-serif text-xl md:text-2xl font-semibold text-text group-hover:text-accent transition-colors mb-2">
                  La Liga&apos;s crisis, the Premier League&apos;s dominance and the Americanization of football
                </h4>
                <p className="text-textSoft/80 leading-relaxed text-sm">
                  Spanish football faces an existential crisis: squeezed between the financial might of the Premier League and private equity, while digital disruption threatens from below.
                </p>
              </div>
            </Link>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.div
          className="mt-12"
          {...fadeUp}
          transition={{ delay: 0.65, ...fadeUp.transition }}
        >
          <p className="text-textSoft/60 text-sm">
            Want to discuss your portfolio strategy?{" "}
            <Link href="/#contact" className="text-accent hover:underline">
              Get in touch
            </Link>
          </p>
        </motion.div>
      </article>
    </div>
  );
}
