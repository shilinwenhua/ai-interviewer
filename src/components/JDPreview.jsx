// JD预览 - 深空金风格
import { motion } from 'framer-motion'
import { companyList, positionJD } from '../data/companyJD'

export default function JDPreview({ companyId, positionId, onStart, onPrev }) {
  const company = companyList.find(c => c.id === companyId)
  const position = companyId && positionId ? positionJD[companyId]?.[positionId] : null

  if (!company || !position) {
    return (
      <div style={{ background: '#0a0a0c', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#666' }}>加载中...</div>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0a0c', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: "'DM Sans', sans-serif" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>
            职位详情
          </h1>
          <p style={{ color: '#888', fontSize: '14px' }}>
            了解目标岗位要求，做好面试准备
          </p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', marginBottom: '24px', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: 'linear-gradient(135deg, #1a1a1e, #0a0a0c)', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ fontSize: '48px' }}>{company.logo}</div>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>{company.name}</h2>
                <p style={{ fontSize: '12px', color: '#888' }}>{company.enName}</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ background: 'rgba(212,175,55,0.15)', padding: '8px 16px', borderRadius: '6px', color: '#d4af37', fontSize: '14px', fontWeight: '500' }}>
                {position.title}
              </span>
              <span style={{ background: 'rgba(212,175,55,0.15)', padding: '8px 16px', borderRadius: '6px', color: '#d4af37', fontSize: '14px', fontWeight: '500' }}>
                {position.salary}
              </span>
              {position.isEnglish && (
                <span style={{ background: 'rgba(234,179,8,0.2)', padding: '6px 12px', fontSize: '12px', color: '#fbbf24' }}>
                  English
                </span>
              )}
            </div>
          </div>

          <div style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>职位描述</h3>
            <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.8', marginBottom: '20px' }}>{position.desc}</p>
            
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>岗位要求</h3>
            <ul style={{ fontSize: '13px', color: '#888', lineHeight: '2', paddingLeft: '16px' }}>
              {position.requirements?.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={onPrev}
            style={{
              flex: '1',
              padding: '14px',
              fontSize: '15px',
              fontWeight: '600',
              background: '#2a2a2e',
              border: 'none',
              color: '#888',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            上一步
          </button>
          <button
            onClick={onStart}
            style={{
              flex: '1',
              padding: '14px',
              fontSize: '15px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
              border: 'none',
              color: '#0a0a0c',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            开始面试 →
          </button>
        </div>
      </motion.div>
    </div>
  )
}
