module.exports = {

  extends: 'airbnb',

  parser: 'babel-eslint', // enables the latest ES features, like [class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)

  env: {

    es6: true,

    jest: true, // let ESLint know I was using Jest, so it wasn’t confused about the it() function

  },

  rules: {

    camelcase: 1,

    'import/extensions': 'off',

    'import/no-unresolved': 'off',

    semi: 2, // force semicolons

    'react/jsx-wrap-multilines': 0, // along the same lines of playing fast-and-loose with ASI

    'react/jsx-filename-extension': 0, // component files still have a .js extension

    'no-use-before-define': 0, // allows to make the component the topmost element in a module file, and define a styles object further down.

    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],

    'max-len': ['error', { code: 250, tabWidth: 2 }],

    'import/prefer-default-export': 'off',

    'no-underscore-dangle': 'off',

    'react/destructuring-assignment': 'off',

    'react/jsx-one-expression-per-line': 'off',

    'operator-linebreak': 'off',

    'no-console': 'off',

  },

  plugins: [

    'react',

  ],

};
/**

 *  VS Code : Install ESLint extension: View → Extensions → find and install ESLint.

    Reload the editor.

    Enable auto fix: View → Command Pallete → Open Workspace Settings → add: "eslint.autoFixOnSave": true line to the settings

 */
