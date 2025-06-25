/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-25 17:09:03
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-25 21:45:59
 * @Email: jum1274001055@gmail.com
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { cwd } from 'node:process';
import { resolve } from 'node:path';

export function loadVueConfig() {
  const root = cwd();
  return defineConfig({
    resolve: {
      alias: {
        '@': resolve(root, 'src'),
      },
    },
    plugins: [vue()],
  });
}
