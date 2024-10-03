module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // Ensure correct path to the tsconfig file
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Enables Prettier as an ESLint rule and reports Prettier issues as ESLint issues
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/'], // Optionally ignore node_modules
  rules: {
    // Disabling some strict rules for flexibility
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Enforce better handling of unused variables
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all', // Report unused variables
        args: 'none', // Don't report unused function arguments
        ignoreRestSiblings: true, // Ignore rest siblings (`...rest`) as unused variables
        argsIgnorePattern: '^_', // Ignore unused variables that start with an underscore
      },
    ],

    // Ensure that Prettier issues are reported
    'prettier/prettier': 'error',
  },
};
