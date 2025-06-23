module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrainsMono", "monospace"],
      },
      colors: {
        almostWhite: "#E6E5EA",
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
        neonGreen: "#A4FFAF",
        grey: "#817D92",
        darkGrey: "#24232C",
        veryDarkGrey: "#18171F",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "slide-in": "slideIn 0.5s ease-out forwards",
        "slide-out": "slideOut 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};
