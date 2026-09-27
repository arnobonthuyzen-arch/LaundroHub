import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#1C1426",
          deep: "#2B0F48",
          purple: "#4A1677",
          plum: "#3E1266",
          teal: "#0B6E71",
          mint: "#8FE0DC",
          lav: "#F1EBF8",
          tealbg: "#E0F2F1",
          line: "#E6DFF0",
          body: "#3C3447",
          muted: "#4F465A",
          ground: "#FBFAFD",
          foot: "#1E0B33",
          sky: "#EEF3F8",
        },
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-bricolage)", "ui-sans-serif", "system-ui", "sans-serif"],
        cursive: ["var(--font-cursive)", "cursive"],
      },
      borderRadius: {
        xl: "28px",
        "2xl": "36px",
      },
      boxShadow: {
        card: "0 18px 40px rgba(43, 15, 72, 0.12)",
        elevated: "0 30px 70px rgba(43, 15, 72, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
