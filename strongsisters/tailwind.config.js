/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#151515',
        darkGrey: '#F5F5FA',
        darkRed: '#93232A',
        darkBlue: '#313A51',
        red: '#EF3F4A',
        white: '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
