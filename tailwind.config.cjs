/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ['"Space Mono"'],
        worksans: ['"Work Sans"'],
      },
      colors: {
        primaryBG: "#2B2B2B",
        secondaryBG: "#3B3B3B",
        secondaryText: "#858584",
      },
      borderRadius: {
        "lg-2": "20px",
      },
    },
  },
  plugins: [],
};
