const {heroui} = require("@heroui/react");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
}
