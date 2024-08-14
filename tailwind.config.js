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
        hoverbac:"#DFDFDF",
        back: "#DFDFDF",
        back2: "#F5F5F5",
        hover:"#DFDFDF",
        linear:"#FFC593",
        linear1:"#BC7198",
        linear2:"#5A77FF"
      }
    },
  },
  plugins: [],
}

