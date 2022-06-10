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
      gray: {
        DEFAULT: '#808080',
        50: '#FFFFFF',
        100: '#FAFAFA',
        200: '#DBDBDB',
        300: '#BDBDBD',
        400: '#9E9E9E',
        500: '#808080',
        600: '#666666',
        700: '#4D4D4D',
        800: '#333333',
        900: '#1A1A1A'
      },
      white: '#ffffff'
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

// {

// "color-primary-700": "#2F47A9",
// "color-primary-800": "#1E3088",
// "color-primary-900": "#122070",
// "color-success-100": "#F2FBCE",
// "color-success-200": "#E3F89F",
// "color-success-300": "#C8EC6C",
// "color-success-400": "#ABD946",
// "color-success-500": "#84C113",
// "color-success-600": "#6BA50D",
// "color-success-700": "#548A09",
// "color-success-800": "#3F6F06",
// "color-success-900": "#305C03",
// "color-info-100": "#D5FEFA",
// "color-info-200": "#ACFDFB",
// "color-info-300": "#82F4FB",
// "color-info-400": "#62E4F7",
// "color-info-500": "#30CBF2",
// "color-info-600": "#23A0D0",
// "color-info-700": "#1879AE",
// "color-info-800": "#0F578C",
// "color-info-900": "#093E74",
// "color-warning-100": "#FEF7CE",
// "color-warning-200": "#FEEE9E",
// "color-warning-300": "#FEE16E",
// "color-warning-400": "#FDD54A",
// "color-warning-500": "#FCC10F",
// "color-warning-600": "#D8A00A",
// "color-warning-700": "#B58107",
// "color-warning-800": "#926404",
// "color-warning-900": "#784F02",
// "color-danger-100": "#FFE8D6",
// "color-danger-200": "#FFCCAD",
// "color-danger-300": "#FFA983",
// "color-danger-400": "#FF8865",
// "color-danger-500": "#FF5132",
// "color-danger-600": "#DB3124",
// "color-danger-700": "#B71919",
// "color-danger-800": "#930F1A",
// "color-danger-900": "#7A091B"
// }
