/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-25 22:57:31
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-25 23:27:23
 * @Email: jum1274001055@gmail.com
 */
// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default {
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.json5'],
      options: {
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
};
