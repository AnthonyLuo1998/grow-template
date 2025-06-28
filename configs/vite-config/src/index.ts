/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-25 18:03:34
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-28 12:55:05
 * @Email: jum1274001055@gmail.com
 */
import type { PluginOption, UserConfig } from 'vite'
import type { EnablePluginOptions } from './types'
import { mergeConfig } from 'vite'
import { loadDefaultOptions } from './options'
import { loadPlugins } from './plugins'

export async function defineConfig(
  enablePluginOptions: EnablePluginOptions,
  overrides: UserConfig = {},
) {
  try {
    // 加载插件
    const plugins: PluginOption[] = []
    if (enablePluginOptions && Object.keys(enablePluginOptions).length > 0) {
      const enabledPlugins: PluginOption[] = await loadPlugins(enablePluginOptions)
      if (enabledPlugins && enabledPlugins.length > 0) {
        plugins.push(...enabledPlugins)
      }
    }
    // 加载默认配置选项
    const defaultOptions = loadDefaultOptions()
    // 合并配置
    return mergeConfig({
      ...defaultOptions,
      plugins,
    }, overrides)
  }
  catch (error) {
    console.error(error)
  }
}
