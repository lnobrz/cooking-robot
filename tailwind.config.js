/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightRed: "#FFEADF",
        brightRed: "#E71E1E",
        softWhite: "#FFFDFD",
        grey: "#EFEFEF",
      },
      fontFamily: {
        display: ["BalooThambi2Bold"],
        text: ["ArialRoundedMTBold"],
      },
      spacing: {
        534: "534px",
      },
    },
  },
  plugins: [],
};
