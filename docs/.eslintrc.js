const warn = 1;

module.exports = {
  rules: {
    'import/no-unresolved': [warn, { commonjs: true, caseSensitive: true }],
    'import/extensions': [
      // because of highlight.js
      warn,
      'always',
      {
        js: 'never',
      },
    ],
  },
};
