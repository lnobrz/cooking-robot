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
        modalBg: "rgba(0,0,0,0.4)",
      },
      fontFamily: {
        display: ["BalooThambi2Bold"],
        text: ["ArialRoundedMTBold"],
      },
      spacing: {
        534: "534px",
        565: "565px",
        1000: "1000px",
        5: "5%",
        50: "50%",
      },
    },
  },
  plugins: [],
};
