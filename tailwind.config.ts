import type { Config } from "tailwindcss";

export default {
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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        lightOrange: "var(--lightOrange)",
        lightGreen: "var(--lightGreen)",
        grey66: "var(--grey66)",
        dark38: "var(--dark38)",
        grey54: "var(--grey54)",
        blue12: "var(--blue12)",
        greyC9: "var(--greyC9)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
