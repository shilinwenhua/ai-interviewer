// 面试记录页面 - 查看历史面试
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AbilityRadar from './AbilityRadar'

export default function InterviewHistory({ onBack }) {
  const [history, setHistory] = useState([])
  const [selectedInterview, setSelectedInterview] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem('interview_history')
    if (data) {
      setHistory(JSON.parse(data))
    }
  }, [])

  // 按日期排序（最新的在前面）
  const sortedHistory = [...history].sort((a, b) => new Date(b.date) - new Date(a.date))

  // 计算能力维度数据
  const getAbilityData = () => {
    if (history.length === 0) return null
    
    const abilityScores = {}
    const abilityCounts = {}
    
    history.forEach(interview => {
      interview.questions.forEach(q => {
        const category = q.questionCategory || '其他'
        if (!abilityScores[category]) {
          abilityScores[category] = 0
          abilityCounts[category] = 0
        }
        abilityScores[category] += q.feedback?.score || 0
        abilityCounts[category]++
      })
    })
    
    const result = {}
    Object.keys(abilityScores).forEach(key => {
      result[key] = Math.round(abilityScores[key] / abilityCounts[key])
    })
    return result
  }

  const abilityData = getAbilityData()

  // 查看详情
  if (selectedInterview) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] text-white">
        <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#0A0A0F]/80 border-b border-white/5">
          <div className="max-w-2xl mx-auto px-4 py-4">
            <button onClick={() => setSelectedInterview(null)} className="flex items-center gap-2 text-slate-400 hover:text-white mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              返回列表
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">📋</div>
              <div>
                <h1 className="font-bold text-lg">面试详情</h1>
                <p className="text-xs text-slate-500">{selectedInterview.date} · {selectedInterview.roleName}</p>
              </div>
            </div>
          </div>
        </header>
        
        <main className="max-w-2xl mx-auto px-4 py-6">
          {/* 总分 */}
          <div className="text-center mb-6">
            <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {selectedInterview.averageScore}
            </div>
            <div className="text-slate-400 text-sm">综合评分</div>
          </div>
          
          {/* 各题详情 */}
          <div className="space-y-4">
            {selectedInterview.questions.map((q, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-sm text-slate-400 mb-1">问题 {idx + 1}</div>
                    <div className="font-medium">{q.question}</div>
                  </div>
                  <div className="text-xl font-bold text-indigo-400">{q.feedback?.score || '-'}</div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-white/5">
                  <div className="text-xs text-slate-500 mb-1">我的回答</div>
                  <div className="text-sm text-slate-300">{q.answer}</div>
                </div>
                
                {q.feedback && (
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span>✨</span>
                      <span className="text-sm text-indigo-400">AI点评</span>
                    </div>
                    <div className="text-xs space-y-1">
                      <div><span className="text-slate-500">优点：</span>{q.feedback.strengths}</div>
                      <div><span className="text-slate-500">改进：</span>{q.feedback.improvements}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }

  // 列表页
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#0A0A0F]/80 border-b border-white/5">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            返回
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">📋</div>
            <div>
              <h1 className="font-bold text-lg">面试记录</h1>
              <p className="text-xs text-slate-500">{history.length} 次面试</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-2xl mx-auto px-4 py-6">
        {history.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📝</div>
            <div className="text-slate-400 mb-2">暂无面试记录</div>
            <div className="text-sm text-slate-500">完成一次AI面试后会自动保存</div>
          </div>
        ) : (
          <>
            {/* 能力雷达图 */}
            {abilityData && Object.keys(abilityData).length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-medium text-slate-400 mb-3">📊 能力雷达</h2>
                <AbilityRadar data={abilityData} />
              </div>
            )}
            
            {/* 面试列表 */}
            <h2 className="text-sm font-medium text-slate-400 mb-3">📝 历史面试</h2>
            <div className="space-y-3">
              {sortedHistory.map((interview, idx) => (
                <motion.div
                  key={interview.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedInterview(interview)}
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">{interview.roleName}</div>
                    <div className="text-xl font-bold text-indigo-400">{interview.averageScore}</div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>📅 {interview.date}</span>
                    <span>❓ {interview.questions.length} 题</span>
                    <span>⏱️ {interview.duration || '-'} 分钟</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
