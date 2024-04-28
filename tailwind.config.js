/** @type {import('tailwindcss').Config} */
export default {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Display: '"Platypi", serif'
      }
    },
  },
  plugins: [require("daisyui")],
}

