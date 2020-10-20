module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontSize: {
        '2xs': '.625rem', // 10px
      },
      colors: {
        primary: {
          100: '#EAF8F0',
          200: '#CBEDD8',
          300: '#ABE1C1',
          400: '#6CCB93',
          500: '#2DB564',
          600: '#29A35A',
          700: '#1B6D3C',
          800: '#14512D',
          900: '#0E361E',
        },
      },
    },
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-aspect-ratio'),
    require('@tailwindcss/ui'),
    require('tailwindcss-dark-mode')(),
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  experimental: {applyComplexClasses: true, darkModeVariant: true},
}
