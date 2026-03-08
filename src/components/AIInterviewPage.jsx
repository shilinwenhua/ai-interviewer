// AI模拟面试页面 - 整合硅基流动API
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// 面试问题库
const questionBank = {
  pm: [
    { text: "请介绍一下你最有代表性的产品项目？", category: "自我介绍", difficulty: "简单" },
    { text: "你如何定义产品需求优先级？", category: "需求分析", difficulty: "中等" },
    { text: "如果用户反馈一个功能不好用，你会怎么处理？", category: "用户思维", difficulty: "中等" },
    { text: "请描述一次你与开发团队产生分歧的经历，如何解决的？", category: "协作能力", difficulty: "较难" },
    { text: "你如何衡量一个功能的成功？", category: "数据思维", difficulty: "较难" },
  ],
  frontend: [
    { text: "请介绍一下你的前端项目经验和主要技术栈？", category: "自我介绍", difficulty: "简单" },
    { text: "Vue3 的 Composition API 和 Options API 有什么区别？", category: "框架原理", difficulty: "中等" },
    { text: "如何优化网页首屏加载性能？", category: "性能优化", difficulty: "中等" },
    { text: "解释一下 CSS 盒模型和 BFC 的概念？", category: "CSS基础", difficulty: "较难" },
    { text: "手写一个防抖函数？", category: "Coding", difficulty: "较难" },
  ],
  backend: [
    { text: "请介绍一下你的后端项目经验和主要技术栈？", category: "自我介绍", difficulty: "简单" },
    { text: "MySQL 和 MongoDB 的区别是什么？什么场景下选择 MongoDB？", category: "数据库", difficulty: "中等" },
    { text: "解释一下 RESTful API 的设计原则？", category: "API设计", difficulty: "中等" },
    { text: "如何保证接口的幂等性？", category: "架构设计", difficulty: "较难" },
    { text: "请描述一下缓存穿透、击穿、雪崩以及解决方案？", category: "系统设计", difficulty: "较难" },
  ],
  运营: [
    { text: "请介绍一下你的运营经验和主要负责的业务？", category: "自我介绍", difficulty: "简单" },
    { text: "如何提升用户活跃度和留存率？", category: "用户增长", difficulty: "中等" },
    { text: "请举例说明一次成功的活动策划？", category: "活动运营", difficulty: "中等" },
    { text: "如果数据下滑，你会如何分析原因？", category: "数据分析", difficulty: "较难" },
    { text: "如何建立用户分层运营体系？", category: "精细化运营", difficulty: "较难" },
  ],
}

const roles = [
  { id: 'pm', name: '产品经理', desc: '产品设计、需求分析', icon: '📱' },
  { id: 'frontend', name: '前端工程师', desc: 'Vue/React/工程化', icon: '💻' },
  { id: 'backend', name: '后端工程师', desc: 'Go/Java/数据库', icon: '🛠' },
  { id: '运营', name: '运营专员', desc: '数据分析、用户增长', icon: '📈' },
]

// 模拟AI回复（API失败时使用）
const mockAIResponse = (question, answer, difficulty) => {
  const scores = { "简单": [70, 95], "中等": [60, 90], "较难": [50, 85] }
  const range = scores[difficulty] || [60, 90]
  const baseScore = Math.floor(Math.random() * (range[1] - range[0]) + range[0])
  
  return {
    score: baseScore,
    strengths: "回答结构清晰，能够抓住问题的核心要点，语言表达流畅。",
    improvements: "可以结合具体案例来支撑观点，增加回答的说服力。建议适当补充数据和结果支撑。",
    suggestion: "建议按照'背景-行动-结果'的STAR法则来组织回答，先概括核心观点，再展开具体说明。",
  }
}

// 硅基流动 API Key
const API_KEY = 'sk-eyrwfzshynueiskbjwkccrriscisutacbdkjwmpagbhlqcee'
const MODEL_NAME = 'Qwen/Qwen2.5-72B-Instruct'

