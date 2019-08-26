module.exports = {
  extends: [
    'eslint-config-mandacarutech-base',
    './rules/react',
    './rules/react-a11y',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  parser: require.resolve('babel-eslint'),
  rules: {},
};
