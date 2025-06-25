/*
 * @Author: AnthonyLuo
 * @Date: 2025-06-25 20:48:20
 * @LastEditors: AnthonyLuo
 * @LastEditTime: 2025-06-25 20:49:46
 * @Email: jum1274001055@gmail.com
 */
import type { ApplicationType } from '../types';
import { loadVueConfig } from './vue';

export function loadApplicationConfig(applicationType: ApplicationType) {
  if (applicationType === 'vue') {
    return loadVueConfig();
  }
}
