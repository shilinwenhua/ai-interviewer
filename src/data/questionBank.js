// 面试题库 - 8-10 道题版本
export const questionBank = {
  pm: [
    { text: "请简单介绍一下你，以及为什么对这个岗位感兴趣？", category: "自我介绍", difficulty: "简单" },
    { text: "请介绍一下你最有代表性的产品项目？", category: "项目经验", difficulty: "简单" },
    { text: "你在项目中是如何进行需求分析的？", category: "需求分析", difficulty: "中等" },
    { text: "你如何定义产品需求优先级？", category: "需求管理", difficulty: "中等" },
    { text: "如果用户反馈一个功能不好用，你会怎么处理？", category: "用户思维", difficulty: "中等" },
    { text: "请描述一次你与开发团队产生分歧的经历，如何解决的？", category: "协作能力", difficulty: "较难" },
    { text: "你如何衡量一个功能的成功？", category: "数据思维", difficulty: "较难" },
    { text: "请说一下你对增长的理解，有哪些增长策略？", category: "增长思维", difficulty: "较难" },
    { text: "如果让你做一款新产品，你会从哪些方面入手？", category: "产品设计", difficulty: "较难" },
    { text: "你的职业规划是什么？", category: "职业规划", difficulty: "简单" },
  ],
  frontend: [
    { text: "请简单介绍一下你的前端经验和主要技术栈？", category: "自我介绍", difficulty: "简单" },
    { text: "Vue3 的 Composition API 和 Options API 有什么区别？", category: "框架原理", difficulty: "中等" },
    { text: "Vue3 的响应式原理是什么？", category: "框架原理", difficulty: "较难" },
    { text: "如何优化网页首屏加载性能？", category: "性能优化", difficulty: "中等" },
    { text: "解释一下 CSS 盒模型和 BFC 的概念？", category: "CSS基础", difficulty: "中等" },
    { text: "请手写一个防抖函数？", category: "Coding", difficulty: "中等" },
    { text: "请手写一个节流函数？", category: "Coding", difficulty: "中等" },
    { text: "什么是跨域？如何解决跨域问题？", category: "网络", difficulty: "较难" },
    { text: "浏览器的事件循环机制了解吗？", category: "原理", difficulty: "较难" },
    { text: "你做过哪些性能优化？", category: "性能优化", difficulty: "中等" },
  ],
  backend: [
    { text: "请简单介绍一下你的后端经验和主要技术栈？", category: "自我介绍", difficulty: "简单" },
    { text: "MySQL 和 MongoDB 的区别是什么？什么场景下选择 MongoDB？", category: "数据库", difficulty: "中等" },
    { text: "解释一下 RESTful API 的设计原则？", category: "API设计", difficulty: "中等" },
    { text: "如何保证接口的幂等性？", category: "架构设计", difficulty: "较难" },
    { text: "请描述一下缓存穿透、击穿、雪崩以及解决方案？", category: "系统设计", difficulty: "较难" },
    { text: "什么是索引？哪些情况会导致索引失效？", category: "数据库", difficulty: "较难" },
    { text: "讲一下你了解的分布式事务解决方案？", category: "架构", difficulty: "较难" },
    { text: "如何设计一个高并发系统？", category: "系统设计", difficulty: "较难" },
    { text: "Redis 有哪些数据结构？分别适用什么场景？", category: "缓存", difficulty: "中等" },
    { text: "介绍一下你常用的 Linux 命令？", category: "运维", difficulty: "简单" },
  ],
  运营: [
    { text: "请简单介绍一下你的运营经验和主要负责的业务？", category: "自我介绍", difficulty: "简单" },
    { text: "如何提升用户活跃度和留存率？", category: "用户增长", difficulty: "中等" },
    { text: "请举例说明一次成功的活动策划？", category: "活动运营", difficulty: "中等" },
    { text: "如果数据下滑，你会如何分析原因？", category: "数据分析", difficulty: "较难" },
    { text: "如何建立用户分层运营体系？", category: "精细化运营", difficulty: "较难" },
    { text: "请说一下你常用的数据分析方法？", category: "数据分析", difficulty: "中等" },
    { text: "如何提升用户的转化率？", category: "转化优化", difficulty: "较难" },
    { text: "请介绍一下你做过的增长案例？", category: "增长", difficulty: "中等" },
    { text: "如何衡量一个活动的成功？", category: "活动运营", difficulty: "中等" },
    { text: "你的职业规划是什么？", category: "职业规划", difficulty: "简单" },
  ],
}

// 角色名称映射
export const roleNames = {
  pm: '产品经理',
  frontend: '前端工程师',
  backend: '后端工程师',
  运营: '运营专员',
}
