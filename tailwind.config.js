const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    colors: {
      blue: {
        100: '#DFEAFE',
        200: '#C0D4FD',
        300: '#9FBAF9',
        400: '#86A4F3',
        500: '#5F82EB',
        600: '#4563CA',
        700: '#2F47A9',
        800: '#1E3088',
        900: '#122070'
      },
      gray: colors.gray,
      white: colors.white,
      red: colors.red,
      green: colors.green
    },
    fontFamily: {
      sans: ['Titillium Web'],
      serif: ['Titillium Web'],
      mono: ['Titillium Web'],
      display: ['Titillium Web'],
      body: ['Titillium Web']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: [],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ]

}
