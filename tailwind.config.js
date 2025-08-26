// tailwind.config.js

// 1. Import the heroui plugin using ES Module syntax
import { heroui } from "@heroui/theme";

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
    extend: {},
  },
  darkMode: "class",
  // 3. Add the heroui plugin to the plugins array
  plugins: [heroui()],
};

// 4. Export the config using ES Module syntax
export default config;