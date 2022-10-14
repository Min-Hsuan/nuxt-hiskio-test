const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: "#178FAC",
        "hiskio-red": "#E34A4A",
        "gray-700": "#434343",
        "gray-600": "#595959",
        "gray-500": "#8C8C8C",
        "gray-400": "#BFBFBF",
        "gray-300": "#D9D9D9",
        "gray-100": "#F5F5F5",
      },
      fontFamily: {
        arabic: ["Helvetica Neue"],
      },
    },
  },
};
