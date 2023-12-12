module.exports = {
  globals: {
    page: 'readonly',
    context: 'readonly',
    $blibli: 'readonly'
  },
  root: true,
  env: {
    node: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
