// 面试结果 - 深空金风格
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { roleNames } from '../data/questionBank'
import { generateAIFeedback, saveInterviewRecord, getCompanyName } from '../utils/interview'

const generateMockResult = (role, answers) => {
  const answeredCount = answers.filter(a => a.answer && a.answer.length > 0).length
  const baseScore = Math.floor(60 + (answeredCount / 10) * 30)
  const randomOffset = () => Math.floor(Math.random() * 10) - 5
  const professional = Math.min(100, Math.max(0, baseScore + randomOffset()))
  const experience = Math.min(100, Math.max(0, baseScore + randomOffset()))
  const logic = Math.min(100, Math.max(0, baseScore + randomOffset()))
  const communication = Math.min(100, Math.max(0, baseScore + randomOffset()))
  const total = Math.floor((professional + experience + logic + communication) / 4)

  let overallComment = ''
  if (total >= 90) overallComment = '恭喜！你的表现非常出色。你对岗位的理解深入，回答问题逻辑清晰，展现了扎实的专业能力和丰富的项目经验。'
  else if (total >= 80) overallComment = '表现良好！你具备岗位所需的基本能力和经验，建议在项目经验的描述上更加具体，多用数据和结果支撑观点。'
  else if (total >= 70) overallComment = '整体表现中等。你对岗位有一定了解，但回答的深度和广度还有提升空间。'
  else if (total >= 60) overallComment = '刚刚及格。你具备基础的岗位认知，但回答时会显得经验不足。'
  else overallComment = '需要更多准备。你对岗位的理解还不够深入，建议先积累相关经验。'

  return { professional, experience, logic, communication, total, overallComment, improvements: ['建议加强行业知识学习', '项目经验描述更具体', '注意表达逻辑', '提前准备常见问题'], isMock: true }
}

export default function InterviewResult({ role, company, position, companyInfo, answers, onRestart, onBack }) {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState(null)

  useEffect(() => {
    const generateFeedback = async () => {
      setLoading(true)
      try {
        const aiResult = await generateAIFeedback(role, company, position, answers)
        if (aiResult) {
          setResult({ ...aiResult, isMock: false })
          saveInterviewRecord({ role, company, position: position?.title || '', companyName: companyInfo?.name || getCompanyName(company), roleName: roleNames[role], answers: answers.map(a => ({ index: a.index, answer: a.answer })), result: aiResult })
        } else {
          const mockResult = generateMockResult(role, answers)
          setResult(mockResult)
          saveInterviewRecord({ role, company, position: position?.title || '', companyName: companyInfo?.name || getCompanyName(company), roleName: roleNames[role], answers: answers.map(a => ({ index: a.index, answer: a.answer })), result: mockResult })
        }
      } catch (err) {
        const mockResult = generateMockResult(role, answers)
        setResult(mockResult)
        saveInterviewRecord({ role, company, position: position?.title || '', companyName: companyInfo?.name || getCompanyName(company), roleName: roleNames[role], answers: answers.map(a => ({ index: a.index, answer: a.answer })), result: mockResult })
      }
      setLoading(false)
    }
    generateFeedback()
  }, [role, company, position, answers, companyInfo])

  if (loading) {
    return (
      <div style={{ background: '#0a0a0c', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} style={{ fontSize: '48px', marginBottom: '16px' }}>🤖</motion.div>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: '#fff' }}>AI 面试官正在评分...</h2>
          <p style={{ color: '#666', fontSize: '14px' }}>根据你的回答生成综合反馈</p>
        </div>
      </div>
    )
  }

  const dimensions = [
    { name: '专业技能', value: result?.professional || 0 },
    { name: '项目经验', value: result?.experience || 0 },
    { name: '逻辑思维', value: result?.logic || 0 },
    { name: '沟通表达', value: result?.communication || 0 },
  ]

  return (
    <div style={{ background: '#0a0a0c', minHeight: '100vh', padding: '24px', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ fontSize: '64px', marginBottom: '16px' }}>🎉</motion.div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>面试完成！</h1>
          <p style={{ color: '#888', fontSize: '14px' }}>{companyInfo?.name || company} - {position?.title}</p>
          {result?.isMock && <p style={{ color: '#d4af37', fontSize: '12px', marginTop: '8px' }}>⚠️ 使用模拟评分</p>}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'linear-gradient(135deg, #1a1a1e, #0a0a0c)', border: '1px solid #2a2a2e', padding: '32px', textAlign: 'center', marginBottom: '24px', borderRadius: '12px' }}>
          <div style={{ color: '#888', fontSize: '14px', marginBottom: '8px' }}>综合评分</div>
          <div style={{ fontSize: '72px', fontWeight: '700', background: 'linear-gradient(135deg, #d4af37, #f4d03f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{result?.total || 0}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginTop: '8px' }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ fontSize: '24px', color: i < Math.ceil((result?.total || 0) / 20) ? '#d4af37' : '#2a2a2e' }}>★</span>
            ))}
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '24px' }}>
          {dimensions.map((dim, index) => (
            <motion.div key={dim.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', padding: '16px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#888' }}>{dim.name}</span>
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#d4af37' }}>{dim.value}</span>
              </div>
              <div style={{ height: '4px', background: '#2a2a2e', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div style={{ height: '100%', background: 'linear-gradient(90deg, #d4af37, #f4d03f)' }} initial={{ width: 0 }} animate={{ width: `${dim.value}%` }} transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', padding: '24px', marginBottom: '24px', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>📝 综合评语</h3>
          <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.8' }}>{result?.overallComment || '暂无评语'}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', padding: '24px', marginBottom: '24px', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>💡 改进建议</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {(result?.improvements || []).map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#888' }}>
                <span style={{ color: '#d4af37', marginTop: '2px' }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onBack} style={{ flex: '1', padding: '14px', fontSize: '15px', fontWeight: '600', background: '#2a2a2e', border: 'none', color: '#888', cursor: 'pointer', borderRadius: '10px' }}>
            返回首页
          </motion.button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onRestart} style={{ flex: '1', padding: '14px', fontSize: '15px', fontWeight: '600', background: 'linear-gradient(135deg, #d4af37, #f4d03f)', border: 'none', color: '#0a0a0c', cursor: 'pointer', borderRadius: '10px' }}>
            🔄 重新面试
          </motion.button>
        </div>
      </div>
    </div>
  )
}
