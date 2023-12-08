import type { Config } from "tailwindcss";
const path = require("path");

const config: Config = {
  mode: "jit",
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "node_modules/ui/src/**/*.{vue,js,ts,jsx,tsx,mdx}')",
  ],
};

export default config;
