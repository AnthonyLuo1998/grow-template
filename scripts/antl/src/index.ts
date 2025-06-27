/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-27 14:30:59
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-27 16:39:35
 * @Email: jum1274001055@gmail.com
 */
import process from 'node:process'
import { cac } from 'cac'
import { version } from '../package.json'
import defineHuskyCommand from './command/husky'

function setupAntl() {
  try {
    const antl = cac('antl')
    // 基本配置
    antl.usage('antl <command> [options]')
    antl.help()
    antl.version(version)
    // 定义命令
    defineHuskyCommand(antl)

    // 解析命令
    antl.parse()
  }
  catch (error) {
    console.error('❌ 配置失败:', error)
    process.exit(1)
  }
}

setupAntl()
