import type { PluginOption } from 'vite'
/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-28 12:37:20
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-28 12:52:41
 * @Email: jum1274001055@gmail.com
 */
import { resolve } from 'node:path'
import { cwd } from 'node:process'

function loadDefaultOptions() {
  const root = cwd()
  return {
    resolve: {
      alias: {
        '@': resolve(root, 'src'),
      },
    },
  }
}

export { loadDefaultOptions }
