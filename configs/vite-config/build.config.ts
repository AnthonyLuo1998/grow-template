/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-13 12:03:12
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-13 12:59:56
 * @Email: jum1274001055@gmail.com
 */
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index'],
  outDir: 'dist',
});
