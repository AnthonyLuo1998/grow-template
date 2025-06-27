/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-26 21:00:00
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-26 23:57:24
 * @Email: jum1274001055@gmail.com
 */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

/**
 * 查找项目根目录
 */
export function getRootProjectPath(rootName: string): string {
  let currentDir = process.cwd()

  while (currentDir !== path.dirname(currentDir)) {
    if (fs.existsSync(path.join(currentDir, 'package.json'))) {
      const packageJson = JSON.parse(fs.readFileSync(path.join(currentDir, 'package.json'), 'utf8'))
      if (packageJson.name === rootName) {
        return currentDir
      }
    }
    currentDir = path.dirname(currentDir)
  }

  throw new Error('未找到项目根目录')
}

/**
 * 创建单个 hook 文件
 */
export function createHook(huskyDir: string, hookName: string, commands: string[]): void {
  const hookPath = path.join(huskyDir, hookName)
  const content = commands.join('\n')

  // 确保目录存在
  if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, { recursive: true })
  }

  fs.writeFileSync(hookPath, content, { mode: 0o755 })
}
