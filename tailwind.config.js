/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#08415c',
        red: '#cc2936',
        teaRose: '#ebbab9',
        customBlue: '#388697',
        aqua: '#b5ffe1'
      }
    },
  },
  plugins: [],
}

