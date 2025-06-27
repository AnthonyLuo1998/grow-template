/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-26 20:25:11
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-27 17:37:43
 * @Email: jum1274001055@gmail.com
 */

import type { CAC } from 'cac'
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { gitHookTemplates } from './hooks.js'
import { createHook } from './utils.js'

function runHusky() {
  try {
    // 在 CI 环境中跳过配置
    if (process.env.CI || process.env.GITHUB_ACTIONS || process.env.GITLAB_CI) {
      console.log('🤖 检测到 CI 环境，跳过 husky 配置')
      return
    }

    console.log('🚀 开始配置 husky...')

    // 获取项目根目录
    const rootProjectPath = process.cwd()
    console.log(`📁 当前命令执行目录: ${rootProjectPath}`)

    // 获取 .husky 目录
    const huskyDir = path.join(rootProjectPath, '.husky')

    // 在全局执行npx husky init
    if (!fs.existsSync(huskyDir)) {
      console.log('📝 未初始化 自动执行husky初始化...')
      execSync('npx husky init')
    }

    // 直接创建/覆盖所有 hooks
    console.log('📝 配置 自定义hook...')
    for (const [key, value] of Object.entries(gitHookTemplates)) {
      createHook(huskyDir, key, value)
      console.log(`✅ 已配置 ${key} hook`)
    }
    console.log('🎉 husky 配置完成')
  }
  catch (error) {
    console.error('❌ 配置失败:', error)
    process.exit(1)
  }
}

function defineHuskyCommand(cac: CAC) {
  cac
    .command('husky')
    .usage('配置 husky, 自动生成 git hook')
    .option('--format', 'Format lint problem.')
    .action(runHusky)
}

export default defineHuskyCommand
