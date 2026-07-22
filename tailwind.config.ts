import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111F",
        panel: "#0C1B2A",
        cyan: "#43E6D3",
        coral: "#FF7A66",
        ivory: "#F4F1E8",
        mist: "#A9B9C7"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;
