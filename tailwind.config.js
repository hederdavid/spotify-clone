// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-color-principal': '#131616'
      },
      fontFamily: {
        nunito: ['Nunito'],
      },
      scrollbar: ['dark'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
