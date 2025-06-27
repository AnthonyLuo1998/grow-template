/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-26 18:32:08
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-26 18:43:31
 * @Email: jum1274001055@gmail.com
 */
// lint-staged.config.js
import micromatch from 'micromatch'

export default (allStagedFiles) => {
  const shFiles = micromatch(allStagedFiles, ['**/src/**/*.sh'])
  if (shFiles.length) {
    return `printf '%s\n' "Script files aren't allowed in src directory" >&2`
  }
  const codeFiles = micromatch(allStagedFiles, ['**/*.js', '**/*.ts', '**/*.vue', '**/*.mts', '**/*.mjs', '**/*.tsx', '**/*.jsx'])
  // const docFiles = micromatch(allStagedFiles, ['**/*.md'])
  return [`eslint ${codeFiles.join(' ')}`]
}
