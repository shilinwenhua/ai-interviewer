// 真实面试题库 - 索引
import { pmQuestions, getQuestionsByLevel, getAllQuestionsForLevel, levelNames, getQuestionStats } from './pm'
import { frontendQuestions, getAllFrontendQuestions } from './frontend'
import { backendQuestions, getAllBackendQuestions } from './backend'
import { operationQuestions, getAllOperationQuestions } from './operation'

// 角色对应题库
export const questionBanks = {
  pm: pmQuestions,
  frontend: frontendQuestions,
  backend: backendQuestions,
  运营: operationQuestions,
}

// 角色名称
export const roleNames = {
  pm: '产品经理',
  frontend: '前端工程师',
  backend: '后端工程师',
  运营: '运营专员',
}

// 用户级别
export const userLevels = [
  { id: 'L1', name: '应届生/转行', desc: '0-1年经验', icon: '🎓' },
  { id: 'L2', name: '1-3年经验', desc: '初级工程师', icon: '💼' },
  { id: 'L3', name: '3-5年经验', desc: '中级工程师', icon: '🚀' },
  { id: 'L4', name: '5年+经验', desc: '高级/资深', icon: '⭐' },
]

// 导出 levelNames
export { levelNames }

// 获取题库
export const getQuestionBank = (role) => {
  return questionBanks[role] || questionBanks.pm
}

// 获取指定级别的题目
export const getQuestions = (role, company = null, level = 'L2', count = 10) => {
  return getAllQuestionsForLevel(role, level, count)
}

// 统计题库数量
export const getStats = () => {
  return getQuestionStats()
}

console.log('题库统计:', getStats())
