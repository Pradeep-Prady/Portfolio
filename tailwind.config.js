/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".link": {
      border: "1px solid aqua",
      "border-radius": "2px",
      cursor: "pointer",
      "font-weight": 400,
      color: "aqua",
    },
    ".head": {
      color: "aqua",
    },
    
  });
});

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [Myclass],
};
