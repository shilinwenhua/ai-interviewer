// 级别选择 - 深空金风格
import { motion } from 'framer-motion'
import { userLevels } from '../data/realQuestions'

export default function LevelSelect({ selected, onSelect, onNext }) {
  return (
    <div style={{ background: '#0a0a0c', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: "'DM Sans', sans-serif" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>
            选择你的经验级别
          </h1>
          <p style={{ color: '#888', fontSize: '14px' }}>
            根据你的工作经验匹配合适难度的面试题
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {userLevels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelect(level.id)}
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                padding: '24px',
                border: selected === level.id ? '1px solid #d4af37' : '1px solid #2a2a2e',
                background: selected === level.id ? 'rgba(212,175,55,0.05)' : 'rgba(255,255,255,0.02)',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{level.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', color: selected === level.id ? '#d4af37' : '#e5e5e5' }}>{level.name}</h3>
              <p style={{ fontSize: '12px', color: '#666' }}>{level.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', padding: '16px', marginBottom: '32px', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>难度说明</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#666' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', background: '#22c55e', borderRadius: '2px' }}></span>
              <span>L1 应届生/转行：基础问题 + 简历项目</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', background: '#3b82f6', borderRadius: '2px' }}></span>
              <span>L2 1-3年：初级 + 中级混合</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', background: '#eab308', borderRadius: '2px' }}></span>
              <span>L3 3-5年：中级 + 高级混合</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '2px' }}></span>
              <span>L4 5年+：高级 + 资深混合</span>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          disabled={!selected}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '700',
            border: 'none',
            cursor: selected ? 'pointer' : 'not-allowed',
            background: selected ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : '#2a2a2e',
            color: selected ? '#0a0a0c' : '#555'
          }}
        >
          下一步
        </motion.button>
      </motion.div>
    </div>
  )
}
