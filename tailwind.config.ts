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
          DEFAULT: "#0EA5E9",
          hover: "#0284C7",
          light: "#38BDF8",
        },
        accent: {
          DEFAULT: "#22D3EE",
          muted: "#164E63",
        },
        secondary: {
          DEFAULT: "#64748B",
          hover: "#94A3B8",
        },
        dark: {
          DEFAULT: "#0B1120",
          surface: {
            DEFAULT: "var(--dark-surface)",
            hover: "#1E293B",
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(14, 165, 233, 0.15)",
        "glow-lg": "0 0 40px rgba(14, 165, 233, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
