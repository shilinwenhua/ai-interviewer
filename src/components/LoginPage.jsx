// V5.0 未来科技风登录页面
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoginPage({ onLogin, onGoToRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return
    
    setIsLoading(true)
    setTimeout(() => {
      onLogin({ email, nickname: email.split('@')[0] })
      setIsLoading(false)
    }, 1200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* 动态网格背景 */}
      <GridBackground />
      
      {/* 光效 */}
      <div className="absolute top-0 left-1/4 w-1 h-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-1 h-1/2 bg-gradient-to-t from-purple-500 via-pink-500 to-transparent opacity-30 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-slate-900/50 via-transparent to-transparent"></div>

      {/* 主卡片 */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[420px] mx-4"
      >
        {/* 卡片装饰 */}
        <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-[24px] blur-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent rounded-[24px]"></div>
        
        <div className="relative bg-black/80 backdrop-blur-3xl border border-white/[0.08] rounded-[24px] p-8 sm:p-10">
          {/* Logo区 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-10"
          >
            {/* 动态图标 */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-black via-slate-900 to-black border border-white/10 flex items-center justify-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI</span>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">面试题库</span>
            </h1>
            <p className="text-slate-500 text-sm font-medium tracking-wide uppercase">AI Product Manager</p>
          </motion.div>

          {/* 表单 */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 邮箱 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 ml-1">邮箱</label>
              <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-md opacity-0 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : ''}`}></div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your@email.com"
                  className="relative w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all duration-300 font-mono text-sm"
                />
              </div>
            </motion.div>

            {/* 密码 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 ml-1">密码</label>
              <div className={`relative transition-all duration-300 ${focusedField === 'password' ? 'scale-[1.02]' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-md opacity-0 transition-opacity duration-300 ${focusedField === 'password' ? 'opacity-100' : ''}`}></div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="••••••••"
                  className="relative w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all duration-300 font-mono text-sm"
                />
              </div>
            </motion.div>

            {/* 记住 & 忘记 */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between text-xs"
            >
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-4 h-4 border border-white/20 rounded bg-white/5 peer-checked:bg-cyan-500/50 transition-colors"></div>
                  <svg className="absolute top-0.5 left-0.5 w-3 h-3 text-cyan-400 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-slate-500 group-hover:text-slate-300 transition-colors">记住我</span>
              </label>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">忘记密码？</a>
            </motion.div>

            {/* 登录按钮 */}
            <motion.button
              type="submit"
              disabled={isLoading || !email || !password}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="relative w-full py-4 mt-2 overflow-hidden rounded-xl font-semibold text-sm tracking-wider uppercase disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {/* 背景 */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* 扫描线效果 */}
              <div className="absolute inset-0 overflow-hidden rounded-inherit">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <span className="relative flex items-center justify-center gap-2 text-white">
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    <span className="animate-pulse">验证中...</span>
                  </>
                ) : (
                  <>
                    <span>进入系统</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </>
                )}
              </span>
            </motion.button>
          </form>

          {/* 注册 */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 pt-6 border-t border-white/[0.06] text-center"
          >
            <p className="text-slate-500 text-sm">
              还没有账号？{' '}
              <button 
                type="button"
                onClick={onGoToRegister}
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                创建账号 <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* 底部 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 text-xs tracking-widest uppercase"
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
          AI面试题库 v5.0
        </span>
      </motion.div>
    </div>
  )
}

// 动态网格背景
function GridBackground() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    const draw = () => {
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const gridSize = 60
      const offset = (time * 0.02) % gridSize
      
      // 绘制网格线
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 1
      
      // 垂直线
      for (let x = -offset; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // 水平线
      for (let y = -offset; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // 绘制动态光点
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time * 0.01) * 100,
        canvas.height * 0.4 + Math.cos(time * 0.015) * 50,
        0,
        canvas.width * 0.3 + Math.sin(time * 0.01) * 100,
        canvas.height * 0.4 + Math.cos(time * 0.015) * 50,
        400
      )
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.15)')
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // 第二个光点
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 0.012) * 80,
        canvas.height * 0.6 + Math.sin(time * 0.018) * 60,
        0,
        canvas.width * 0.7 + Math.cos(time * 0.012) * 80,
        canvas.height * 0.6 + Math.sin(time * 0.018) * 60,
        300
      )
      gradient2.addColorStop(0, 'rgba(236, 72, 153, 0.12)')
      gradient2.addColorStop(0.5, 'rgba(139, 92, 246, 0.06)')
      gradient2.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      time++
      animationId = requestAnimationFrame(draw)
    }
    
    resize()
    draw()
    
    window.addEventListener('resize', resize)
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return <canvas ref={canvasRef} className="absolute inset-0" />
}
