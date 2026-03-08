// 答题页面 - 深空金风格
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getQuestions, levelNames } from '../data/realQuestions'
import { roleNames } from '../data/questionBank'

const mockFeedback = (question, answer, difficulty) => {
  const scores = { "L1": [70, 95], "L2": [60, 90], "L3": [50, 85], "L4": [40, 80] }
  const range = scores[difficulty] || [60, 90]
  const baseScore = Math.floor(Math.random() * (range[1] - range[0]) + range[0])
  return {
    score: baseScore,
    strengths: "回答结构清晰，能够抓住问题的核心要点。",
    improvements: "可以结合具体案例来支撑观点，增加说服力。",
    suggestion: "建议按照'背景-行动-结果'的STAR法则来组织回答。",
  }
}

const getDifficultyColor = (diff) => {
  switch(diff) {
    case 'L1': return { bg: 'rgba(34,197,94,0.1)', color: '#22c55e' }
    case 'L2': return { bg: 'rgba(59,130,246,0.1)', color: '#3b82f6' }
    case 'L3': return { bg: 'rgba(234,179,8,0.1)', color: '#eab308' }
    case 'L4': return { bg: 'rgba(239,68,68,0.1)', color: '#ef4444' }
    default: return { bg: 'rgba(107,114,128,0.1)', color: '#6b7280' }
  }
}

const getDifficultyName = (diff) => {
  switch(diff) { case 'L1': return '入门'; case 'L2': return '初级'; case 'L3': return '中级'; case 'L4': return '高级'; default: return diff }
}

export default function QuestionPage({ role, level, company, position, companyInfo, onAnswerChange, onFinish }) {
  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    const selected = getQuestions(role, company, level, 10)
    setQuestions(selected)
  }, [role, level, company])
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [loadingFeedback, setLoadingFeedback] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const currentQuestion = questions[currentIndex] || {}
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0
  const isFirst = currentIndex === 0
  const isLast = currentIndex === questions.length - 1
  const diffStyle = getDifficultyColor(currentQuestion.difficulty)

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value)
    onAnswerChange(currentIndex, e.target.value, currentQuestion)
  }

  const getAIFeedback = async () => {
    setLoadingFeedback(true)
    setShowFeedback(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    const result = mockFeedback(currentQuestion.text, answer, currentQuestion.difficulty)
    setFeedback(result)
    setLoadingFeedback(false)
  }

  const handleNext = () => {
    if (isLast) { onFinish() } else {
      setCurrentIndex(currentIndex + 1)
      setAnswer('')
      setFeedback(null)
      setShowFeedback(false)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setAnswer('')
      setFeedback(null)
      setShowFeedback(false)
    }
  }

  if (questions.length === 0) {
    return (
      <div style={{ background: '#0a0a0c', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#666' }}>加载题库中...</div>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0a0c', minHeight: '100vh', padding: '24px', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* 顶部信息 */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#d4af37', marginBottom: '4px' }}>
                面试岗位：{roleNames[role]}
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>
                {companyInfo?.name || company} - {position?.title}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                <span style={{ fontSize: '11px', background: 'rgba(212,175,55,0.15)', color: '#d4af37', padding: '2px 8px' }}>
                  {levelNames[level]}
                </span>
                <span style={{ fontSize: '11px', color: '#666' }}>
                  来源：{currentQuestion.company || '通用'}
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#d4af37' }}>{currentIndex + 1}/{questions.length}</div>
              <div style={{ fontSize: '11px', color: '#666' }}>进度</div>
            </div>
          </div>
          <div style={{ height: '4px', background: '#2a2a2e', borderRadius: '2px', overflow: 'hidden' }}>
            <motion.div style={{ height: '100%', background: 'linear-gradient(90deg, #d4af37, #f4d03f)' }} initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* 题目卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', color: '#888', borderRadius: '4px' }}>
                {currentQuestion.category || '通用'}
              </span>
              <span style={{ fontSize: '12px', padding: '4px 12px', background: diffStyle.bg, color: diffStyle.color, borderRadius: '4px' }}>
                {getDifficultyName(currentQuestion.difficulty)}
              </span>
              {currentQuestion.company && currentQuestion.company !== '通用' && (
                <span style={{ fontSize: '12px', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', color: '#888', borderRadius: '4px' }}>
                  {currentQuestion.company}
                </span>
              )}
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#fff', marginBottom: '24px', lineHeight: '1.6' }}>
              {currentQuestion.text}
            </h2>

            <textarea
              value={answer}
              onChange={handleAnswerChange}
              placeholder="请输入你的回答..."
              style={{
                width: '100%',
                height: '180px',
                padding: '16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid #2a2a2e',
                fontSize: '14px',
                lineHeight: '1.8',
                resize: 'none',
                outline: 'none',
                color: '#e5e5e5',
                borderRadius: '8px',
                fontFamily: "'DM Sans', sans-serif"
              }}
            />

            <div style={{ marginTop: '20px' }}>
              <button
                onClick={getAIFeedback}
                disabled={!answer || loadingFeedback}
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: answer && !loadingFeedback ? 'pointer' : 'not-allowed',
                  background: answer && !loadingFeedback ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : '#2a2a2e',
                  color: answer && !loadingFeedback ? '#0a0a0c' : '#555',
                  borderRadius: '8px'
                }}
              >
                {loadingFeedback ? '🤖 AI 点评中...' : '🤖 AI 点评'}
              </button>

              <AnimatePresence>
                {showFeedback && feedback && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ marginTop: '16px', padding: '16px', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '8px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontWeight: '600', color: '#d4af37' }}>🤖 AI 点评</span>
                      <span style={{ fontSize: '24px', fontWeight: '700', color: '#d4af37' }}>{feedback.score}分</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', lineHeight: '1.6', color: '#888' }}>
                      <div><span style={{ color: '#22c55e' }}>✓ 优点：</span> {feedback.strengths}</div>
                      <div><span style={{ color: '#eab308' }}>✧ 改进：</span> {feedback.improvements}</div>
                      <div><span style={{ color: '#3b82f6' }}>💡 建议：</span> {feedback.suggestion}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 底部按钮 */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={handlePrev}
            disabled={isFirst}
            style={{
              flex: '1',
              padding: '14px',
              fontSize: '15px',
              fontWeight: '600',
              border: 'none',
              background: isFirst ? '#2a2a2e' : 'rgba(255,255,255,0.05)',
              color: isFirst ? '#555' : '#888',
              cursor: isFirst ? 'not-allowed' : 'pointer',
              borderRadius: '10px'
            }}
          >
            上一题
          </button>
          <button
            onClick={handleNext}
            disabled={!answer}
            style={{
              flex: '1',
              padding: '14px',
              fontSize: '15px',
              fontWeight: '600',
              border: 'none',
              background: answer ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : '#2a2a2e',
              color: answer ? '#0a0a0c' : '#555',
              cursor: answer ? 'pointer' : 'not-allowed',
              borderRadius: '10px'
            }}
          >
            {isLast ? '完成面试' : '下一题'}
          </button>
        </div>
      </div>
    </div>
  )
}
