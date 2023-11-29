/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-gothic-a1)"],
        mono: ["var(--font-east-sea-dokdo)"],
      },
      colors: {
        primary: {
          700: "#dbc9c5",
          800: "#f7c3ad",
          900: "#a67265",
        },
        secondary: {
          800: "#5569a6",
          900: "#323c59",
        },
      },
      keyframes: {
        toright: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        flip: {
          "0%": { transform: "rotateY(-90deg)", opacity: "0" },
          "100%": { transform: "rotateY(0deg)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
