// 角色选择 - 深空金风格
import { motion } from 'framer-motion'

const roles = [
  { id: 'pm', name: '产品经理', desc: '产品设计、需求分析', icon: 'M21 16V8a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1-2 2h14a2 2 0 0 1 2z' },
  { id: 'frontend', name: '前端工程师', desc: 'Vue/React/工程化', icon: 'M16 18l6-6-6M8 18l-6-6' },
  { id: 'backend', name: '后端工程师', desc: 'Go/Java/数据库', icon: 'M4 4h16v12H4zM12 12l4 4m-4-4l4 4' },
  { id: '运营', name: '运营专员', desc: '数据分析、用户增长', icon: 'M3 3v18h18M9 9l6 6m-6-6l6 6' },
]

export default function RoleSelect({ selected, onSelect, onNext }) {
  return (
    <div style={{ background: '#0a0a0c', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: "'DM Sans', sans-serif" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>
            选择你的面试角色
          </h1>
          <p style={{ color: '#888', fontSize: '14px' }}>
            根据你应聘的岗位选择对应的面试类型
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelect(role.id)}
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                padding: '24px',
                border: selected === role.id ? '1px solid #d4af37' : '1px solid #2a2a2e',
                background: selected === role.id ? 'rgba(212,175,55,0.05)' : 'rgba(255,255,255,0.02)',
                transition: 'all 0.2s'
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={selected === role.id ? '#d4af37' : '#666'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={role.icon} />
              </svg>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', marginTop: '12px', color: selected === role.id ? '#d4af37' : '#e5e5e5' }}>{role.name}</h3>
              <p style={{ fontSize: '12px', color: '#666' }}>{role.desc}</p>
            </motion.div>
          ))}
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
