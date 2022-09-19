/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'app-dark':'#002333',
        'app-green':'#149A9B',
        'app-pink':'#BE185D',
        'app-light-green':'#DEEFE7',
        'app-gray':'#B4BEC8',
        'app-light-gray':'#EAEAEA',
        'app-white':'#F9FAFE'
      }
    },
  },
  plugins: [],
}
