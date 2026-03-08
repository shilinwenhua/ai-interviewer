// 能力雷达图组件
import { useEffect, useRef } from 'react'

export default function AbilityRadar({ data, width = 300, height = 300 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current || !data) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2 - 40
    
    // 能力维度
    const labels = Object.keys(data)
    const values = labels.map(label => data[label])
    const maxValue = 100
    const numPoints = labels.length
    
    // 清空画布
    ctx.clearRect(0, 0, width, height)
    
    // 绘制背景网格
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.lineWidth = 1
    
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      for (let j = 0; j <= numPoints; j++) {
        const angle = (Math.PI * 2 * j / numPoints) - Math.PI / 2
        const r = (radius * i) / 5
        const x = centerX + r * Math.cos(angle)
        const y = centerY + r * Math.sin(angle)
        if (j === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.stroke()
    }
    
    // 绘制轴线
    for (let i = 0; i < numPoints; i++) {
      const angle = (Math.PI * 2 * i / numPoints) - Math.PI / 2
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle))
      ctx.stroke()
    }
    
    // 绘制数据区域
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)')
    gradient.addColorStop(1, 'rgba(139, 92, 246, 0.1)')
    
    ctx.fillStyle = gradient
    ctx.beginPath()
    
    for (let i = 0; i <= numPoints; i++) {
      const idx = i % numPoints
      const value = values[idx]
      const angle = (Math.PI * 2 * idx / numPoints) - Math.PI / 2
      const r = (value / maxValue) * radius
      const x = centerX + r * Math.cos(angle)
      const y = centerY + r * Math.sin(angle)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    
    ctx.closePath()
    ctx.fill()
    
    // 绘制数据线
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.8)'
    ctx.lineWidth = 2
    ctx.stroke()
    
    // 绘制数据点
    for (let i = 0; i < numPoints; i++) {
      const value = values[i]
      const angle = (Math.PI * 2 * i / numPoints) - Math.PI / 2
      const r = (value / maxValue) * radius
      const x = centerX + r * Math.cos(angle)
      const y = centerY + r * Math.sin(angle)
      
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = '#8b5cf6'
      ctx.fill()
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 2
      ctx.stroke()
    }
    
    // 绘制标签
    ctx.fillStyle = '#94a3b8'
    ctx.font = '11px Noto Sans SC'
    ctx.textAlign = 'center'
    
    for (let i = 0; i < numPoints; i++) {
      const value = values[i]
      const angle = (Math.PI * 2 * i / numPoints) - Math.PI / 2
      const labelRadius = radius + 20
      const x = centerX + labelRadius * Math.cos(angle)
      const y = centerY + labelRadius * Math.sin(angle)
      
      // 标签文字
      ctx.fillStyle = '#94a3b8'
      ctx.fillText(labels[i], x, y)
      
      // 分数
      ctx.fillStyle = '#8b5cf6'
      ctx.font = 'bold 12px Noto Sans SC'
      ctx.fillText(value, x, y + 14)
      ctx.font = '11px Noto Sans SC'
    }
    
  }, [data, width, height])

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height}
        className="mx-auto"
      />
      
      {/* 图例 */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {data && Object.entries(data).map(([label, value]) => (
          <div key={label} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet-500"></div>
            <span className="text-xs text-slate-400">{label}</span>
            <span className="text-xs font-medium text-violet-400">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
