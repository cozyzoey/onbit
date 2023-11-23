/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
