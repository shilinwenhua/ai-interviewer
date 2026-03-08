// 错题本工具
const WRONG_QUESTIONS_KEY = 'ai-interviewer-wrong-questions'

// 获取错题本
export const getWrongQuestions = () => {
  const data = localStorage.getItem(WRONG_QUESTIONS_KEY)
  return data ? JSON.parse(data) : []
}

// 添加错题
export const addWrongQuestion = (question, answer, feedback) => {
  const wrongQuestions = getWrongQuestions()
  
  // 检查是否已存在
  const exists = wrongQuestions.find(q => q.text === question.text && q.company === question.company)
  if (exists) return
  
  const newWrong = {
    id: Date.now().toString(),
    question: question,
    answer: answer,
    feedback: feedback,
    wrongCount: 1,
    lastWrongAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  }
  
  wrongQuestions.unshift(newWrong)
  localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify(wrongQuestions))
}

// 更新错题（答对了）
export const removeWrongQuestion = (id) => {
  const wrongQuestions = getWrongQuestions()
  const filtered = wrongQuestions.filter(q => q.id !== id)
  localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify(filtered))
}

// 增加错题次数
export const incrementWrongCount = (id) => {
  const wrongQuestions = getWrongQuestions()
  const updated = wrongQuestions.map(q => {
    if (q.id === id) {
      return { ...q, wrongCount: q.wrongCount + 1, lastWrongAt: new Date().toISOString() }
    }
    return q
  })
  localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify(updated))
}

// 清除所有错题
export const clearWrongQuestions = () => {
  localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify([]))
}

// 获取错题数量
export const getWrongQuestionsCount = () => {
  return getWrongQuestions().length
}
