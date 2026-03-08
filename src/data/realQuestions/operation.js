// 真实面试题库 - 运营（难度分级版）

export const operationQuestions = {
  // ========== 字节跳动 ==========
  bytedance: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
      { text: "你为什么想加入字节跳动？", category: "动机" },
      { text: "你觉得自己做运营的优势是什么？", category: "自我认知" },
    ],
    L2: [
      { text: "请介绍一下你最有代表性的运营项目？", category: "项目经验" },
      { text: "这个项目的数据表现怎么样？", category: "数据分析" },
      { text: "你怎么做数据分析的？", category: "技能" },
    ],
    L3: [
      { text: "你怎么做用户增长的？", category: "增长" },
      { text: "你做过最成功的活动是什么？", category: "活动" },
      { text: "什么是留存？怎么提升留存？", category: "专业知识" },
    ],
    L4: [
      { text: "如果让你从0做一个新业务的运营，你会怎么做？", category: "规划" },
      { text: "如果数据下滑了，你会怎么分析？", category: "分析" },
    ]
  },

  // ========== 阿里巴巴 ==========
  alibaba: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
    ],
    L2: [
      { text: "请介绍一个电商运营项目？", category: "项目经验" },
      { text: "你怎么做店铺运营的？", category: "技能" },
    ],
    L3: [
      { text: "你了解淘宝的运营体系吗？", category: "业务" },
      { text: "什么是 GMV？怎么提升？", category: "业务" },
      { text: "你会看哪些数据指标？", category: "技能" },
    ],
    L4: [
      { text: "双11怎么策划活动？", category: "活动" },
    ]
  },

  // ========== 腾讯 ==========
  tencent: {
    L1: [],
    L2: [
      { text: "请介绍一个内容运营项目？", category: "项目经验" },
    ],
    L3: [
      { text: "你了解内容运营吗？", category: "技能" },
      { text: "怎么做内容分发？", category: "技能" },
    ],
    L4: []
  },

  // ========== 百度 ==========
  baidu: {
    L1: [],
    L2: [],
    L3: [
      { text: "你了解搜索运营吗？", category: "技能" },
    ],
    L4: []
  },

  // ========== 美团 ==========
  meituan: {
    L1: [],
    L2: [
      { text: "请介绍一个本地生活运营项目？", category: "项目经验" },
    ],
    L3: [
      { text: "你了解 O2O 运营吗？", category: "业务" },
      { text: "怎么做商家运营？", category: "技能" },
    ],
    L4: []
  },

  // ========== 通用题 ==========
  common: {
    L1: [
      { text: "请用3分钟介绍一下你自己？", category: "自我介绍" },
      { text: "你的优势和劣势是什么？", category: "自我认知" },
      { text: "你为什么想做运营？", category: "动机" },
      { text: "你的兴趣爱好是什么？", category: "个人特质" },
      { text: "你的职业规划是什么？", category: "职业规划" },
    ],
    L2: [
      { text: "请介绍一个你负责的运营项目？", category: "项目经验" },
      { text: "你的项目数据表现怎么样？", category: "数据分析" },
      { text: "你和产品是怎么配合的？", category: "协作" },
      { text: "什么是 ROI？怎么计算？", category: "基础知识" },
    ],
    L3: [
      { text: "你做过最成功的活动是什么？", category: "活动" },
      { text: "你了解哪些运营模型？", category: "专业知识" },
      { text: "什么是用户分层运营？", category: "专业知识" },
      { text: "怎么做用户增长？", category: "增长" },
      { text: "你常用的数据分析方法有哪些？", category: "技能" },
    ],
    L4: [
      { text: "如果从0做一个新业务，你会怎么运营？", category: "规划" },
      { text: "如果数据下滑了，你会怎么分析？", category: "分析" },
      { text: "如果让你做一个活动，你会怎么策划？", category: "活动" },
      { text: "你怎么做团队管理？", category: "管理" },
      { text: "你如何制定运营策略？", category: "策略" },
    ]
  }
}

// 获取所有题目（指定级别）
export const getAllOperationQuestions = (company = null, level = 'L2', count = 10) => {
  const allQuestions = []
  
  Object.entries(operationQuestions).forEach(([companyKey, levels]) => {
    const companyName = companyKey === 'common' ? '通用' : companyKey.toUpperCase()
    
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
  
  return allQuestions.sort(() => Math.random() - 0.5).slice(0, count)
}
