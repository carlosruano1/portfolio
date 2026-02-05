import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-surface/50 bg-base/80 backdrop-blur-md md:border-accent/20">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-1 text-3xl tracking-tight md:text-4xl"
          style={{ fontFamily: "var(--font-italianno), 'Italianno', cursive" }}
          aria-label="Carlos Ruano - Home"
        >
          <span className="text-white">Carlos</span>
          <span className="text-[#D3AF5E]">Ruano</span>
        </Link>
        <div className="flex items-center gap-6">
          <MobileMenu />
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/blog" className="text-sm text-textSoft hover:text-accent">
            Blog
          </Link>
          <Link href="/resume" className="text-sm text-textSoft hover:text-accent">
            Resume
          </Link>
          <a
            href="/Resume/Carlos%20Ruano%20RESUME.pdf"
            download="Carlos Ruano RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded border border-accent/50 bg-accent/10 px-3 py-1.5 text-sm text-accent transition-colors hover:bg-accent/20 hover:border-accent"
            aria-label="Download resume"
          >
            Download
          </a>
        </nav>
        </div>
      </div>
    </header>
  );
}
