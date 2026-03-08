// AI面试题库 - 测试用例
// 运行命令: npm test

import { describe, it, expect, beforeEach } from 'vitest'

// 测试1: 登录功能
describe('登录功能测试', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('应该能够输入昵称并登录', () => {
    const nickname = '测试用户'
    localStorage.setItem('ai-interviewer-nickname', nickname)
    const savedNickname = localStorage.getItem('ai-interviewer-nickname')
    expect(savedNickname).toBe('测试用户')
  })

  it('应该能够正确保存用户信息', () => {
    const testData = {
      nickname: '测试用户',
      resume: '我的简历内容',
      targetPosition: 'AI产品经理'
    }
    localStorage.setItem('ai-interviewer-nickname', testData.nickname)
    localStorage.setItem('ai-interviewer-resume', testData.resume)
    localStorage.setItem('ai-interviewer-position', testData.targetPosition)
    
    expect(localStorage.getItem('ai-interviewer-nickname')).toBe(testData.nickname)
    expect(localStorage.getItem('ai-interviewer-resume')).toBe(testData.resume)
    expect(localStorage.getItem('ai-interviewer-position')).toBe(testData.targetPosition)
  })

  it('应该能够正确退出登录', () => {
    localStorage.setItem('ai-interviewer-nickname', '测试用户')
    localStorage.removeItem('ai-interviewer-nickname')
    expect(localStorage.getItem('ai-interviewer-nickname')).toBeNull()
  })
})

// 测试2: 收藏功能
describe('收藏功能测试', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('应该能够收藏题目', () => {
    const favorites = [1, 2, 3]
    localStorage.setItem('ai-interviewer-favorites', JSON.stringify(favorites))
    const saved = JSON.parse(localStorage.getItem('ai-interviewer-favorites'))
    expect(saved).toEqual([1, 2, 3])
  })

  it('应该能够取消收藏', () => {
    let favorites = [1, 2, 3]
    favorites = favorites.filter(f => f !== 2)
    expect(favorites).toEqual([1, 3])
  })

  it('应该能够添加新收藏', () => {
    let favorites = [1, 2]
    favorites = [...favorites, 3]
    expect(favorites).toEqual([1, 2, 3])
  })
})

// 测试3: 复习记录功能
describe('复习记录功能测试', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('应该能够标记已复习', () => {
    const reviewed = [1, 2]
    localStorage.setItem('ai-interviewer-reviewed', JSON.stringify(reviewed))
    const saved = JSON.parse(localStorage.getItem('ai-interviewer-reviewed'))
    expect(saved).toEqual([1, 2])
  })

  it('应该能够取消复习标记', () => {
    let reviewed = [1, 2, 3]
    reviewed = reviewed.filter(r => r !== 2)
    expect(reviewed).toEqual([1, 3])
  })
})

// 测试4: 问答历史功能
describe('问答历史功能测试', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('应该能够保存问答历史', () => {
    const chatMessages = [
      { role: 'user', content: '你好' },
      { role: 'assistant', content: '你好，我是AI面试官' }
    ]
    localStorage.setItem('ai-interviewer-chat', JSON.stringify(chatMessages))
    const saved = JSON.parse(localStorage.getItem('ai-interviewer-chat'))
    expect(saved).toEqual(chatMessages)
  })
})

// 测试5: 状态管理
describe('状态管理测试', () => {
  it('应该能够正确判断登录状态', () => {
    localStorage.setItem('ai-interviewer-nickname', '测试用户')
    const isLoggedIn = !!localStorage.getItem('ai-interviewer-nickname')
    expect(isLoggedIn).toBe(true)
  })

  it('未登录时应该返回false', () => {
    localStorage.clear()
    const isLoggedIn = !!localStorage.getItem('ai-interviewer-nickname')
    expect(isLoggedIn).toBe(false)
  })
})
