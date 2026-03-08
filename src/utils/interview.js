// 面试记录管理工具
import { companyList } from '../data/companyJD'
import { roleNames, questionBank } from '../data/questionBank'

const STORAGE_KEY = 'ai-interviewer-records'

// API 配置
const API_KEY = 'sk-eyrwfzshynueiskbjwkccrriscisutacbdkjwmpagbhlqcee'
const MODEL_NAME = 'Qwen/Qwen2.5-72B-Instruct'

// 获取公司信息
export const getCompanyInfo = (companyId) => {
  return companyList.find(c => c.id === companyId)
}

// 获取公司名称
export const getCompanyName = (companyId) => {
  const company = getCompanyInfo(companyId)
  return company ? company.name : companyId
}

// 保存面试记录
export const saveInterviewRecord = (record) => {
  const records = getInterviewRecords()
  const newRecord = {
    id: Date.now().toString(),
    ...record,
    createdAt: new Date().toISOString(),
  }
  records.unshift(newRecord)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
  return newRecord
}

// 获取面试记录
export const getInterviewRecords = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

// 删除面试记录
export const deleteInterviewRecord = (id) => {
  const records = getInterviewRecords()
  const filtered = records.filter(r => r.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}

// 调用 AI 生成反馈
export const generateAIFeedback = async (role, companyId, position, answers) => {
  const company = getCompanyInfo(companyId)
  const roleName = roleNames[role]
  const questions = questionBank[role] || []
  
  // 构建答案摘要
  const answersSummary = answers.map(a => {
    const question = questions[a.index]
    return `问题${a.index + 1}：${question?.text || ''}\n回答：${a.answer || '未回答'}`
  }).join('\n\n')

  const prompt = `你是一个专业的AI面试官。请根据以下面试信息给出综合反馈。

面试角色：${roleName}
目标公司：${company?.name || companyId}
目标职位：${position?.title || ''}

面试答案：
${answersSummary}

请以JSON格式返回综合反馈，要求包含以下字段：
- professional: 专业技能评分 (0-100)
- experience: 项目经验评分 (0-100)
- logic: 逻辑思维评分 (0-100)
- communication: 沟通表达评分 (0-100)
- total: 总分 (0-100)
- overallComment: 综合评语 (200-300字)
- improvements: 改进建议数组 (4-5条，每条20-40字)

只返回JSON，不要其他内容。`

  try {
    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          { role: 'system', content: '你是一个专业的AI面试官，擅长给出精准的面试反馈和改进建议。' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      })
    })

    if (!response.ok) {
      throw new Error('API调用失败')
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content || ''
    
    // 解析 JSON
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
    
    throw new Error('无法解析AI响应')
  } catch (error) {
    console.error('AI反馈生成失败:', error)
    return null
  }
}

// 格式化日期
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diff = now - date
  
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (minutes < 1) return '刚刚'
  if (minutes < 60) return `${minutes}分钟前`
  if (hours < 24) return `${hours}小时前`
  if (days < 7) return `${days}天前`
  
  return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
}
