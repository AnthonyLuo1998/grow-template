/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-28 12:33:48
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-28 12:35:12
 * @Email: jum1274001055@gmail.com
 */
export async function loadVuePlugin() {
  const vuePlugin = await import('@vitejs/plugin-vue')
  return vuePlugin.default()
}
