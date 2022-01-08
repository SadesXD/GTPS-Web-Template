module.exports = {
  darkMode: "class",
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    extend: {
      colors: {
        whiteCustom: "#FAFAFA",
        pinkBlur: "#EF2F88",
        purpleBlur: "#CAB8FF",
        orangeBlur: "#FF8243",
        blueBlur: "#71DFE7",
        darkMode: "#2A205A",
        darkCard: "#1D1449",
        darkCardHover: "#2d2261",
      },
      boxShadow: {
        base: "3px 3px 10px rgba(55, 84, 170, 0.1), -3px -3px 10px rgb(252, 252, 252);",
        baseDark:
          "3px 3px 10px rgba(0, 0, 0, 0.2), -3px -3px 10px rgba(77, 61, 153, 0.8);",
      },
    },
  },
  plugins: [],
};
