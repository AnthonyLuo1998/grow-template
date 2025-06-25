import type { PluginOption, UserConfig } from 'vite'
import type { ApplicationType, ExpandPluginOptions } from './types'
/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-25 18:03:34
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-25 22:33:31
 * @Email: jum1274001055@gmail.com
 */
import { mergeConfig } from 'vite'
import { loadApplicationConfig } from './applications'
import { loadExpandPlugins } from './plugins'

export async function defineConfig(
  applicationType: ApplicationType,
  expandPluginOptions?: ExpandPluginOptions,
  overrides?: UserConfig,
) {
  // 获取应用类型
  const applicationConfig: UserConfig = loadApplicationConfig(applicationType)

  // 扩展插件
  const expandPlugins: PluginOption[]
    = await loadExpandPlugins(expandPluginOptions)
  applicationConfig.plugins = [...applicationConfig.plugins, ...expandPlugins]

  // 合并配置
  return mergeConfig(applicationConfig, overrides)
}
