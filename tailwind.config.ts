import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#E87D2F",
          hover: "#D4691A",
        },
        secondary: {
          DEFAULT: "#A0A0A0",
          hover: "#e5e7eb",
        },
        dark: {
          DEFAULT: "#000000",
          surface: {
            DEFAULT: "var(--dark-surface)",
            hover: "#1c1c1f",
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
