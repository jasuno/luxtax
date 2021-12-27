const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      canadaRed: "#c00d00",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
