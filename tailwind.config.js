/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "sg-blue": "#153C8A",
        "sg-sky-blue": "#91C5F1",
        "sg-yellow": "#FECE2F",
        "sg-red": "#C62700",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
