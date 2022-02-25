const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: '#146EB4',
      darkBlue:'#232F3E',
      yellow: '#FF9900',
      gray: '#A1A9AD',
      grayLight: '#F2F2F2',
      white: '#FFF'
    },
  },
  plugins: [],
}
