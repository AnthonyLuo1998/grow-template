/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-26 01:09:37
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-26 02:37:29
 * @Email: jum1274001055@gmail.com
 */
import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: true,
    vue: true,
    typescript: true,
  },
  {
    // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ['**/*.vue'],
    rules: {
    },
  },
  {
    // Without `files`, they are general rules for all files
    rules: {
      'no-console': 'warn',
    },
  },
  ...tailwindcss.configs['flat/recommended'],
)
