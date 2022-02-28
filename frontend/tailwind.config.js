const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: '#146EB4',
      lightBlue: '#4FADF5',
      darkBlue:'#232F3E',
      yellow: '#FF9900',
      gray: '#A1A9AD',
      grayLight: '#F2F2F2',
      white: '#FFF',
      black: '#23272a',
      'smoke-darkest': 'rgba(0, 0, 0, 0.9)',
      'smoke-darker': 'rgba(0, 0, 0, 0.75)',
      'smoke-dark': 'rgba(0, 0, 0, 0.6)',
      'smoke': 'rgba(0, 0, 0, 0.5)',
      'smoke-light': 'rgba(0, 0, 0, 0.4)',
      'smoke-lighter': 'rgba(0, 0, 0, 0.25)',
      'smoke-lightest': 'rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [],
}
