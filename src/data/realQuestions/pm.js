// 真实面试题库 - 产品经理（难度分级版）
// 来源：牛客、一亩三分地、真实面经

// 难度等级：L1(应届/转行), L2(1-3年), L3(3-5年), L4(5年+)
export const pmQuestions = {
  // ========== 字节跳动 ==========
  bytedance: {
    L1: [  // 应届生/转行入门
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
      { text: "你为什么想加入字节跳动？", category: "动机" },
      { text: "你觉得自己做产品经理的优势是什么？", category: "自我认知" },
      { text: "你为什么想做产品经理？", category: "动机" },
      { text: "你用过字节系的产品吗？", category: "了解公司" },
      { text: "你日常使用最多的app是什么？", category: "产品感" },
    ],
    L2: [  // 1-3年
      { text: "请介绍一下你最有代表性的产品项目？", category: "项目经验" },
      { text: "这个项目你遇到了最大的挑战是什么？怎么解决的？", category: "项目经验" },
      { text: "你的项目数据表现怎么样？", category: "数据思维" },
      { text: "你和开发/设计产生过分歧吗？怎么解决的？", category: "协作能力" },
      { text: "你怎么做需求分析的？", category: "专业知识" },
      { text: "你如何定义需求优先级？", category: "专业知识" },
      { text: "什么是用户画像？怎么用？", category: "专业知识" },
      { text: "你常用什么产品？有什么可以改进的？", category: "产品分析" },
    ],
    L3: [  // 3-5年
      { text: "请举例说明你通过数据驱动产品优化的案例？", category: "数据驱动" },
      { text: "A/B Test 怎么做？", category: "实验方法" },
      { text: "你了解字节跳动的产品吗？你觉得哪里可以改进？", category: "业务理解" },
      { text: "如果日活下降了10%，你会怎么分析？", category: "场景题" },
      { text: "给抖音设计一个小程序，你会怎么设计？", category: "产品设计" },
      { text: "两个CTR都上升，为什么总体下降了？", category: "数据分析" },
      { text: "你认为好的产品和坏的产品怎么界定？", category: "产品思维" },
    ],
    L4: [  // 5年+
      { text: "如果你要做一款短视频产品，你会怎么做？", category: "产品规划" },
      { text: "如果老板让你做一款和微信竞争的产品，你怎么做？", category: "战略思维" },
      { text: "如果你发现一个功能用户反馈不好，但数据表现不错，你会怎么处理？", category: "决策能力" },
      { text: "你认为用户产品经理和商业产品经理有什么区别？", category: "专业深度" },
      { text: "你了解推荐算法吗？在产品中怎么应用？", category: "技术理解" },
      { text: "如果让你负责字节的一条新业务线，你会怎么做？", category: "战略规划" },
    ]
  },

  // ========== 阿里巴巴 ==========
  alibaba: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
      { text: "你为什么选择阿里？", category: "动机" },
      { text: "你对阿里有什么了解？", category: "了解公司" },
      { text: "你作为英语/其他专业学生，为什么想做产品经理？", category: "动机" },
    ],
    L2: [
      { text: "请介绍一个你最成功的项目？", category: "项目经验" },
      { text: "这个项目的数据表现如何？", category: "数据思维" },
      { text: "你在项目中承担什么角色？", category: "项目经验" },
      { text: "你和业务方是怎么合作的？", category: "协作能力" },
      { text: "什么是GMV？", category: "专业知识" },
    ],
    L3: [
      { text: "如果重新做这个项目，你会做什么改变？", category: "复盘能力" },
      { text: "什么是AARRR模型？", category: "专业知识" },
      { text: "你怎么做用户增长？", category: "增长能力" },
      { text: "电商和社交产品的区别是什么？", category: "业务理解" },
      { text: "如果让你做淘宝的搜索优化，你会怎么做？", category: "产品设计" },
      { text: "双11怎么设计活动？", category: "运营能力" },
    ],
    L4: [
      { text: "怎么提升GMV？", category: "商业思维" },
      { text: "你熟悉交易链路吗？", category: "业务深度" },
      { text: "如果要做下沉市场，你会怎么做？", category: "战略规划" },
      { text: "淘宝和京东的核心差异是什么？", category: "竞品分析" },
    ]
  },

  // ========== 腾讯 ==========
  tencent: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
      { text: "你为什么想加入腾讯？", category: "动机" },
    ],
    L2: [
      { text: "请介绍一个你负责的产品？", category: "项目经验" },
      { text: "这个产品的核心指标是什么？", category: "数据思维" },
      { text: "你怎么做产品迭代的？", category: "专业知识" },
      { text: "你了解微信的产品理念吗？", category: "了解公司" },
    ],
    L3: [
      { text: "社交产品和工具产品的区别是什么？", category: "业务理解" },
      { text: "如果让你改进微信，你会改什么？", category: "产品分析" },
      { text: "小程序和H5的区别是什么？", category: "技术理解" },
      { text: "如果小程序数据下降，你会怎么分析？", category: "数据分析" },
    ],
    L4: [
      { text: "你如何看待微信的成功？", category: "产品思维" },
      { text: "如果让你做一款社交产品，你会怎么做？", category: "产品规划" },
      { text: "如何向用户推广一个新功能？", category: "增长能力" },
    ]
  },

  // ========== 百度 ==========
  baidu: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
    ],
    L2: [
      { text: "请介绍一个数据相关的项目？", category: "项目经验" },
      { text: "你了解搜索推荐吗？", category: "专业知识" },
    ],
    L3: [
      { text: "什么是NLP？在产品中怎么应用？", category: "技术理解" },
      { text: "如果让你优化百度搜索，你会怎么做？", category: "产品设计" },
    ],
    L4: [
      { text: "你对AI怎么看？", category: "趋势洞察" },
      { text: "如果AI功能上线，你会怎么设计用户交互？", category: "产品规划" },
    ]
  },

  // ========== 美团 ==========
  meituan: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
    ],
    L2: [
      { text: "请介绍一个O2O相关的项目？", category: "项目经验" },
      { text: "你了解本地生活服务吗？", category: "专业知识" },
    ],
    L3: [
      { text: "什么是履约产品？", category: "专业知识" },
      { text: "你怎么理解交易平台？", category: "业务理解" },
      { text: "如果让你做外卖推荐，你会怎么做？", category: "产品设计" },
    ],
    L4: [
      { text: "如果商家入驻率下降，你会怎么分析？", category: "数据分析" },
      { text: "如何提升外卖配送效率？", category: "系统设计" },
    ]
  },

  // ========== 京东 ==========
  jd: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
    ],
    L2: [
      { text: "请介绍一个电商相关项目？", category: "项目经验" },
      { text: "京东和淘宝的区别是什么？", category: "竞品分析" },
    ],
    L3: [
      { text: "你了解供应链吗？", category: "专业知识" },
      { text: "京东物流的优势是什么？", category: "业务理解" },
    ],
    L4: [
      { text: "如果让你提升京东物流体验，你会怎么做？", category: "产品规划" },
    ]
  },

  // ========== 滴滴 ==========
  didi: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
    ],
    L2: [
      { text: "请介绍一个出行相关项目？", category: "项目经验" },
      { text: "你了解出行产品吗？", category: "专业知识" },
    ],
    L3: [
      { text: "什么是调度系统？", category: "专业知识" },
      { text: "滴滴和曹操专车的区别是什么？", category: "竞品分析" },
    ],
    L4: [
      { text: "如果让你优化打车体验，你会怎么做？", category: "产品设计" },
      { text: "如何解决高峰期打车难的问题？", category: "系统设计" },
    ]
  },

  // ========== Meta ==========
  meta: {
    L1: [
      { text: "Please introduce yourself.", category: "自我介绍" },
      { text: "Why do you want to join Meta?", category: "动机" },
    ],
    L2: [
      { text: "Tell me about a product project you're proud of.", category: "项目经验" },
      { text: "What was the biggest challenge you faced?", category: "项目经验" },
      { text: "What is your understanding of Meta's products?", category: "了解公司" },
    ],
    L3: [
      { text: "How would you improve Instagram?", category: "产品分析" },
      { text: "If DAU drops 10%, how would you investigate?", category: "数据分析" },
    ],
    L4: [
      { text: "How would you design a new feature for Facebook?", category: "产品设计" },
      { text: "Tell me about a time you disagreed with your team.", category: "领导力" },
    ]
  },

  // ========== Google ==========
  google: {
    L1: [
      { text: "Please introduce yourself.", category: "自我介绍" },
    ],
    L2: [
      { text: "Tell me about your most successful project.", category: "项目经验" },
      { text: "What do you know about Google's products?", category: "了解公司" },
    ],
    L3: [
      { text: "How do you prioritize product features?", category: "专业知识" },
      { text: "How would you improve Google Search?", category: "产品分析" },
    ],
    L4: [
      { text: "Why Google?", category: "动机" },
    ]
  },

  // ========== Amazon ==========
  amazon: {
    L1: [
      { text: "Please introduce yourself.", category: "自我介绍" },
    ],
    L2: [
      { text: "Tell me about a time you used data to make a decision.", category: "数据思维" },
      { text: "What is customer obsession?", category: "专业知识" },
    ],
    L3: [
      { text: "How would you improve Amazon's product?", category: "产品分析" },
    ],
    L4: [
      { text: "How would you design a new feature for Alexa?", category: "产品设计" },
      { text: "Tell me about a time you failed.", category: "复盘能力" },
    ]
  },

  // ========== 通用题 ==========
  common: {
    L1: [  // 应届生必问
      { text: "请用1分钟介绍一下你自己？", category: "自我介绍" },
      { text: "你的优势和劣势是什么？", category: "自我认知" },
      { text: "你为什么想做产品经理？", category: "动机" },
      { text: "你从之前的工作/实习中学到了什么？", category: "学习能力" },
      { text: "你的兴趣爱好是什么？", category: "个人特质" },
    ],
    L2: [  // 1-3年必问
      { text: "请介绍一个你从0到1的产品？", category: "项目经验" },
      { text: "你怎么做需求调研的？", category: "专业知识" },
      { text: "你和产品团队是怎么合作的？", category: "协作能力" },
      { text: "什么是MVP？怎么理解？", category: "专业知识" },
      { text: "你怎么做竞品分析的？", category: "专业知识" },
      { text: "你的职业规划是什么？", category: "职业规划" },
      { text: "你为什么离职？", category: "动机" },
    ],
    L3: [  // 3-5年必问
      { text: "你做过的最失败的产品决策是什么？", category: "复盘能力" },
      { text: "如果让你重新做这个项目，你会怎么做？", category: "复盘能力" },
      { text: "你的项目数据表现最好的是什么？", category: "数据思维" },
      { text: "什么是用户留存？怎么做？", category: "专业知识" },
      { text: "你熟悉哪些数据分析方法？", category: "专业知识" },
      { text: "你了解哪些增长策略？", category: "增长能力" },
      { text: "如果资源有限，只能做一个功能，你选哪个？", category: "决策能力" },
      { text: "如果你和老板对产品方向有分歧怎么办？", category: "协作能力" },
    ],
    L4: [  // 5年+必问
      { text: "如果你要做一款产品，你会怎么开始？", category: "产品规划" },
      { text: "如果用户反馈和数据分析矛盾，你听谁的？", category: "决策能力" },
      { text: "你怎么做产品规划？", category: "战略能力" },
      { text: "你管理过团队吗？怎么管理的？", category: "管理能力" },
      { text: "你招聘产品经理的标准是什么？", category: "管理能力" },
      { text: "如果你加入我们公司，你会怎么做？", category: "落地能力" },
    ]
  }
}

