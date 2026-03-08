// 真实面试题库 - 后端工程师（难度分级版）

export const backendQuestions = {
  // ========== 字节跳动 ==========
  bytedance: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
      { text: "你为什么想加入字节跳动？", category: "动机" },
      { text: "你觉得自己做后端的优势是什么？", category: "自我认知" },
      { text: "你常用的编程语言是什么？", category: "基础知识" },
      { text: "你了解 HTTP 协议吗？", category: "基础知识" },
    ],
    L2: [
      { text: "请介绍一下你最有代表性的后端项目？", category: "项目经验" },
      { text: "Go 和 Java 的区别是什么？", category: "语言" },
      { text: "什么是微服务？", category: "架构" },
      { text: "MySQL 和 Redis 的区别？", category: "数据库" },
      { text: "Redis 有哪些数据结构？", category: "数据库" },
    ],
    L3: [
      { text: "你了解 Go 的并发吗？什么是 Goroutine？", category: "语言" },
      { text: "你怎么做服务架构设计的？", category: "架构" },
      { text: "你负责的项目 QPS 是多少？", category: "性能" },
      { text: "MySQL 的索引原理是什么？", category: "数据库" },
      { text: "哪些情况会导致索引失效？", category: "数据库" },
    ],
    L4: [
      { text: "如何设计一个高并发系统？", category: "系统设计" },
      { text: "如何保证接口的幂等性？", category: "架构" },
      { text: "分布式事务了解吗？", category: "架构" },
      { text: "如何设计一个短链接系统？", category: "系统设计" },
    ]
  },

  // ========== 阿里巴巴 ==========
  alibaba: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
      { text: "你为什么选择阿里？", category: "动机" },
    ],
    L2: [
      { text: "请介绍一个电商交易系统项目？", category: "项目经验" },
      { text: "Java 的 JVM 了解吗？", category: "语言" },
    ],
    L3: [
      { text: "你怎么做双11高并发保障的？", category: "高并发" },
      { text: "什么是 GC？有哪些垃圾回收算法？", category: "原理" },
      { text: "Spring Cloud 了解哪些组件？", category: "框架" },
    ],
    L4: [
      { text: "如何设计一个秒杀系统？", category: "系统设计" },
      { text: "如何设计一个库存扣减系统？", category: "系统设计" },
    ]
  },

  // ========== 腾讯 ==========
  tencent: {
    L1: [
      { text: "请简单介绍一下你自己？", category: "自我介绍" },
    ],
    L2: [
      { text: "请介绍一个 IM 即时通讯项目？", category: "项目经验" },
      { text: "TCP 和 UDP 的区别？", category: "网络" },
    ],
    L3: [
      { text: "你怎么做消息可靠投递的？", category: "消息队列" },
      { text: "你了解高并发长连接吗？", category: "网络" },
    ],
    L4: [
      { text: "如何设计一个微信消息系统？", category: "系统设计" },
    ]
  },

  // ========== 百度 ==========
  baidu: {
    L1: [],
    L2: [
      { text: "请介绍一个搜索推荐项目？", category: "项目经验" },
    ],
    L3: [
      { text: "你了解搜索引擎原理吗？", category: "原理" },
      { text: "Elasticsearch 了解吗？", category: "技术" },
    ],
    L4: []
  },

  // ========== 美团 ==========
  meituan: {
    L1: [],
    L2: [
      { text: "请介绍一个交易系统项目？", category: "项目经验" },
    ],
    L3: [
      { text: "你了解O2O交易流程吗？", category: "业务" },
      { text: "怎么保证订单不超时？", category: "技术" },
    ],
    L4: []
  },

  // ========== 通用题 ==========
  common: {
    L1: [
      { text: "请用3分钟介绍一下你自己？", category: "自我介绍" },
      { text: "你的优势和劣势是什么？", category: "自我认知" },
      { text: "你为什么想做后端？", category: "动机" },
      { text: "你的职业规划是什么？", category: "职业规划" },
    ],
    L2: [
      { text: "请介绍一个你负责的后端项目？", category: "项目经验" },
      { text: "你主要负责哪个模块？", category: "项目经验" },
      { text: "你的项目技术栈是什么？", category: "技术栈" },
      { text: "什么是 RESTful API？", category: "基础知识" },
      { text: "Git 常用命令有哪些？", category: "工具" },
    ],
    L3: [
      { text: "你做过哪些性能优化？", category: "性能" },
      { text: "你遇到过最棘手的技术问题是什么？", category: "问题解决" },
      { text: "Redis 持久化机制了解吗？", category: "数据库" },
      { text: "RabbitMQ 和 Kafka 的区别？", category: "消息队列" },
      { text: "接口超时怎么排查？", category: "问题解决" },
      { text: "Docker 了解吗？", category: "技术" },
    ],
    L4: [
      { text: "如何设计一个高并发系统？", category: "系统设计" },
      { text: "如何设计一个抢红包系统？", category: "系统设计" },
      { text: "如何设计一个 Feed 流系统？", category: "系统设计" },
      { text: "如何设计一个评论系统？", category: "系统设计" },
      { text: "你怎么做技术选型？", category: "技术决策" },
      { text: "你如何保证系统高可用？", category: "架构" },
    ]
  }
}

// 获取所有题目（指定级别）
export const getAllBackendQuestions = (company = null, level = 'L2', count = 10) => {
  const allQuestions = []
  
  Object.entries(backendQuestions).forEach(([companyKey, levels]) => {
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
