import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0A0A0A",
          surface: "#141414",
          deep: "#0B1A2E",
        },
        gold: {
          DEFAULT: "#BFA060",
          bright: "#C9922A",
          muted: "rgba(191,160,96,0.6)",
          // Darkened variant for light mode contrast.
          dark: "#A07830",
        },
        white: {
          DEFAULT: "#FFFFFF",
          dim: "rgba(255,255,255,0.55)",
          ghost: "rgba(255,255,255,0.15)",
          faint: "rgba(255,255,255,0.06)",
        },
        offwhite: "#FAFAFA",
      },
      fontFamily: {
        // Wired to next/font CSS variables (see app/layout.tsx).
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        micro: "0.14em",
        microwide: "0.20em",
      },
      borderRadius: {
        md: "8px",
        lg: "12px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
