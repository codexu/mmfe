import daisyui from "daisyui"
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  jit: true,
  darkMode: ["selector", "[data-theme=dark]"],
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "node_modules/ui/**/*.{vue,jsx,tsx}",
  ],
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: {
    themes: false,
  },
};

export default config;
