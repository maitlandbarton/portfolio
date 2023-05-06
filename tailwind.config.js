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
    animation: {
      marquee: 'marquee 25s linear infinite',
      marquee2: 'marquee2 25s linear infinite'
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)'},
        '100%': { transform: 'translateX(0%)'},
      },
    },
  },
  
  plugins: [],
}

