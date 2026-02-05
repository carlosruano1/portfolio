import Link from "next/link";

const pages = [
  { href: "/", label: "Home" },
  { href: "/credentials", label: "Credentials" },
  { href: "/resume", label: "Resume" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-surface bg-surface/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-textSoft/80">
            {pages.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-4 text-center text-xs text-textSoft/50">
          © {new Date().getFullYear()} Carlos Ruano. All views expressed are my own.
        </p>
      </div>
    </footer>
  );
}
