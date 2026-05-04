import { heroui } from "@heroui/theme";

const violet = {
  50:  "#F5F3FF",
  100: "#EDE9FE",
  200: "#DDD6FE",
  300: "#C4B5FD",
  400: "#A78BFA",
  500: "#8B5CF6",
  600: "#7C3AED",
  700: "#6D28D9",
  800: "#5B21B6",
  900: "#4C1D95",
  950: "#2E1065",
};

const cyan = {
  50:  "#ECFEFF",
  100: "#CFFAFE",
  200: "#A5F3FC",
  300: "#67E8F9",
  400: "#22D3EE",
  500: "#06B6D4",
  600: "#0891B2",
  700: "#0E7490",
  800: "#155E75",
  900: "#164E63",
  950: "#083344",
};

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/*/{dist,src}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow:      "0 0 40px rgba(139,92,246,0.45), 0 0 80px rgba(139,92,246,0.15)",
        "glow-sm": "0 0 18px rgba(139,92,246,0.35)",
        card:      "0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-hover": "0 8px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "28px 28px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#06090F",
            foreground: "#E8EDFF",
            primary:   { ...violet, DEFAULT: violet[500] },
            secondary: { ...cyan,   DEFAULT: cyan[400]   },
            focus: cyan[300],
            divider: "rgba(255,255,255,0.06)",
            content1: "#07090F",
            content2: "#0B0F1E",
            content3: "#0F1528",
            content4: "#141B32",
          },
        },
        dark: {
          colors: {
            background: "#06090F",
            foreground: "#E8EDFF",
            primary:   { ...violet, DEFAULT: violet[400] },
            secondary: { ...cyan,   DEFAULT: cyan[300]   },
            focus: violet[300],
            divider: "rgba(255,255,255,0.06)",
            content1: "#07090F",
            content2: "#0B0F1E",
            content3: "#0F1528",
            content4: "#141B32",
          },
        },
      },
    }),
  ],
};

export default config;
