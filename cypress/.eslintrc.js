module.exports = {
  root: true,
  plugins: ['eslint-plugin-cypress'],
  extends: ['plugin:cypress/recommended', 'plugin:testing-library/vue'],
  env: {'cypress/globals': true},
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
