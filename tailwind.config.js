/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0f1923',
        'pink': '#FF4656'
      },
      skew: {
        '30': '30deg',
      },
      fontFamily: {
        "valorant": ["Valorant", "sans-serif"],
      }
    },
  },
  plugins: [],
}