// 级别名称映射
export const levelNames = {
  L1: "应届生/转行",
  L2: "1-3年经验",
  L3: "3-5年经验",
  L4: "5年+经验"
}

// 根据级别获取题目
export const getQuestionsByLevel = (role, company = null, level = 'L2') => {
  const questions = []
  
  // 添加通用题
  if (pmQuestions.common[level]) {
    pmQuestions.common[level].forEach(q => {
      questions.push({ ...q, difficulty: level, company: '通用' })
    })
  }
  
  // 添加公司题
  if (company && pmQuestions[company] && pmQuestions[company][level]) {
    pmQuestions[company][level].forEach(q => {
      questions.push({ ...q, difficulty: level, company: company.toUpperCase() })
    })
  }
  
  return questions
}

// 获取所有题目（指定级别）
export const getAllQuestionsForLevel = (role, level = 'L2', count = 10) => {
  const allQuestions = []
  
  // 收集所有级别题目
  Object.entries(pmQuestions).forEach(([company, levels]) => {
    if (level === 'L2') {
      // L2: 70% L2 + 30% L1
      if (levels.L1) allQuestions.push(...levels.L1.map(q => ({ ...q, difficulty: 'L1', company: company === 'common' ? '通用' : company.toUpperCase() })))
      if (levels.L2) allQuestions.push(...levels.L2.map(q => ({ ...q, difficulty: 'L2', company: company === 'common' ? '通用' : company.toUpperCase() })))
    } else if (level === 'L3') {
      // L3: 20% L2 + 80% L3
      if (levels.L2) allQuestions.push(...levels.L2.map(q => ({ ...q, difficulty: 'L2', company: company === 'common' ? '通用' : company.toUpperCase() })))
      if (levels.L3) allQuestions.push(...levels.L3.map(q => ({ ...q, difficulty: 'L3', company: company === 'common' ? '通用' : company.toUpperCase() })))
    } else if (level === 'L4') {
      // L4: 20% L3 + 80% L4
      if (levels.L3) allQuestions.push(...levels.L3.map(q => ({ ...q, difficulty: 'L3', company: company === 'common' ? '通用' : company.toUpperCase() })))
      if (levels.L4) allQuestions.push(...levels.L4.map(q => ({ ...q, difficulty: 'L4', company: company === 'common' ? '通用' : company.toUpperCase() })))
    } else {
      // L1: 100% L1
      if (levels.L1) allQuestions.push(...levels.L1.map(q => ({ ...q, difficulty: 'L1', company: company === 'common' ? '通用' : company.toUpperCase() })))
    }
  })
  
  // 随机打乱并选择指定数量
  return allQuestions.sort(() => Math.random() - 0.5).slice(0, count)
}

// 统计题库数量
export const getQuestionStats = () => {
  let stats = {}
  Object.entries(pmQuestions).forEach(([company, levels]) => {
    let count = 0
    Object.values(levels).forEach(list => count += list.length)
    stats[company] = count
  })
  return stats
}
