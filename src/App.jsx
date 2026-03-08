// V8.0 深空金版
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoginPage from './components/LoginPage'
import InterviewFlow from './components/InterviewFlow'
import InterviewHistoryPage from './components/InterviewHistoryPage'
import WrongQuestionsPage from './components/WrongQuestionsPage'
import ReviewPage from './components/ReviewPage'

const mockDB = {
  users: {
    '1': { id: '1', nickname: 'AI产品经理', avatar: 'PM', points: 1250, level: 5 },
    '2': { id: '2', nickname: '算法工程师', avatar: 'SE', points: 2380, level: 8 },
    '3': { id: '3', nickname: '数据分析师', avatar: 'DA', points: 890, level: 3 },
  },
  picks: [
    { id: 1, title: 'RAG系统的效果如何评估？有哪些关键指标？', views: 256, likes: 89, category: 'AI基础', userId: '2' },
    { id: 2, title: 'AI产品和传统PM的核心差异是什么？', views: 189, likes: 56, category: '产品', userId: '1' },
    { id: 3, title: '推荐系统的MVP怎么设计？', views: 128, likes: 42, category: '产品', userId: '1' },
    { id: 4, title: '大模型幻觉问题怎么解决？', views: 312, likes: 98, category: 'AI基础', userId: '2' },
    { id: 5, title: 'Transformer和RNN的区别？', views: 142, likes: 43, category: '算法', userId: '3' },
  ],
  questions: [
    { id: 1, title: '如何准备算法面试？', answers: 52, hot: true, category: '面试', tags: ['算法', '初级'], userId: '1', views: 520 },
    { id: 2, title: '推荐系统入门书籍推荐', answers: 38, hot: true, category: '书籍', tags: ['推荐系统', '入门'], userId: '2', views: 380 },
    { id: 3, title: '大模型幻觉问题怎么解决？', answers: 29, hot: true, category: '大模型', tags: ['工程', '中级'], userId: '3', views: 290 },
    { id: 4, title: 'RAG和微调的区别？', answers: 24, hot: false, category: 'AI基础', tags: ['RAG', '进阶'], userId: '2', views: 240 },
    { id: 5, title: 'AI产品经理需要学算法吗？', answers: 18, hot: false, category: '职业', tags: ['PM', '入门'], userId: '1', views: 180 },
  ],
}

