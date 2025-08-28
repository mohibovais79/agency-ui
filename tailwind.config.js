// tailwind.config.js

// 1. Import the heroui plugin using ES Module syntax
import { heroui } from "@heroui/theme";

const darkTurquoise = {
  '50': '#f0f9fa',
  '100': '#e0f2f7',
  '200': '#bde5ee',
  '300': '#89d3e3',
  '400': '#52bacd',
  '500': '#2daabb',
  '600': '#158b9f', // This will be our main accent color
  '700': '#157184',
  '800': '#185a6a',
  '900': '#184b58',
  '950': '#0d2c35',
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
    extend: {},
  },
  darkMode: "class",
  // 3. Add the heroui plugin to the plugins array
  plugins: [
    // 2. Configure the heroui plugin according to the documentation
    heroui({
      // The `themes` option allows us to define custom colors
      themes: {
        light: { // We are defining the colors for the 'light' theme
          colors: {
            primary: {
              ...darkTurquoise,
              DEFAULT: darkTurquoise[600], // The default primary color
            },
          },
        },
        // It's good practice to also define a dark theme, even if we don't use it.
        // This prevents potential issues if any part of the library expects it to exist.
        dark: {
          colors: {
            primary: {
              ...darkTurquoise,
              DEFAULT: darkTurquoise[500], // A slightly brighter shade for dark backgrounds
            },
          },
        },
      },
    }),
  ],
};

// 4. Export the config using ES Module syntax
export default config;