/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bodyPrimary: "#ffffff",
      bodySecondary: "#FFF9F8",
      primaryColor: "#FE6053",
      whiteText: "#ffffff",
      dimmedText: "#786E6E",
      shadeGray: "#312221",
      blueShade: "#1A257D",
      hoverColor: "#ffc4c5"
    }
  },
  plugins: [],
}

