// 面试复盘工具
const INTERVIEW_HISTORY_KEY = 'ai-interviewer-history'

// 保存面试记录
export const saveInterview = (interviewData) => {
  const history = getInterviewHistory()
  
  const newInterview = {
    id: Date.now().toString(),
    ...interviewData,
    createdAt: new Date().toISOString(),
  }
  
  history.unshift(newInterview)
  localStorage.setItem(INTERVIEW_HISTORY_KEY, JSON.stringify(history))
  
  return newInterview
}

// 获取面试历史
export const getInterviewHistory = () => {
  const data = localStorage.getItem(INTERVIEW_HISTORY_KEY)
  return data ? JSON.parse(data) : []
}

// 获取单条面试记录
export const getInterviewById = (id) => {
  const history = getInterviewHistory()
  return history.find(i => i.id === id)
}

// 删除面试记录
export const deleteInterview = (id) => {
  const history = getInterviewHistory()
  const filtered = history.filter(i => i.id !== id)
  localStorage.setItem(INTERVIEW_HISTORY_KEY, JSON.stringify(filtered))
}

// 清除所有历史
export const clearInterviewHistory = () => {
  localStorage.setItem(INTERVIEW_HISTORY_KEY, JSON.stringify([]))
}

// 获取进步统计
export const getProgressStats = () => {
  const history = getInterviewHistory()
  
  if (history.length === 0) {
    return {
      totalInterviews: 0,
      averageScore: 0,
      trend: [],
      improvements: [],
    }
  }
  
  // 计算平均分
  const scores = history.map(h => h.result?.total || 0).filter(s => s > 0)
  const averageScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
  
  // 趋势数据（最近10次）
  const trend = history.slice(0, 10).map((h, index) => ({
    date: formatDate(h.createdAt),
    score: h.result?.total || 0,
    company: h.companyName || '',
  })).reverse()
  
  // 统计各维度平均分
  const dimensionScores = {
    professional: [],
    experience: [],
    logic: [],
    communication: [],
  }
  
  history.forEach(h => {
    if (h.result?.professional) dimensionScores.professional.push(h.result.professional)
    if (h.result?.experience) dimensionScores.experience.push(h.result.experience)
    if (h.result?.logic) dimensionScores.logic.push(h.result.logic)
    if (h.result?.communication) dimensionScores.communication.push(h.result.communication)
  })
  
  const avg = (arr) => arr.length > 0 ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 0
  
  const improvements = [
    { name: '专业技能', score: avg(dimensionScores.professional) },
    { name: '项目经验', score: avg(dimensionScores.experience) },
    { name: '逻辑思维', score: avg(dimensionScores.logic) },
    { name: '沟通表达', score: avg(dimensionScores.communication) },
  ]
  
  return {
    totalInterviews: history.length,
    averageScore,
    trend,
    improvements,
  }
}

// 格式化日期
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
}

// 获取面试次数
export const getInterviewCount = () => {
  return getInterviewHistory().length
}
