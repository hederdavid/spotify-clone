/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-color-principal': '#161616'
      },
      fontFamily: {
        nunito: ['Nunito'],
      }
    },
  },
  plugins: [],
}

