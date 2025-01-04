import globals from 'globals';
import js from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jest from 'eslint-plugin-jest';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  // EXTENDS
  js.configs.recommended,
  pluginImport.flatConfigs.recommended,
  react.configs.flat.recommended,
  // add react.configs['jsx-runtime'] when it becomes available for flat
  // and then remove the override that disables react-in-jsx-scope
  // no recommended config for react hooks for flat
  // no recommended config for react native, let alone for flat
  jest.configs['flat/recommended'],

  // GENERAL
  {
    // add environment and parser
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      's': stylisticJs,
      'reacta': react,
      'react-hooks': reactHooks,
    },
  },

  // JS
  {
    rules: {
      'arrow-body-style': 'off',
      'no-constant-condition': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-unused-vars': 'warn',
      'object-curly-newline': 'off',
    },
  },

  // IMPORT
  {
    rules: {
      'import/namespace': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
    },
  },

  // REACT
  {
    rules: {
      'react/function-component-definition': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/style-prop-object': 'off',
    },
    settings: {
      react: {
        // removes "no react version specified" warning
        version: 'detect',
      },
    },
  },

  // REACT HOOKS
  {
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // REACT NATIVE
  {
    rules: {
      // add rules here
    },
  },

  // JEST
  {
    rules: {
      // add rules here
    },
  },

  // STYLE
  {
    rules: {
      's/comma-dangle': ['error', 'always-multiline'],
      's/object-curly-spacing': ['error', 'always'],
      's/quotes': ['error', 'single'],
      's/semi': ['error', 'always'],
    },
  },
];
