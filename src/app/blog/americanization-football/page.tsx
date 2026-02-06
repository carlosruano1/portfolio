"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";
import { NetSpendingChart } from "@/components/ui/NetSpendingChart";

export default function AmericanizationFootballBlog() {
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
          La Liga&apos;s crisis, the Premier League&apos;s dominance and the Americanization of football
        </motion.h1>

        {/* Meta info */}
        <motion.div
          className="flex items-center gap-4 text-textSoft/60 text-sm mb-12 pb-8 border-b border-white/10"
          {...fadeUp}
          transition={{ delay: 0.1, ...fadeUp.transition }}
        >
          <time>February 6, 2026</time>
          <span>•</span>
          <span>10 min read</span>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="prose prose-invert max-w-none"
          {...fadeUp}
          transition={{ delay: 0.2, ...fadeUp.transition }}
        >
          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            The existential crisis facing European football didn&apos;t reveal itself in a boardroom in Madrid or a stock exchange in London. It happened on a grassroots training pitch in Texas last week.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            When I asked a 10-year-old player to name his favorite team, the expectation was a standard answer: Real Madrid, Barcelona, or perhaps Manchester City. Instead, he looked up and replied, &quot;I don&apos;t watch those. I watch the Kings League on Twitch.&quot;
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            That single interaction illustrates the precarious position of the traditional European game better than any balance sheet. The sport is currently fighting a war on two fronts: a battle for financial solvency against the juggernaut of American-style capitalism, and a battle for attention against faster, digital-native formats.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-12">
            Right now, Spanish football is losing both.
          </p>
        </motion.div>

        {/* Section 1: Financial Reality */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.3, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            The NFL vs. The Wild West
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            To understand the stagnation of La Liga, one must first dissect the business models governing the sport. The NFL and NBA operate as closed systems designed for profitability—licenses to print money, protected by salary caps, revenue sharing, and the absence of relegation.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            European football, conversely, is the Wild West. It is an open market where the terrifying prospect of relegation drives irrational spending. Premier League clubs operate like venture-backed startups, burning cash to capture market share and secure survival. Spanish clubs, however, find themselves in a different reality. Hamstrung by Javier Tebas&apos;s strict economic controls and Financial Fair Play (FFP) rigor, they act more like distressed assets desperately trying to service debt.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-12">
            The divergence has created a clear hierarchy: The Premier League has effectively become the &quot;NFL of Europe&quot; - a super-prime product vacuuming up global broadcasting revenue - while La Liga has faded into a regional competition anchored by two global brands, with the rest of the pyramid falling behind.
          </p>
        </motion.section>

        {/* Section 2: Winter 2026 Snapshot */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.4, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            The Winter 2026 Snapshot
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            Nothing illustrates this widening chasm better than the data from the January 2026 transfer window.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            While the Premier League flexed its financial muscle, spending aggressively across the board, La Liga&apos;s activity was dormant. The numbers from Transfermarkt paint a stark picture of the new world order.
          </p>

          {/* Chart */}
          <div className="my-12">
            <NetSpendingChart />
          </div>

          <p className="text-sm text-textSoft/60 italic leading-relaxed mb-8">
            <strong className="text-textSoft/80 not-italic">Figure 1:</strong> Expenditure vs Income in Winter 2026 Transfer Window. Red bars show money spent on players, teal bars show money received from player sales. Data from Transfermarkt.<sup className="text-textSoft/40">(3)</sup>
          </p>

          <div className="space-y-6">
            <p className="text-lg text-textSoft/80 leading-relaxed">
              <strong className="text-red-400">The Premier League (-€164m Net Spend):</strong> English clubs continued their aggressive acquisition strategies. Crucially, this wasn&apos;t limited to the elite; relegation-threatened sides in England comfortably outspent teams playing in European competitions in Spain.
            </p>

            <p className="text-lg text-textSoft/80 leading-relaxed">
              <strong className="text-orange-400">The MLS Shock (-€97m Net Spend):</strong> With the 2026 World Cup on the horizon, American franchises are investing heavily in on-field talent. That Major League Soccer outspent La Liga by such a margin is a damning indictment of the Spanish top flight&apos;s decline in purchasing power.
            </p>

            <p className="text-lg text-textSoft/80 leading-relaxed">
              <strong className="text-green-400">La Liga (+€46m Net Profit):</strong> Spain was the only major league to record a significant &quot;profit&quot; in the window. While this appears responsible on a spreadsheet, in elite sports, a transfer surplus is often a sign of weakness. It signals a league that is selling its best assets—its talent—because it cannot afford to retain them.
            </p>
          </div>
        </motion.section>

        {/* Section 3: Smart Money */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.45, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            Enter the &quot;Smart Money&quot;
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            With traditional family or member-based ownership models in Spain and Italy buckling under financial strain, Wall Street has stepped into the breach. The trend has shifted decisively toward Private Equity (PE) and Multi-Club Ownership (MCO).
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            The recent news of Apollo Sports Capital acquiring a majority stake in Atletico Madrid serves as the perfect case study.<sup className="text-textSoft/40">(1)</sup> Even a club of Atletico&apos;s stature can no longer compete with state-owned entities like Manchester City or PSG on revenue generation alone. They require institutional capital simply to remain relevant.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            Football is increasingly moving away from individual clubs toward portfolio management.
          </p>

          <div className="space-y-4 text-textSoft/80">
            <div className="flex items-start gap-4">
              <span className="text-accent font-bold text-lg mt-1">•</span>
              <div>
                <strong className="text-text">City Football Group:</strong> (Manchester City, Girona, NYCFC, et al.)
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-accent font-bold text-lg mt-1">•</span>
              <div>
                <strong className="text">BlueCo:</strong> (Chelsea, Strasbourg)
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-accent font-bold text-lg mt-1">•</span>
              <div>
                <strong className="text">Eagle Football:</strong> (Lyon, Botafogo, Crystal Palace)
              </div>
            </div>
          </div>

          <p className="text-lg text-textSoft/80 leading-relaxed mt-6">
            These conglomerates treat players as internal assets, moving them across borders to bypass traditional market inflation. If La Liga clubs do not integrate into these networks, they risk being left on the outside, unable to access the talent pipelines or capital efficiencies these groups provide.
          </p>
        </motion.section>

        {/* Section 4: Financial Games */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.5, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            Financial Engineering: The Amortization Advantage
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            How do the biggest spenders maintain compliance with Profit and Sustainability Rules (PSR)? The answer lies in financial engineering, a tactic perfected by Chelsea under Clearlake Capital.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            The &quot;amortization&quot; strategy involves signing players to unusually long contracts—often seven or eight years—rather than the standard four or five. This spreads the accounting cost of a transfer fee over a longer period.
          </p>

          <div className="bg-surface/50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-accent mb-3">The Math:</h4>
            <p className="text-textSoft/80 mb-2">
              Standard Deal: A €100m player on a 5-year contract costs the club €20m per year in book value (amortization).
            </p>
            <p className="text-textSoft/80">
              <strong className="text-accent">Chelsea Model:</strong> That same €100m player on an 8-year contract costs only €12.5m per year.
            </p>
          </div>

          <p className="text-lg text-textSoft/80 leading-relaxed">
            This accounting lever allows clubs to sign a higher volume of talent immediately while kicking the financial can down the road. Spanish clubs, bound by La Liga&apos;s stricter domestic economic controls, do not have the flexibility to pull these levers.
          </p>
        </motion.section>

        {/* Section 5: Future */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.55, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-6">
            The Future: Kings League vs. The World Cup
          </h2>

          <p className="text-lg text-textSoft/80 leading-relaxed mb-6">
            As the sport marches toward the 2026 World Cup, the global &quot;brand&quot; of football has never been stronger. However, the attention span of the next generation of fans has never been shorter.
          </p>

          <p className="text-lg text-textSoft/80 leading-relaxed">
            La Liga finds itself squeezed from above by the sheer financial might of the Premier League and private equity, and from below by the attention-grabbing disruption of alternative media formats. Unless Spanish football adapts—by loosening its self-imposed financial handcuffs and embracing new waves of investment—it risks sliding permanently into the role of a premium &quot;feeder league&quot; for the English, the Americans, and the Saudis.
          </p>
        </motion.section>

        {/* References */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ delay: 0.65, ...fadeUp.transition }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-8">
            References
          </h2>

          <ol className="space-y-4 text-textSoft/80">
            <li>
              Insider Sport. &quot;Atletico Madrid celebrates new owner – but did Wanda miss out?&quot; November 11, 2025.{" "}
              <a
                href="https://insidersport.com/2025/11/11/atletico-madrid-celebrates-new-owner-but-did-wanda-miss-out/"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://insidersport.com/2025/11/11/atletico-madrid-celebrates-new-owner-but-did-wanda-miss-out/
              </a>
              .
            </li>
            <li>
              Deloitte Sports Business Group. &quot;Deloitte Football Money League 2026.&quot; January 2026.{" "}
              <a
                href="https://www.deloitte.com/uk/en/services/consulting-financial/analysis/deloitte-football-money-league.html"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.deloitte.com/uk/en/services/consulting-financial/analysis/deloitte-football-money-league.html
              </a>
              .
            </li>
            <li>
              Transfermarkt. &quot;Winter Transfers 2026 - Net Spending by Competition.&quot; Accessed February 6, 2026.
            </li>
            <li>
              The Athletic. &quot;Chelsea, FFP and the 8-year contract loophole explained.&quot; June 2025.{" "}
              <a
                href="https://theathletic.com/football/chelsea-amortization-explained/"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://theathletic.com/football/chelsea-amortization-explained/
              </a>
              .
            </li>
          </ol>
        </motion.section>

        {/* Read More Articles */}
        <motion.section
          className="mt-16 pt-8 border-t border-white/10"
          {...fadeUp}
          transition={{ delay: 0.7, ...fadeUp.transition }}
        >
          <h3 className="font-serif text-2xl font-semibold text-accent mb-6">
            Read Other Articles
          </h3>
          
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
                Using historical data from 2000 to 2014, we analyzed the relationship between market valuations and actual returns. The results are a wake-up call for anyone investing in today&apos;s high-priced market.
              </p>
            </div>
          </Link>
        </motion.section>

        {/* Footer CTA */}
        <motion.div
          className="mt-12"
          {...fadeUp}
          transition={{ delay: 0.75, ...fadeUp.transition }}
        >
          <p className="text-textSoft/60 text-sm">
            Want to discuss sports business or investment strategy?{" "}
            <Link href="/#contact" className="text-accent hover:underline">
              Get in touch
            </Link>
          </p>
        </motion.div>
      </article>
    </div>
  );
}
