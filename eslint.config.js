import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs}'],
    plugins: { js },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'warn',
      semi: ['error', 'always'],
      quotes: ['warn', 'single'],
    },
  },
  {
    files: [
      '**/tailwind.config.js',
      '**/vite.config.js',
      '**/postcss.config.js',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        module: 'writable',
      },
    },
  },
]);
