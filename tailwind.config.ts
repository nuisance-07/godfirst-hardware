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
          DEFAULT: "#C41E2A",
          hover: "#A31822",
          light: "#E63946",
        },
        accent: {
          DEFAULT: "#D4A853",
          muted: "#4A3728",
        },
        secondary: {
          DEFAULT: "#475569",
          hover: "#64748B",
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
        glow: "0 0 20px rgba(196, 30, 42, 0.15)",
        "glow-lg": "0 0 40px rgba(196, 30, 42, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