export default function AIInterviewPage({ onBack }) {
  const [step, setStep] = useState('select') // select, interview, result
  const [selectedRole, setSelectedRole] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [currentFeedback, setCurrentFeedback] = useState(null)
  const [loadingFeedback, setLoadingFeedback] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  
  const answers = {}
  const feedbacks = {}

  const questions = selectedRole ? questionBank[selectedRole] : []
  const currentQuestion = questions[currentIndex] || {}
  const hasCurrentFeedback = !!feedbacks[currentIndex]

  // 调用硅基流动 API
  const callSiliconFlowAPI = async (question, answer, role) => {
    const prompt = `你是一个专业的AI面试官。请根据以下信息给出面试点评：

面试问题：${question}
求职方向：${role}
求职者回答：${answer}

请以JSON格式返回点评，要求包含以下字段：
- score: 0-100的评分数字
- strengths: 回答的优点（50字以内）
- improvements: 改进建议（50字以内）
- suggestion: 参考回答建议（80字以内）

只返回JSON，不要其他内容。`

    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 1024
      })
    })

    if (!response.ok) {
      throw new Error(`API调用失败: ${response.status}`)
    }

    const data = await response.json()
    const content = data.choices[0].message.content
    
    try {
      const jsonStr = content.replace(/```json|```/g, '').trim()
      return JSON.parse(jsonStr)
    } catch (e) {
      console.error('JSON解析失败，原始内容:', content)
      return mockAIResponse(question, answer, '中等')
    }
  }

  const startInterview = () => {
    if (!selectedRole) return
    setStep('interview')
    setCurrentIndex(0)
    setCurrentAnswer('')
    setCurrentFeedback(null)
  }

  const submitAnswer = async () => {
    if (!currentAnswer.trim() || submitting) return
    
    setSubmitting(true)
    setLoadingFeedback(true)
    setCurrentFeedback(null)

    answers[currentIndex] = currentAnswer

    try {
      const roleName = roles.find(r => r.id === selectedRole)?.name || ''
      const feedback = await callSiliconFlowAPI(
        currentQuestion.text,
        currentAnswer,
        roleName
      )
      feedbacks[currentIndex] = feedback
      setCurrentFeedback(feedback)
    } catch (error) {
      console.error('API调用失败:', error)
      const feedback = mockAIResponse(currentQuestion.text, currentAnswer, currentQuestion.difficulty)
      feedbacks[currentIndex] = feedback
      setCurrentFeedback(feedback)
    }
    
    setLoadingFeedback(false)
    setSubmitting(false)
  }

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setCurrentAnswer(answers[currentIndex + 1] || '')
      setCurrentFeedback(feedbacks[currentIndex + 1] || null)
    } else {
      // 保存面试记录
      saveInterviewRecord()
      setStep('result')
    }
  }

  // 保存面试记录到 localStorage
  const saveInterviewRecord = () => {
    const record = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('zh-CN'),
      role: selectedRole,
      roleName: roles.find(r => r.id === selectedRole)?.name || '',
      questions: questions.map((q, idx) => ({
        question: q.text,
        questionCategory: q.category,
        answer: answers[idx] || '',
        feedback: feedbacks[idx] || null
      })),
      averageScore: getAverageScore(),
      duration: Math.ceil((Date.now() - startTime) / 60000) || 1
    }
    
    // 获取历史记录
    const history = JSON.parse(localStorage.getItem('interview_history') || '[]')
    history.push(record)
    localStorage.setItem('interview_history', JSON.stringify(history))
  }

  // 记录开始时间
  const [startTime] = useState(Date.now())

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setCurrentAnswer(answers[currentIndex - 1] || '')
      setCurrentFeedback(feedbacks[currentIndex - 1] || null)
    }
  }

  const getAverageScore = () => {
    const scores = Object.values(feedbacks).map(f => f.score)
    if (scores.length === 0) return 0
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  }

  const restart = () => {
    setStep('select')
    setSelectedRole('')
    setCurrentIndex(0)
    setCurrentAnswer('')
    setCurrentFeedback(null)
  }

  // Step 1: 选择面试方向
  if (step === 'select') {
    return (
      <div className="min-h-screen bg-[#0A0A0F] text-white">
        <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#0A0A0F]/80 border-b border-white/5">
          <div className="max-w-2xl mx-auto px-4 py-4">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              返回
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">🤖</div>
              <div>
                <h1 className="font-bold text-lg">AI模拟面试</h1>
                <p className="text-xs text-slate-500">AI实时点评，让面试更简单</p>
              </div>
            </div>
          </div>
        </header>
        
        <main className="max-w-2xl mx-auto px-4 py-6">
          <div className="mb-6">
            <h2 className="text-sm font-medium text-slate-400 mb-3">选择面试方向</h2>
            <div className="grid grid-cols-2 gap-3">
              {roles.map(role => (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedRole === role.id 
                      ? 'bg-indigo-500/20 border-indigo-500' 
                      : 'bg-white/5 border-white/10 hover:border-indigo-500/30'
                  }`}
                >
                  <div className="text-2xl mb-2">{role.icon}</div>
                  <div className="font-medium">{role.name}</div>
                  <div className="text-xs text-slate-500">{role.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={startInterview}
            disabled={!selectedRole}
            className={`w-full py-3 rounded-xl font-medium transition-all ${
              selectedRole 
                ? 'bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90' 
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            开始面试 →
          </button>
        </main>
      </div>
    )
  }

  // Step 2: 面试中
  if (step === 'interview') {
    return (
      <div className="min-h-screen bg-[#0A0A0F] text-white">
        <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#0A0A0F]/80 border-b border-white/5">
          <div className="max-w-2xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <button onClick={() => setStep('select')} className="text-slate-400 hover:text-white text-sm">← 重新开始</button>
              <span className="text-sm text-slate-500">问题 {currentIndex + 1} / {questions.length}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </header>
        
        <main className="max-w-2xl mx-auto px-4 py-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded-full text-xs">{currentQuestion.category}</span>
              <span className="px-2 py-0.5 bg-slate-700 text-slate-300 rounded-full text-xs">{currentQuestion.difficulty}</span>
            </div>
            <h2 className="text-lg font-medium">{currentQuestion.text}</h2>
          </div>
          
          <div className="mb-5">
            <label className="text-sm text-slate-400 mb-2 block">请输入你的回答</label>
            <textarea
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="在这里输入你的回答..."
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 min-h-[120px]"
            />
          </div>
          
          <button
            onClick={submitAnswer}
            disabled={!currentAnswer.trim() || submitting}
            className={`w-full py-3 rounded-xl font-medium transition-all mb-5 ${
              currentAnswer.trim() && !submitting
                ? 'bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90' 
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            {loadingFeedback ? 'AI分析中...' : hasCurrentFeedback ? '重新获取点评' : '提交回答'}
          </button>
          
          {/* AI 点评显示 */}
          {currentFeedback && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/30 rounded-2xl p-5 mb-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">✨</span>
                <span className="font-medium text-indigo-400">AI 点评</span>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-slate-400">得分</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-green-500"
                    style={{ width: `${currentFeedback.score}%` }}
                  />
                </div>
                <span className="text-lg font-bold text-indigo-400">{currentFeedback.score}</span>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm font-medium text-slate-400 mb-1">💡 优点</h4>
                <p className="text-sm">{currentFeedback.strengths}</p>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm font-medium text-slate-400 mb-1">🎯 改进空间</h4>
                <p className="text-sm">{currentFeedback.improvements}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-1">✨ 参考回答</h4>
                <p className="text-sm">{currentFeedback.suggestion}</p>
              </div>
            </motion.div>
          )}
          
          {loadingFeedback && (
            <div className="flex items-center justify-center gap-3 py-8 text-slate-400">
              <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <span>AI 正在分析你的回答...</span>
            </div>
          )}
          
          {/* 导航按钮 */}
          {hasCurrentFeedback && (
            <div className="flex gap-3">
              {currentIndex > 0 && (
                <button onClick={prevQuestion} className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10">
                  ← 上一题
                </button>
              )}
              <button 
                onClick={nextQuestion} 
                className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl font-medium"
              >
                {currentIndex === questions.length - 1 ? '完成面试 🎉' : '下一题 →'}
              </button>
            </div>
          )}
        </main>
      </div>
    )
  }

  // Step 3: 面试结果
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#0A0A0F]/80 border-b border-white/5">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎉</span>
            <div>
              <h1 className="font-bold text-lg">面试完成</h1>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <div className="text-6xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
            {getAverageScore()}
          </div>
          <div className="text-slate-400">面试综合评分</div>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-5">
          <h3 className="font-medium mb-4">📊 各题目得分</h3>
          {questions.map((q, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <div className="flex-1 pr-4">
                <div className="text-sm truncate">{q.text}</div>
                <div className="text-xs text-slate-500">{q.category}</div>
              </div>
              <div className="text-indigo-400 font-medium">{feedbacks[idx]?.score || '-'}</div>
            </div>
          ))}
        </div>
        
        <button
          onClick={restart}
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl font-medium"
        >
          重新开始面试
        </button>
      </main>
    </div>
  )
}
