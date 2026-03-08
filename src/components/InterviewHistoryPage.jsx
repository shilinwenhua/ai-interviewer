// 历史面试记录页面
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getInterviewRecords, deleteInterviewRecord, formatDate } from '../utils/interview'

export default function InterviewHistoryPage({ onBack }) {
  const [records, setRecords] = useState([])
  const [selectedRecord, setSelectedRecord] = useState(null)

  useEffect(() => {
    setRecords(getInterviewRecords())
  }, [])

  const handleDelete = (id, e) => {
    e.stopPropagation()
    if (confirm('确定删除这条面试记录吗？')) {
      deleteInterviewRecord(id)
      setRecords(getInterviewRecords())
    }
  }

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 80) return 'text-blue-400'
    if (score >= 70) return 'text-yellow-400'
    if (score >= 60) return 'text-orange-400'
    return 'text-red-400'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-3xl mx-auto">
        {/* 头部 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="text-slate-400 hover:text-white"
            >
              ← 返回
            </button>
            <h1 className="text-2xl font-bold text-white">面试记录</h1>
          </div>
          <div className="text-slate-400">
            {records.length} 次面试
          </div>
        </div>

        {/* 记录列表 */}
        {records.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-slate-400 mb-4">还没有面试记录</p>
            <button
              onClick={onBack}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg"
            >
              开始第一次面试
            </button>
          </div>
        ) : selectedRecord ? (
          // 详细记录
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => setSelectedRecord(null)}
              className="text-slate-400 hover:text-white mb-4"
            >
              ← 返回列表
            </button>

            <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    {selectedRecord.roleName}
                  </h2>
                  <p className="text-slate-400">
                    {selectedRecord.companyName} - {selectedRecord.position}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    {formatDate(selectedRecord.createdAt)}
                  </p>
                </div>
                <div className={`text-4xl font-bold ${getScoreColor(selectedRecord.result?.total)}`}>
                  {selectedRecord.result?.total || 0}
                </div>
              </div>

              {/* 维度评分 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { name: '专业技能', value: selectedRecord.result?.professional },
                  { name: '项目经验', value: selectedRecord.result?.experience },
                  { name: '逻辑思维', value: selectedRecord.result?.logic },
                  { name: '沟通表达', value: selectedRecord.result?.communication },
                ].map((dim) => (
                  <div key={dim.name} className="flex justify-between">
                    <span className="text-slate-400">{dim.name}</span>
                    <span className={`font-semibold ${getScoreColor(dim.value)}`}>
                      {dim.value || 0}
                    </span>
                  </div>
                ))}
              </div>

              {/* 综合评语 */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-400 mb-2">综合评语</h3>
                <p className="text-slate-300 text-sm">{selectedRecord.result?.overallComment}</p>
              </div>

              {/* 改进建议 */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 mb-2">改进建议</h3>
                <ul className="space-y-1">
                  {(selectedRecord.result?.improvements || []).map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-purple-400">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => handleDelete(selectedRecord.id, { stopPropagation: () => {} })}
              className="w-full py-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
            >
              删除记录
            </button>
          </motion.div>
        ) : (
          // 记录列表
          <div className="space-y-4">
            {records.map((record, index) => (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedRecord(record)}
                className="bg-slate-800/80 backdrop-blur rounded-xl p-4 cursor-pointer hover:bg-slate-700/50 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-white">{record.roleName}</div>
                    <div className="text-slate-400 text-sm">
                      {record.companyName} - {record.position}
                    </div>
                    <div className="text-slate-500 text-xs mt-1">
                      {formatDate(record.createdAt)}
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(record.result?.total)}`}>
                    {record.result?.total || 0}
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
