module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'object-curly-spacing': ['warn', 'always'],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-useless-constructor': 0,
    '@typescript-eslint/no-empty-function': 0,
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};
