/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: "#178FAC",
        "hiskio-red": "#E34A4A",
        "gray-700": "#434343",
        "gray-600": "#595959",
        "gray-500": "#8C8C8C",
      },
    },
  },
  plugins: [],
};
