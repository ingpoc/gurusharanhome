import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#141413",
        light: "#FAF9F5",
        accent: "#D97756",
      },
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: "clamp(3rem, 10vw, 7rem)",
        section: "clamp(2rem, 5vw, 4rem)",
      },
    },
  },
  plugins: [],
};

export default config;
