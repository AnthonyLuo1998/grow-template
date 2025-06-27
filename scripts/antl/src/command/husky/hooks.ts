/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-26 21:00:00
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-27 01:04:44
 * @Email: jum1274001055@gmail.com
 */

/**
 * Git Hooks 模板配置
 */
export const gitHookTemplates = {
  'pre-commit': [
    '#!/bin/sh',
    'echo "🔍 Running lint..."',
    'pnpm run lint',
    'echo "🔍 Running type check..."',
    'pnpm run type-check',
  ],
  'commit-msg': [
    '#!/bin/sh',
    'echo "🔍 Validating commit message..."',
    'npx commitlint --edit $1',
  ],
  'pre-push': [
    '#!/bin/sh',
    'echo "🔍 Running tests..."',
    'pnpm run test',
    'echo "🔍 Running build..."',
    'pnpm run build',
  ],
  'post-commit': [
    '#!/bin/sh',
    'echo "✅ 提交完成，正在执行后续操作..."',
    'pnpm run l:global || echo "⚠️  l:global 脚本未找到，跳过执行"',
  ],
}
