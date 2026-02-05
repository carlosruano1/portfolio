import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Carlos Ruano",
  description: "Disclaimer and legal notice regarding views, opinions, and content on this site.",
};

export default function DisclaimerPage() {
  return (
    <div className="pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-4 pb-32 md:px-8 md:pb-40">
        <h1 className="font-serif text-3xl font-medium text-white md:text-4xl">
          Disclaimer
        </h1>
        <p className="mt-2 text-sm text-textSoft/60">Last updated: February 2025</p>

        <div className="mt-10 space-y-6 text-textSoft/90">
          <section>
            <h2 className="mb-2 font-serif text-xl text-white">Personal views</h2>
            <p>
              This is a personal website. The views and opinions expressed here are my own and belong solely to me. They do not represent those of any people, institutions, or organizations I may or may not be associated with in a professional or personal capacity.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-white">Not investment advice</h2>
            <p>
              All content on this site is for informational and educational purposes only. Nothing on this site should be construed as investment advice, a recommendation to buy or sell any security, or as tailored to your personal financial situation. I am not a licensed investment advisor, and I cannot know your individual circumstances, risk tolerance, or goals.
            </p>
            <p>
              To the extent any information here could be deemed investment-related, it is not specific to the needs of any person. You should consult a qualified financial advisor or professional before making any financial or investment decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-white">Accuracy and liability</h2>
            <p>
              I make no representations as to the accuracy, completeness, or timeliness of any information on this site. Content may change without notice. I will not be liable for any errors, omissions, or losses arising from your use of or reliance on this content. All information is provided on an &quot;as is&quot; basis. You are solely responsible for your own choices and actions.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-white">No professional relationship</h2>
            <p>
              Use of this website does not create a client, advisory, or professional relationship. Past performance or discussion of strategies is not indicative of future results.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
