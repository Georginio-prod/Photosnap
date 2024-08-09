/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        line: "#979797",
        hoverbac:"#DFDFDF"
      }
    },
  },
  plugins: [],
}

