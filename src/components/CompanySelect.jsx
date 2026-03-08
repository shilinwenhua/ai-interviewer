// 公司/职位选择 - 深空金风格
import { useState } from 'react'
import { motion } from 'framer-motion'
import { companyList, getPositions } from '../data/companyJD'

export default function CompanySelect({ selectedCompany, selectedPosition, onSelectCompany, onSelectPosition, onNext, onPrev }) {
  const [activeTab, setActiveTab] = useState('国内')

  const filteredCompanies = companyList.filter(c => c.type === activeTab)
  const positions = selectedCompany ? getPositions(selectedCompany) : []

  return (
    <div style={{ background: '#0a0a0c', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: "'DM Sans', sans-serif" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ maxWidth: '900px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>
            选择目标公司
          </h1>
          <p style={{ color: '#888', fontSize: '14px' }}>
            选择你想要面试的公司和职位
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '4px', display: 'flex', borderRadius: '8px', border: '1px solid #2a2a2e' }}>
            <button
              onClick={() => setActiveTab('国内')}
              style={{
                padding: '10px 20px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === '国内' ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : 'transparent',
                color: activeTab === '国内' ? '#0a0a0c' : '#888',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              🇨🇳 国内大厂
            </button>
            <button
              onClick={() => setActiveTab('外企')}
              style={{
                padding: '10px 20px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === '外企' ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : 'transparent',
                color: activeTab === '外企' ? '#0a0a0c' : '#888',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              🌍 外企
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '32px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#fff' }}>选择公司</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', maxHeight: '360px', overflowY: 'auto' }}>
              {filteredCompanies.map((company) => (
                <motion.div
                  key={company.id}
                  onClick={() => onSelectCompany(company.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '10px',
                    padding: '14px',
                    border: selectedCompany === company.id ? '1px solid #d4af37' : '1px solid #2a2a2e',
                    background: selectedCompany === company.id ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.02)',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontSize: '24px', marginBottom: '6px' }}>{company.logo}</div>
                  <div style={{ fontSize: '13px', fontWeight: '500', color: selectedCompany === company.id ? '#d4af37' : '#e5e5e5' }}>{company.name}</div>
                  <div style={{ fontSize: '10px', color: '#666' }}>{company.enName}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#fff' }}>选择职位</h3>
            {selectedCompany ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '360px', overflowY: 'auto' }}>
                {positions.map((pos) => (
                  <motion.div
                    key={pos.id}
                    onClick={() => onSelectPosition(pos.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    style={{
                      cursor: 'pointer',
                      borderRadius: '10px',
                      padding: '16px',
                      border: selectedPosition === pos.id ? '1px solid #d4af37' : '1px solid #2a2a2e',
                      background: selectedPosition === pos.id ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.02)',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: selectedPosition === pos.id ? '#d4af37' : '#e5e5e5' }}>{pos.title}</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>{pos.salary}</div>
                    </div>
                    {pos.isEnglish && (
                      <span style={{ fontSize: '10px', background: 'rgba(212,175,55,0.15)', color: '#d4af37', padding: '2px 8px' }}>
                        English
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', color: '#555', fontSize: '14px' }}>
                请先选择公司
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onPrev}
            style={{
              flex: '1',
              padding: '14px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              background: '#2a2a2e',
              border: 'none',
              cursor: 'pointer',
              color: '#888'
            }}
          >
            上一步
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            disabled={!selectedCompany || !selectedPosition}
            style={{
              flex: '1',
              padding: '14px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              background: selectedCompany && selectedPosition ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : '#2a2a2e',
              border: 'none',
              cursor: selectedCompany && selectedPosition ? 'pointer' : 'not-allowed',
              color: selectedCompany && selectedPosition ? '#0a0a0c' : '#555'
            }}
          >
            下一步
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
