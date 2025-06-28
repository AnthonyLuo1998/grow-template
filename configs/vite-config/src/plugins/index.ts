import type { EnablePluginOptions } from '../types'
/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-25 18:42:53
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-28 12:39:28
 * @Email: jum1274001055@gmail.com
 */
import { loadPwaPlugin } from './pwa'
import { loadVuePlugin } from './vue'

export async function loadPlugins(pluginOptions: EnablePluginOptions) {
  const expandPluginInfoList = [
    {
      need: pluginOptions.vue,
      plugin: async () => await loadVuePlugin(),
    },
    {
      need: pluginOptions.pwa,
      plugin: async () => await loadPwaPlugin(),
    },
  ]

  const expandPluginInfoListEnabled = expandPluginInfoList.filter(
    item => item.need,
  )

  if (expandPluginInfoListEnabled.length === 0) {
    return []
  }

  const expandPluginList = expandPluginInfoListEnabled.map(
    item => item.plugin,
  )

  return await Promise.all(expandPluginList.map(item => item()))
}
