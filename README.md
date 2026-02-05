# Wealth & Asset Management Portfolio

Next.js 15 + React + Framer Motion. Calm, premium finance aesthetic.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- **Landing** (`/`): Hero → Narrative Strategy Reveal (scroll-linked) → Case Study → Blog preview → Credentials + Conviction
- **Case Study** (`/case-study`): Interactive asset allocation sliders
- **Blog** (`/blog`, `/blog/[slug]`): Typography-focused list + shared-element transition into articles
- **Credentials** (`/credentials`): Credentials list + Conviction indicator

Mobile: bottom tab nav. Desktop: top header. Design tokens in `src/lib/colors.ts` and `globals.css`.
