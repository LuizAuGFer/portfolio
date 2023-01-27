/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '700': '700px',
      },
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'media',
}