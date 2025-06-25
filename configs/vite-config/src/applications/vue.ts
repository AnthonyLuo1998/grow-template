import { resolve } from 'node:path'
import { cwd } from 'node:process'
import vue from '@vitejs/plugin-vue'
/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-25 17:09:03
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-25 21:45:59
 * @Email: jum1274001055@gmail.com
 */
import { defineConfig } from 'vite'

export function loadVueConfig() {
  const root = cwd()
  return defineConfig({
    resolve: {
      alias: {
        '@': resolve(root, 'src'),
      },
    },
    plugins: [vue()],
  })
}
