import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        yellow: {
          DEFAULT: "#f9cb58",
          50: "#fefaf0",
          100: "#fef4dd",
          200: "#fdeaba",
          300: "#fbe19d",
          400: "#fad67a",
          500: "#f9cb58",
          600: "#f7b818",
          700: "#c58f07",
          800: "#805d05",
          900: "#402f02",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              borderBottom: ["1px solid #fff"],
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
