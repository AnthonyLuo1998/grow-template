import type { ExpandPluginOptions } from '../types'
/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-25 18:42:53
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-25 20:46:43
 * @Email: jum1274001055@gmail.com
 */
import { loadPwaPlugin } from './pwa'

export async function loadExpandPlugins(pluginOptions: ExpandPluginOptions) {
  const expandPluginInfoList = [
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
