import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "node_modules/ui/**/*.vue",
  ],
};

export default config;
