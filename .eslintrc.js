module.exports = {
  env: {
    browser: true,
  },
  globals: {
    worker: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  ignorePatterns: ['!.*', 'node_modules'],
  overrides: [
    {
      files: ['*.js'],
      extends: ['airbnb-base', 'plugin:prettier/recommended'],
    },
    {
      files: ['.prettierrc.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      files: 'src/**/*',
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
};