function App() {
  const [page, setPage] = useState('login')
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('picks')
  const [searchQuery, setSearchQuery] = useState('')
  
  useEffect(() => {
    const savedUser = localStorage.getItem('ai-interviewer-user')
    if (savedUser) { setUser(JSON.parse(savedUser)); setPage('home'); }
  }, [])

  const handleLogin = (userData) => {
    const fullUser = { ...userData, id: '1', nickname: userData.nickname || 'AI产品经理' }
    setUser(fullUser); localStorage.setItem('ai-interviewer-user', JSON.stringify(fullUser)); setPage('home')
  }
  const filteredQuestions = searchQuery ? mockDB.questions.filter(q => q.title.includes(searchQuery)) : mockDB.questions

  if (page === 'login') return <LoginPage onLogin={handleLogin} onGoToRegister={() => {}} />
  if (page === 'interview') return <InterviewFlow onBack={() => setPage('home')} />
  if (page === 'history') return <InterviewHistoryPage onBack={() => setPage('home')} />
  if (page === 'wrong') return <WrongQuestionsPage onBack={() => setPage('home')} />
  if (page === 'review') return <ReviewPage onBack={() => setPage('home')} />

  return (
    <div style={{ background: '#0a0a0c', minHeight: '100vh', color: '#e5e5e5', fontFamily: "'DM Sans', sans-serif" }}>
      <header style={{ background: 'rgba(10,10,12,0.95)', borderBottom: '1px solid #2a2a2e', position: 'sticky', top: '0', zIndex: 100, backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: 38, height: 38, background: 'linear-gradient(135deg, #d4af37, #f4d03f)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0a0c" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div><h1 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>AI面试官</h1><p style={{ fontSize: 10, color: '#d4af37', letterSpacing: 2 }}>INTERVIEWER</p></div>
          </div>
          <nav style={{ display: 'flex', gap: 4 }}>
            {['精选', '题库', '社区'].map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(tab === '精选' ? 'picks' : tab === '题库' ? 'all' : 'community')} style={{ background: (activeTab === 'picks' && tab === '精选' || activeTab === 'all' && tab === '题库' || activeTab === 'community' && tab === '社区') ? 'rgba(212,175,55,0.1)' : 'transparent', color: (activeTab === 'picks' && tab === '精选' || activeTab === 'all' && tab === '题库' || activeTab === 'community' && tab === '社区') ? '#d4af37' : '#888', border: 'none', padding: '8px 18px', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>{tab}</button>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="搜索问题..." style={{ width: 200, padding: '8px 14px 8px 38px', background: 'rgba(255,255,255,0.05)', border: '1px solid #2a2a2e', borderRadius: 8, fontSize: 13, color: '#fff', outline: 'none' }} />
            <div style={{ width: 34, height: 34, background: 'linear-gradient(135deg, #d4af37, #f4d03f)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0a0c', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{user?.nickname?.[0] || '我'}</div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: 24 }}>
        <section style={{ background: 'linear-gradient(135deg, #1a1a1e, #0a0a0c)', border: '1px solid #2a2a2e', borderRadius: 16, padding: 36, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, position: 'relative', zIndex: 1 }}>
            <div style={{ width: 70, height: 70, background: 'linear-gradient(135deg, #d4af37, #f4d03f)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0a0a0c" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
            </div>
            <div><h2 style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 8 }}>AI模拟面试</h2><p style={{ fontSize: 14, color: '#888' }}>和AI来一场真实模拟面试，获得实时点评</p></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 40, position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: 24 }}>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: 26, fontWeight: 700, background: 'linear-gradient(135deg, #d4af37, #f4d03f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2,847</div><div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>今日面试</div></div>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: 26, fontWeight: 700, background: 'linear-gradient(135deg, #d4af37, #f4d03f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>98%</div><div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>好评率</div></div>
            </div>
            <button onClick={() => setPage('interview')} style={{ background: 'linear-gradient(135deg, #d4af37, #f4d03f)', color: '#0a0a0c', border: 'none', padding: '14px 28px', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>开始模拟面试 →</button>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 28 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>今日精选</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['热门', '最新', '待回复'].map((f, i) => <button key={f} style={{ padding: '6px 14px', fontSize: 13, color: i === 0 ? '#d4af37' : '#666', background: i === 0 ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.03)', border: '1px solid', borderColor: i === 0 ? '#d4af37' : '#2a2a2e', borderRadius: 20, cursor: 'pointer' }}>{f}</button>)}
              </div>
            </div>
            <AnimatePresence mode="wait">
              {activeTab === 'picks' && (
                <motion.div key="picks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {mockDB.picks.map((item, idx) => (
                    <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: 12, padding: 20, marginBottom: 12, cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                        <div style={{ width: 32, height: 32, background: idx < 2 ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : 'rgba(255,255,255,0.05)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: idx < 2 ? '#0a0a0c' : '#444' }}>{idx + 1}</div>
                        <div style={{ fontSize: 16, fontWeight: 600, color: '#e5e5e5', flex: 1 }}>{item.title}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                        {idx < 2 && <span style={{ padding: '4px 10px', background: 'rgba(212,175,55,0.2)', color: '#d4af37', fontSize: 11 }}>热</span>}
                        <span style={{ padding: '4px 10px', background: 'rgba(212,175,55,0.1)', color: '#d4af37', fontSize: 11 }}>{item.category}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #1a1a1e' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><div style={{ width: 26, height: 26, background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'white' }}>{mockDB.users[item.userId]?.avatar}</div><span style={{ fontSize: 12, color: '#888' }}>{mockDB.users[item.userId]?.nickname}</span></div>
                        <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#666' }}><span>👁 {item.views}</span><span>❤️ {item.likes}</span></div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {activeTab === 'community' && (
                <motion.div key="community" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {filteredQuestions.map((item, idx) => (
                    <motion.div key={item.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: 12, padding: 20, marginBottom: 12, cursor: 'pointer', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{ width: 30, fontSize: 20, fontWeight: 700, color: idx < 3 ? '#d4af37' : '#333' }}>{idx + 1}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>{item.hot && <span style={{ fontSize: 10, color: '#d4af37' }}>热</span>}<span style={{ fontSize: 10, background: 'rgba(212,175,55,0.1)', color: '#d4af37', padding: '2px 8px' }}>{item.category}</span></div>
                        <div style={{ fontSize: 16, fontWeight: 500, color: '#e5e5e5', marginBottom: 8 }}>{item.title}</div>
                        <div style={{ display: 'flex', gap: 6 }}>{item.tags?.map(tag => <span key={tag} style={{ fontSize: 11, background: 'rgba(255,255,255,0.05)', color: '#888', padding: '2px 8px' }}>{tag}</span>)}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}><div style={{ fontSize: 18, fontWeight: 700, color: '#d4af37' }}>{item.answers}</div><div style={{ fontSize: 11, color: '#666' }}>回答</div></div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {activeTab === 'all' && (
                <motion.div key="all" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {filteredQuestions.map((item) => (
                    <div key={item.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: 12, padding: 16, marginBottom: 12, cursor: 'pointer' }}>
                      <div style={{ fontSize: 15, fontWeight: 500, color: '#e5e5e5', marginBottom: 8 }}>{item.title}</div>
                      <div style={{ fontSize: 12, color: '#666' }}><span>{item.category}</span><span> · </span><span>{item.answers} 回答</span></div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #1a1a1e' }}>我的工具</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
                {[{ icon: 'M3 3v18h18', label: '面试复盘', page: 'review' },{ icon: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2h12a2 2 0 0 0 2V7.5L14.5 2z', label: '错题本', page: 'wrong' },{ icon: 'm19 21-7-5-7 5', label: '收藏夹', page: '' },{ icon: 'M12 20h9', label: '面试记录', page: 'history' }].map(tool => (
                  <button key={tool.label} onClick={() => tool.page && setPage(tool.page)} style={{ padding: 16, background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: 'none', cursor: 'pointer', textAlign: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2"><path d={tool.icon}/></svg>
                    <div style={{ fontSize: 12, fontWeight: 500, color: '#aaa', marginTop: 6 }}>{tool.label}</div>
                  </button>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 16 }}>热门分类</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{['大模型', '产品设计', '算法', '推荐系统', 'RAG', '职业规划'].map(tag => <span key={tag} style={{ padding: '6px 12px', fontSize: 12, background: 'rgba(255,255,255,0.05)', borderRadius: 6, color: '#888', cursor: 'pointer' }}>{tag}</span>)}</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #2a2a2e', borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 16 }}>热榜排行</div>
              {['大模型幻觉怎么解决？', '推荐系统MVP设计', 'AI产品经理书籍推荐'].map((title, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: idx < 2 ? '1px solid #1a1a1e' : 'none', cursor: 'pointer' }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: idx === 0 ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : idx === 1 ? 'linear-gradient(135deg, #c9a227, #d4af37)' : 'linear-gradient(135deg, #a68b1e, #c9a227)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#0a0a0c' }}>{idx + 1}</div>
                  <div style={{ fontSize: 13, color: '#aaa', flex: 1 }}>{title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
