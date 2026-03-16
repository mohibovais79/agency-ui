// tailwind.config.js

// 1. Import the heroui plugin using ES Module syntax
import { heroui } from "@heroui/theme";

const auroraPrimary = {
  50: "#F7F5FF",
  100: "#E8E5FF",
  200: "#D8CFFF",
  300: "#C2ADFF",
  400: "#AD85FF",
  500: "#9763FF",
  600: "#8544FF",
  700: "#6B2EE6",
  800: "#4B1FB6",
  900: "#2E147A",
  950: "#1C0C4D",
};

const neonCyan = {
  50: "#EFFFFF",
  100: "#CFF7FB",
  200: "#A0EEF5",
  300: "#6AE4EE",
  400: "#3FD6E4",
  500: "#19C4D4",
  600: "#079FB2",
  700: "#067E8E",
  800: "#075E6B",
  900: "#053F46",
  950: "#03272C",
};

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // Your app's files
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // 2. IMPORTANT: Add this line to include HeroUI components
    "./node_modules/@heroui/*/{dist,src}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 50px rgba(151, 99, 255, 0.35)",
      },
    },
  },
  darkMode: "class",
  // 3. Add the heroui plugin to the plugins array
  plugins: [
    // 2. Configure the heroui plugin according to the documentation
    heroui({
      // The `themes` option allows us to define custom colors
      themes: {
        light: {
          colors: {
            background: "#020617",
            foreground: "#EEF1FF",
            primary: {
              ...auroraPrimary,
              DEFAULT: auroraPrimary[500],
            },
            secondary: {
              ...neonCyan,
              DEFAULT: neonCyan[400],
            },
            focus: neonCyan[300],
            divider: "rgba(255,255,255,0.08)",
            content1: "#050B18",
            content2: "#0B1224",
            content3: "#111830",
            content4: "#19203D",
          },
        },
        dark: {
          colors: {
            background: "#01030B",
            foreground: "#F0F4FF",
            primary: {
              ...auroraPrimary,
              DEFAULT: auroraPrimary[400],
            },
            secondary: {
              ...neonCyan,
              DEFAULT: neonCyan[300],
            },
            focus: auroraPrimary[200],
            divider: "rgba(17,24,39,0.6)",
            content1: "#040713",
            content2: "#070C1D",
            content3: "#0F1426",
            content4: "#161B31",
          },
        },
      },
    }),
  ],
};

// 4. Export the config using ES Module syntax
export default config;