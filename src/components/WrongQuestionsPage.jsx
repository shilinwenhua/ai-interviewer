// 错题本页面
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getWrongQuestions, removeWrongQuestion, clearWrongQuestions } from '../utils/wrongQuestions'

export default function WrongQuestionsPage({ onBack }) {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  useEffect(() => {
    setQuestions(getWrongQuestions())
  }, [])

  const handleRemove = (id) => {
    removeWrongQuestion(id)
    setQuestions(getWrongQuestions())
    setSelectedQuestion(null)
  }

  const handleClearAll = () => {
    if (confirm('确定要清空所有错题吗？')) {
      clearWrongQuestions()
      setQuestions([])
    }
  }

  const getDifficultyColor = (diff) => {
    switch(diff) {
      case 'L1': return 'bg-green-500/30 text-green-300'
      case 'L2': return 'bg-blue-500/30 text-blue-300'
      case 'L3': return 'bg-yellow-500/30 text-yellow-300'
      case 'L4': return 'bg-red-500/30 text-red-300'
      default: return 'bg-gray-500/30 text-gray-300'
    }
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <button onClick={onBack} className="text-slate-400 hover:text-white">← 返回</button>
            <h1 className="text-2xl font-bold text-white">错题本</h1>
          </div>
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-slate-400">还没有错题</p>
            <p className="text-slate-500 text-sm mt-2">答错的题目会自动收录到这里</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* 头部 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-slate-400 hover:text-white">← 返回</button>
            <h1 className="text-2xl font-bold text-white">错题本</h1>
          </div>
          <button onClick={handleClearAll} className="text-red-400 text-sm hover:text-red-300">
            清空全部
          </button>
        </div>

        {/* 错题列表 */}
        {selectedQuestion ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <button 
              onClick={() => setSelectedQuestion(null)}
              className="text-slate-400 hover:text-white mb-4"
            >
              ← 返回列表
            </button>
            <div className="bg-slate-800/80 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/30 text-purple-300 rounded text-sm">
                  {selectedQuestion.question.category}
                </span>
                <span className={`px-2 py-1 rounded text-sm ${getDifficultyColor(selectedQuestion.question.difficulty)}`}>
                  {selectedQuestion.question.difficulty}
                </span>
                <span className="px-2 py-1 bg-blue-500/30 text-blue-300 rounded text-sm">
                  {selectedQuestion.question.company}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-4">{selectedQuestion.question.text}</h3>
              
              <div className="mb-4">
                <h4 className="text-slate-400 text-sm mb-2">你的回答：</h4>
                <p className="text-slate-300">{selectedQuestion.answer}</p>
              </div>
              
              {selectedQuestion.feedback && (
                <div className="mb-4 p-4 bg-indigo-500/20 rounded-lg">
                  <h4 className="text-indigo-400 text-sm mb-2">AI 点评：</h4>
                  <p className="text-slate-300 text-sm">{selectedQuestion.feedback.suggestion}</p>
                </div>
              )}
              
              <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                <span className="text-slate-500 text-sm">错误次数：{selectedQuestion.wrongCount}</span>
                <button 
                  onClick={() => handleRemove(selectedQuestion.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                >
                  已掌握 ✓
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {questions.map((q, index) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedQuestion(q)}
                className="bg-slate-800/80 rounded-xl p-4 cursor-pointer hover:bg-slate-700/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-purple-500/30 text-purple-300 rounded text-xs">
                    {q.question.category}
                  </span>
                  <span className="text-red-400 text-xs">❌ {q.wrongCount}次</span>
                </div>
                <p className="text-white line-clamp-2">{q.question.text}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
