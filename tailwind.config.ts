import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
        greyE8: "var(--greyE8)",
        greyD9: "var(--greyD9)",
        greyC4: "var(--greyC4)",
        grey4C: "var(--grey4C)",
        green64: "var(--green64)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
