// 真实面试题库 - 前端工程师（难度分级版）

export const frontendQuestions = {
  // ========== 字节跳动 ==========
  bytedance: {
    L1: [  // 应届生
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
      { text: "你为什么想加入字节跳动？", category: "动机" },
      { text: "你觉得自己做前端的优势是什么？", category: "自我认知" },
      { text: "你常用的开发工具是什么？", category: "基础知识" },
      { text: "你了解 HTML/CSS/JS 的关系吗？", category: "基础知识" },
      { text: "你用过哪些前端框架？", category: "技术栈" },
    ],
    L2: [  // 1-3年
      { text: "请介绍一下你最有代表性的前端项目？", category: "项目经验" },
      { text: "Vue3 的 Composition API 和 Options API 有什么区别？", category: "框架" },
      { text: "React 的虚拟 DOM 是什么？", category: "框架" },
      { text: "什么是闭包？", category: "基础知识" },
      { text: "前端性能优化有哪些方法？", category: "性能" },
      { text: "你做过哪些性能优化？", category: "项目经验" },
    ],
    L3: [  // 3-5年
      { text: "Vue3 的响应式原理是什么？", category: "原理" },
      { text: "React 的 Fiber 架构了解吗？", category: "原理" },
      { text: "浏览器的事件循环机制了解吗？", category: "原理" },
      { text: "什么是跨域？如何解决？", category: "网络" },
      { text: "如果页面加载很慢，你会怎么排查和优化？", category: "性能" },
    ],
    L4: [  // 5年+
      { text: "你怎么做前端工程化的？", category: "工程化" },
      { text: "什么是微前端？你了解吗？", category: "架构" },
      { text: "如何设计一个高可用的前端架构？", category: "架构" },
      { text: "如果你负责一个大型前端项目，你会怎么组织代码？", category: "架构" },
    ]
  },

  // ========== 阿里巴巴 ==========
  alibaba: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
      { text: "你为什么选择阿里？", category: "动机" },
    ],
    L2: [
      { text: "请介绍一个你负责的大型前端项目？", category: "项目经验" },
      { text: "你用过哪些构建工具？", category: "工程化" },
      { text: "TypeScript 了解吗？", category: "技术栈" },
    ],
    L3: [
      { text: "你了解微前端吗？", category: "架构" },
      { text: "什么是 SSR？你做过吗？", category: "技术" },
      { text: "你怎么做组件抽象的？", category: "设计" },
    ],
    L4: [
      { text: "如何设计一个前端监控体系？", category: "架构" },
      { text: "你怎么做技术选型？", category: "技术决策" },
    ]
  },

  // ========== 腾讯 ==========
  tencent: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
    ],
    L2: [
      { text: "请介绍一个微信小程序项目？", category: "项目经验" },
      { text: "你做过哪些小程序性能优化？", category: "性能" },
    ],
    L3: [
      { text: "微信小程序和 H5 的区别是什么？", category: "技术" },
      { text: "你了解小程序的生命周期吗？", category: "原理" },
    ],
    L4: [
      { text: "如果小程序白屏了，你会怎么排查？", category: "排查" },
    ]
  },

  // ========== 百度 ==========
  baidu: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
    ],
    L2: [
      { text: "请介绍一个搜索相关的项目？", category: "项目经验" },
    ],
    L3: [
      { text: "你了解前端搜索优化吗？", category: "性能" },
      { text: "什么是 SEO？怎么做？", category: "技术" },
    ],
    L4: []
  },

  // ========== 美团 ==========
  meituan: {
    L1: [],
    L2: [
      { text: "请介绍一个 React 项目？", category: "项目经验" },
    ],
    L3: [
      { text: "React 的 Diff 算法了解吗？", category: "原理" },
    ],
    L4: []
  },

  // ========== 通用题 ==========
  common: {
    L1: [  // 应届生必问
      { text: "请用3分钟介绍一下你自己？", category: "自我介绍" },
      { text: "你的优势和劣势是什么？", category: "自我认知" },
      { text: "你为什么想做前端？", category: "动机" },
      { text: "你从之前的工作中学到了什么？", category: "学习能力" },
      { text: "你的兴趣爱好是什么？", category: "个人特质" },
      { text: "你的职业规划是什么？", category: "职业规划" },
    ],
    L2: [  // 1-3年必问
      { text: "请介绍一个你从0到1的前端项目？", category: "项目经验" },
      { text: "你用过哪些前端框架？", category: "技术栈" },
      { text: "你做过哪些技术选型？", category: "技术决策" },
      { text: "你负责的最复杂的项目是什么？", category: "项目经验" },
      { text: "HTML、CSS、JS 的关系是什么？", category: "基础知识" },
      { text: "什么是盒模型？", category: "基础知识" },
    ],
    L3: [  // 3-5年必问
      { text: "你做过的最失败的技术决策是什么？", category: "复盘" },
      { text: "CSS 布局有哪些方式？", category: "技术" },
      { text: "Flex 布局和 Grid 布局的区别？", category: "技术" },
      { text: "什么是 Promise？", category: "异步" },
      { text: "async/await 是什么？", category: "异步" },
      { text: "let、const、var 的区别？", category: "基础知识" },
    ],
    L4: [  // 5年+必问
      { text: "如果页面加载很慢，你会怎么优化？", category: "性能" },
      { text: "如果有内存泄漏，你会怎么排查？", category: "性能" },
      { text: "如果要做移动端适配，你会怎么做？", category: "适配" },
      { text: "如果要在网页实现一个动画，你会怎么选择？", category: "技术选型" },
      { text: "你怎么做前端工程化的？", category: "工程化" },
      { text: "你如何保证代码质量？", category: "质量" },
    ]
  }
}

// 获取所有题目（指定级别）
export const getAllFrontendQuestions = (company = null, level = 'L2', count = 10) => {
  const allQuestions = []
  
  // 收集所有级别题目
  Object.entries(frontendQuestions).forEach(([companyKey, levels]) => {
    const companyName = companyKey === 'common' ? '通用' : companyKey.toUpperCase()
    
    // 根据级别收集题目
    if (level === 'L2') {
      if (levels.L1) allQuestions.push(...levels.L1.map(q => ({ ...q, difficulty: 'L1', company: companyName })))
      if (levels.L2) allQuestions.push(...levels.L2.map(q => ({ ...q, difficulty: 'L2', company: companyName })))
    } else if (level === 'L3') {
      if (levels.L2) allQuestions.push(...levels.L2.map(q => ({ ...q, difficulty: 'L2', company: companyName })))
      if (levels.L3) allQuestions.push(...levels.L3.map(q => ({ ...q, difficulty: 'L3', company: companyName })))
    } else if (level === 'L4') {
      if (levels.L3) allQuestions.push(...levels.L3.map(q => ({ ...q, difficulty: 'L3', company: companyName })))
      if (levels.L4) allQuestions.push(...levels.L4.map(q => ({ ...q, difficulty: 'L4', company: companyName })))
    } else {
      if (levels.L1) allQuestions.push(...levels.L1.map(q => ({ ...q, difficulty: 'L1', company: companyName })))
    }
  })
  
  // 随机选择
  return allQuestions.sort(() => Math.random() - 0.5).slice(0, count)
}
