/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black':'#262626',
        'black75':'#383838',
        'black50':'#808080',
        'black25':'#9f9f9f',
        'blue-text':'#533fd5',
        'blue-btn':'#503dd4',
        'bluelogo':'#504090',
        'darkblue':'#45339c',
        'light-blue-text':'#eef0fe',
        'yellow':'#f9c847'
      }
    },
  },
  plugins: [],
}