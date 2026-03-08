// 复盘页面 - 历史记录 + 进步曲线
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getInterviewHistory, getProgressStats, deleteInterview, formatDate } from '../utils/interviewHistory'

export default function ReviewPage({ onBack }) {
  const [history, setHistory] = useState([])
  const [stats, setStats] = useState(null)
  const [selectedInterview, setSelectedInterview] = useState(null)

  useEffect(() => {
    setHistory(getInterviewHistory())
    setStats(getProgressStats())
  }, [])

  const handleDelete = (id) => {
    if (confirm('确定删除这条面试记录吗？')) {
      deleteInterview(id)
      setHistory(getInterviewHistory())
      setStats(getProgressStats())
    }
  }

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 80) return 'text-blue-400'
    if (score >= 70) return 'text-yellow-400'
    if (score >= 60) return 'text-orange-400'
    return 'text-red-400'
  }

  const getScoreLevel = (score) => {
    if (score >= 90) return '优秀'
    if (score >= 80) return '良好'
    if (score >= 70) return '中等'
    if (score >= 60) return '及格'
    return '待提升'
  }

  if (history.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <button onClick={onBack} className="text-slate-400 hover:text-white">← 返回</button>
            <h1 className="text-2xl font-bold text-white">面试复盘</h1>
          </div>
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-slate-400">还没有面试记录</p>
            <button onClick={onBack} className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg">
              开始第一次面试
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* 头部 */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="text-slate-400 hover:text-white">← 返回</button>
          <h1 className="text-2xl font-bold text-white">面试复盘</h1>
        </div>

        {/* 进步统计 */}
        {stats && (
          <div className="bg-slate-800/80 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">📈 进步统计</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-3xl font-bold text-white">{stats.totalInterviews}</div>
                <div className="text-slate-400 text-sm">面试次数</div>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className={`text-3xl font-bold ${getScoreColor(stats.averageScore)}`}>
                  {stats.averageScore}
                </div>
                <div className="text-slate-400 text-sm">平均分</div>
              </div>
            </div>

            {/* 趋势图 */}
            {stats.trend && stats.trend.length > 1 && (
              <div className="mb-4">
                <h3 className="text-slate-400 text-sm mb-2">得分趋势</h3>
                <div className="flex items-end gap-1 h-24">
                  {stats.trend.map((t, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-purple-500 to-indigo-500 rounded-t"
                        style={{ height: `${t.score}%` }}
                      ></div>
                      <span className="text-xs text-slate-500 mt-1">{t.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 能力雷达 */}
            {stats.improvements && (
              <div>
                <h3 className="text-slate-400 text-sm mb-2">能力分布</h3>
                <div className="space-y-2">
                  {stats.improvements.map((imp, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-slate-300 text-sm w-20">{imp.name}</span>
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                          style={{ width: `${imp.score}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${getScoreColor(imp.score)}`}>
                        {imp.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 历史记录 */}
        <h2 className="text-lg font-semibold text-white mb-4">📋 面试记录</h2>
        
        {selectedInterview ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <button 
              onClick={() => setSelectedInterview(null)}
              className="text-slate-400 hover:text-white mb-4"
            >
              ← 返回列表
            </button>
            <div className="bg-slate-800/80 rounded-xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedInterview.roleName}</h3>
                  <p className="text-slate-400">{selectedInterview.companyName} - {selectedInterview.position}</p>
                  <p className="text-slate-500 text-sm">{formatDate(selectedInterview.createdAt)}</p>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${getScoreColor(selectedInterview.result?.total)}`}>
                    {selectedInterview.result?.total || 0}
                  </div>
                  <div className="text-slate-400 text-sm">{getScoreLevel(selectedInterview.result?.total)}</div>
                </div>
              </div>

              {/* 维度评分 */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { name: '专业技能', value: selectedInterview.result?.professional },
                  { name: '项目经验', value: selectedInterview.result?.experience },
                  { name: '逻辑思维', value: selectedInterview.result?.logic },
                  { name: '沟通表达', value: selectedInterview.result?.communication },
                ].map((dim) => (
                  <div key={dim.name} className="flex justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-400">{dim.name}</span>
                    <span className={`font-semibold ${getScoreColor(dim.value)}`}>{dim.value || 0}</span>
                  </div>
                ))}
              </div>

              {/* 综合评语 */}
              {selectedInterview.result?.overallComment && (
                <div className="mb-4">
                  <h4 className="text-slate-400 text-sm mb-2">综合评语</h4>
                  <p className="text-slate-300 text-sm">{selectedInterview.result.overallComment}</p>
                </div>
              )}

              <button 
                onClick={() => handleDelete(selectedInterview.id)}
                className="w-full py-2 text-red-400 hover:text-red-300"
              >
                删除记录
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {history.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedInterview(item)}
                className="bg-slate-800/80 rounded-xl p-4 cursor-pointer hover:bg-slate-700/50"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-white">{item.roleName}</div>
                    <div className="text-slate-400 text-sm">{item.companyName} - {item.position}</div>
                    <div className="text-slate-500 text-xs mt-1">{formatDate(item.createdAt)}</div>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(item.result?.total)}`}>
                    {item.result?.total || 0}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
