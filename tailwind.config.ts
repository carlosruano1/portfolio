import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        accent: "var(--color-accent)",
        action: "var(--color-action)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        textSoft: "var(--color-text-soft)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        italianno: ["var(--font-italianno)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
