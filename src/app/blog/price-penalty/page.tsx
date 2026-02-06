"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";
import { PEReturnChart } from "@/components/ui/PEReturnChart";

export default function PricePenaltyBlog() {
  return (
    <div className="min-h-screen px-4 pt-32 pb-20 md:px-8">
      <article className="mx-auto max-w-4xl">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-textSoft/60 hover:text-accent transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Title */}
        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6"
          {...fadeUp}
        >
          Why Being "Early" to the Party is the Fastest Way to Lose Money
        </motion.h1>

        {/* Meta info */}
        <motion.div
          className="flex items-center gap-4 text-textSoft/60 text-sm mb-12 pb-8 border-b border-white/10"
          {...fadeUp}
          transition={{ delay: 0.1, ...fadeUp.transition }}
        >
          <time>February 2026</time>
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
            We have all heard the advice: <em className="text-accent font-normal">"Time in the market beats timing the market."</em>
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            It is a classic mantra. But it hides a dangerous truth. If you ignore what you are paying for your stocks, you could spend the next decade running in place. Or worse, you could lose money.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-12">
            Using historical data from 2000 to 2014, we analyzed the relationship between market valuations (P/E Ratios) and the actual money investors took home ten years later. The results are a wake-up call for anyone investing in today's high-priced market.
          </p>
        </motion.div>

        {/* Section: The Lost Decade */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.3, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            The "Lost Decade" (2000–2010)
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-4">
            In early 2000, the market was "expensive." P/E ratios were hovering around 28. Investors were optimistic, but the data tells a different story. If you bought in January 2000, your annualized return for the next ten years was{" "}
            <span className="text-red-400 font-semibold">-0.5%</span>.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-12">
            You didn't just wait a decade; you{" "}
            <strong className="text-text">paid for the privilege of losing money</strong>.
          </p>

          {/* Chart */}
          <div className="my-12">
            <PEReturnChart />
          </div>

          <p className="text-sm text-textSoft/60 italic leading-relaxed mb-12">
            <strong className="text-textSoft/80 not-italic">Figure 1:</strong> This chart shows the "Price Penalty." Notice how as the P/E Ratio (horizontal axis) moves higher, the 10-Year Annualized Return (vertical axis) trends lower. The "sweet spot" for investors was clearly when P/E ratios stayed under 25. Source: Yahoo Finance data accessed via Python.<sup className="text-textSoft/40">(1)</sup>
          </p>
        </motion.section>

        {/* Section: Where We Are Now */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.4, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            Where We Are Now: The "Danger Zone" of 2026
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            So, does this history matter today? Absolutely.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            As of February 2026, the S&P 500 is trading at a P/E ratio of approximately 27.7.<sup className="text-textSoft/40">(2)</sup> This places us firmly back in the "danger zone" that preceded the lost decade of the early 2000s.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-12">
            But the headline number hides an even bigger risk: Concentration.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            The market today is distorted by the "Magnificent 7" (companies like Nvidia, Apple, and Microsoft). These seven tech giants now make up roughly 34% of the entire S&P 500 index.<sup className="text-textSoft/40">(3)</sup> When you buy a standard index fund, you aren't buying a diversified slice of the American economy. You are making a heavy bet on just seven expensive tech stocks, which are trading at an average P/E of roughly 31x.<sup className="text-textSoft/40">(4)</sup>
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-12">
            The rest of the market (the other 493 companies) is telling a different story. They are trading at much more reasonable valuations. This creates a massive opportunity for investors who are willing to look different from the crowd.
          </p>
        </motion.section>

        {/* Section: How to Tackle This Environment */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.45, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            How to Tackle This Environment
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-8">
            You do not need to sit in cash and wait for a crash. You just need to be smarter about what you own.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-accent/10 border border-accent/30">
              <h3 className="text-xl font-semibold text-accent mb-3">
                Look at Small Caps (Russell 2000)
              </h3>
              <p className="text-textSoft/80 leading-relaxed">
                While the tech giants are priced for perfection, smaller U.S. companies are currently trading at a P/E of around 18x.<sup className="text-textSoft/40">(5)</sup> This is a historic discount. Small caps have not been this cheap relative to large caps since 1999.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-accent/10 border border-accent/30">
              <h3 className="text-xl font-semibold text-accent mb-3">
                Equal-Weight the S&P 500
              </h3>
              <p className="text-textSoft/80 leading-relaxed">
                Consider strategies that own all 500 companies equally. This reduces your exposure to the overpriced "Magnificent 7" and increases your stake in the reasonably priced "average" stock.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section: Bottom Line */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.5, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            The Bottom Line: Price is Your Protection
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            You cannot control the economy, the Fed, or global events. But you{" "}
            <strong className="text-text">can control the price you pay</strong>.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-12">
            When P/E ratios are high, your "margin of safety" disappears. The data proves that the higher the P/E ratio at the time of purchase, the lower the future rewards.
          </p>

          {/* Advice Box */}
          <div className="p-8 rounded-2xl bg-accent/10 border border-accent/30">
            <h3 className="text-2xl font-serif font-semibold text-accent mb-6">
              Our Advice for 2026:
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent text-xl flex-shrink-0">✓</span>
                <div>
                  <strong className="text-text block mb-1">Check the Multiples</strong>
                  <span className="text-textSoft/80">
                    Don't just look at the stock price; look at the P/E ratio.
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent text-xl flex-shrink-0">✓</span>
                <div>
                  <strong className="text-text block mb-1">Be Patient</strong>
                  <span className="text-textSoft/80">
                    A high-quality company at a high-valuation price is often a bad investment.
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent text-xl flex-shrink-0">✓</span>
                <div>
                  <strong className="text-text block mb-1">Don't Fear the Dip</strong>
                  <span className="text-textSoft/80">
                    As we saw in 2003, the "crashes" are where the 8% returns are actually made.
                  </span>
                </div>
              </li>
            </ul>
          </div>
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
              Yahoo Finance. "S&P 500 Historical Data." Accessed February 5, 2026.{" "}
              <a
                href="https://finance.yahoo.com/quote/%5EGSPC/history"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://finance.yahoo.com/quote/%5EGSPC/history
              </a>
              .
            </li>
            <li>
              Short, Doug. "P/E10 and Market Valuation: January 2026." Advisor Perspectives, February 3, 2026.{" "}
              <a
                href="https://www.advisorperspectives.com/dshort/updates/2026/02/03/pe10-market-valuation-january-2026"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.advisorperspectives.com/dshort/updates/2026/02/03/pe10-market-valuation-january-2026
              </a>
              .
            </li>
            <li>
              MacroMicro. "US - Magnificent Seven Total Market Cap & Share of S&P 500." Accessed February 5, 2026.{" "}
              <a
                href="https://en.macromicro.me/charts/123469/us-magnificent-seven-total-market-cap-and-share-of-sp-500"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://en.macromicro.me/charts/123469/us-magnificent-seven-total-market-cap-and-share-of-sp-500
              </a>
              .
            </li>
            <li>
              Columbia Threadneedle Investments US. "The rise of the Magnificent 7: Concentration risk versus earnings power." Accessed February 5, 2026.{" "}
              <a
                href="https://www.columbiathreadneedleus.com/insights/latest-insights/the-rise-of-the-magnificent-7-concentration-risk-versus-earnings-power"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.columbiathreadneedleus.com/insights/latest-insights/the-rise-of-the-magnificent-7-concentration-risk-versus-earnings-power
              </a>
              .
            </li>
            <li>
              Equiti. "Russell 2000 gains and 2026 Technical outlook." January 9, 2026.{" "}
              <a
                href="https://www.equiti.com/sc-en/news/trade-reviews/russell-2000-gains-and-2026-technical-outlook/"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.equiti.com/sc-en/news/trade-reviews/russell-2000-gains-and-2026-technical-outlook/
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
          
          <Link href="/blog/americanization-football">
            <div className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-3 text-sm text-textSoft/60 mb-3">
                <time>February 6, 2026</time>
                <span>•</span>
                <span>10 min read</span>
                <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">Latest</span>
              </div>
              <h4 className="font-serif text-xl md:text-2xl font-semibold text-text group-hover:text-accent transition-colors mb-2">
                La Liga's crisis, the Premier League's dominance and the Americanization of football
              </h4>
              <p className="text-textSoft/80 leading-relaxed text-sm">
                Spanish football faces an existential crisis: squeezed between the financial might of the Premier League and private equity, while digital disruption threatens from below.
              </p>
            </div>
          </Link>
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
