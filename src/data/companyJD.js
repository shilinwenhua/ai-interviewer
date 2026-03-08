// 公司和职位 JD 数据
export const companyList = [
  // 国内大厂
  { id: 'bytedance', name: '字节跳动', logo: '🚀', type: '国内', enName: 'ByteDance' },
  { id: 'alibaba', name: '阿里', logo: '🅰️', type: '国内', enName: 'Alibaba' },
  { id: 'tencent', name: '腾讯', logo: '🐧', type: '国内', enName: 'Tencent' },
  { id: 'baidu', name: '百度', logo: '🔍', type: '国内', enName: 'Baidu' },
  { id: 'meituan', name: '美团', logo: '🍜', type: '国内', enName: 'Meituan' },
  { id: 'jd', name: '京东', logo: '🐶', type: '国内', enName: 'JD' },
  { id: 'didi', name: '滴滴', logo: '🚗', type: '国内', enName: 'DiDi' },
  // 外企
  { id: 'meta', name: 'Meta', logo: '📘', type: '外企', enName: 'Meta' },
  { id: 'google', name: 'Google', logo: '🔵', type: '外企', enName: 'Google' },
  { id: 'amazon', name: 'Amazon', logo: '📦', type: '外企', enName: 'Amazon' },
  { id: 'apple', name: 'Apple', logo: '🍎', type: '外企', enName: 'Apple' },
  { id: 'microsoft', name: 'Microsoft', logo: '🪟', type: '外企', enName: 'Microsoft' },
]

export const positionJD = {
  bytedance: {
    pm: { 
      title: '产品经理', 
      salary: '25-45K', 
      requirements: [
        '3年以上产品经验，有成功项目案例',
        '具备数据驱动思维，熟练使用数据分析工具',
        '有增长思维，了解用户增长策略',
        '沟通能力强，能协调多方资源',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责字节跳动核心产品设计',
        '分析用户需求，输出产品方案',
        '跟踪产品数据，持续优化迭代',
        '协调设计、开发、运营团队'
      ]
    },
    frontend: { 
      title: '前端工程师', 
      salary: '25-50K', 
      requirements: [
        '3年以上前端开发经验',
        '精通 Vue/React，熟悉工程化',
        '了解性能优化，有大型项目经验',
        '熟悉 TypeScript',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责产品前端开发',
        '优化页面性能',
        '参与技术架构设计'
      ]
    },
    backend: { 
      title: '后端工程师', 
      salary: '25-55K', 
      requirements: [
        '3年以上后端开发经验',
        '精通 Go/Java，熟悉微服务',
        '有高并发系统设计经验',
        '熟悉 MySQL/Redis',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责业务后端开发',
        '设计高可用架构',
        '优化系统性能'
      ]
    },
    运营: { 
      title: '用户运营', 
      salary: '20-40K', 
      requirements: [
        '3年以上用户运营经验',
        '熟悉用户增长策略',
        '数据分析能力强',
        '有成功运营案例',
        '本科及以上学历'
      ],
      responsibilities: [
        '制定用户增长策略',
        '负责用户生命周期管理',
        '提升用户活跃度和留存'
      ]
    }
  },
  alibaba: {
    pm: { 
      title: '产品经理', 
      salary: '25-50K', 
      requirements: [
        '3年以上电商产品经验',
        '熟悉电商交易流程',
        '具备平台思维',
        '有数据分析和决策能力',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责阿里系电商产品设计',
        '优化交易链路',
        '提升用户体验'
      ]
    },
    frontend: { 
      title: '前端工程师', 
      salary: '25-50K', 
      requirements: [
        '3年以上前端经验',
        '精通 React/Vue',
        '有电商项目经验',
        '熟悉 Node.js',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责前端页面开发',
        '优化性能',
        '建设组件库'
      ]
    },
    backend: { 
      title: '后端工程师', 
      salary: '25-55K', 
      requirements: [
        '3年以上后端经验',
        '精通 Java，熟悉 Spring Cloud',
        '有电商交易系统经验',
        '熟悉分布式系统',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责业务后端开发',
        '高并发系统设计',
        '保障系统稳定性'
      ]
    },
    运营: { 
      title: '店铺运营', 
      salary: '18-35K', 
      requirements: [
        '3年以上电商运营经验',
        '熟悉店铺运营策略',
        '数据分析能力强',
        '有618/双11经验',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责店铺日常运营',
        '制定营销活动',
        '提升店铺销量'
      ]
    }
  },
  tencent: {
    pm: { 
      title: '产品经理', 
      salary: '25-45K', 
      requirements: [
        '3年以上产品经验',
        '有社交/内容产品经验优先',
        '熟悉用户研究方法',
        '沟通协调能力强',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责微信/QQ等产品设计',
        '分析用户需求',
        '推动产品迭代'
      ]
    },
    frontend: { 
      title: '前端工程师', 
      salary: '25-50K', 
      requirements: [
        '3年以上前端经验',
        '熟悉 React 或 Vue',
        '有微信小程序经验优先',
        '性能优化能力强',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责前端开发',
        '优化性能',
        '提升用户体验'
      ]
    },
    backend: { 
      title: '后端工程师', 
      salary: '25-55K', 
      requirements: [
        '3年以上后端经验',
        '精通 C++/Go/Java',
        '有IM/社交项目经验',
        '熟悉高并发系统',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责后端架构设计',
        '保障系统高可用',
        '优化性能'
      ]
    },
    运营: { 
      title: '内容运营', 
      salary: '20-40K', 
      requirements: [
        '3年以上内容运营经验',
        '熟悉内容生态',
        '有成功内容案例',
        '数据分析能力',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责内容策略制定',
        '提升内容质量',
        '优化内容分发'
      ]
    }
  },
  baidu: {
    pm: { 
      title: 'AI产品经理', 
      salary: '25-50K', 
      requirements: [
        '3年以上产品经验',
        '懂 AI 技术优先',
        '有搜索/推荐产品经验',
        '数据驱动思维',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责 AI 相关产品设计',
        '探索 AI 应用场景',
        '推动 AI 产品落地'
      ]
    },
    frontend: { 
      title: '前端工程师', 
      salary: '25-50K', 
      requirements: [
        '3年以上前端经验',
        '熟悉 Vue/React',
        '了解 AI 产品',
        '工程化能力强',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责前端开发',
        '优化用户体验',
        '提升页面性能'
      ]
    },
    backend: { 
      title: '后端工程师', 
      salary: '25-55K', 
      requirements: [
        '3年以上后端经验',
        '精通 Python/Go',
        '有 AI 平台经验优先',
        '熟悉大数据处理',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责 AI 平台后端开发',
        '优化算法服务',
        '保障系统稳定'
      ]
    },
    运营: { 
      title: '搜索运营', 
      salary: '18-35K', 
      requirements: [
        '3年以上搜索运营经验',
        '熟悉搜索算法',
        '数据分析能力强',
        '有 NLP 相关背景优先',
        '本科及以上学历'
      ],
      responsibilities: [
        '优化搜索质量',
        '分析搜索数据',
        '提升用户体验'
      ]
    }
  },
  meituan: {
    pm: { 
      title: '产品经理', 
      salary: '22-40K', 
      requirements: [
        '3年以上产品经验',
        '有 O2O/本地生活经验',
        '了解履约产品',
        '跨部门协调能力',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责本地生活产品设计',
        '优化用户体验',
        '提升交易效率'
      ]
    },
    frontend: { 
      title: '前端工程师', 
      salary: '22-45K', 
      requirements: [
        '3年以上前端经验',
        '熟悉 React/Vue',
        '有小程序开发经验',
        '性能优化能力',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责前端开发',
        '优化页面性能',
        '提升用户体验'
      ]
    },
    backend: { 
      title: '后端工程师', 
      salary: '25-50K', 
      requirements: [
        '3年以上后端经验',
        '精通 Java/Go',
        '有交易系统经验',
        '熟悉高并发',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责交易系统开发',
        '优化系统性能',
        '保障稳定性'
      ]
    },
    运营: { 
      title: '商家运营', 
      salary: '18-35K', 
      requirements: [
        '3年以上商家运营经验',
        '熟悉本地商家',
        '谈判能力强者优先',
        '数据分析能力',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责商家拓展',
        '提升商家活跃度',
        '优化商家服务'
      ]
    }
  },
  jd: {
    pm: { 
      title: '产品经理', 
      salary: '22-40K', 
      requirements: [
        '3年以上产品经验',
        '有电商/供应链经验',
        '熟悉供应链产品',
        '数据驱动思维',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责电商产品设计',
        '优化供应链效率',
        '提升用户体验'
      ]
    },
    frontend: { 
      title: '前端工程师', 
      salary: '22-45K', 
      requirements: [
        '3年以上前端经验',
        '熟悉 Vue/React',
        '有电商项目经验',
        '性能优化能力',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责前端开发',
        '优化页面性能',
        '提升用户体验'
      ]
    },
    backend: { 
      title: '后端工程师', 
      salary: '25-50K', 
      requirements: [
        '3年以上后端经验',
        '精通 Java',
        '有电商系统经验',
        '熟悉供应链业务',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责电商后端开发',
        '优化系统性能',
        '保障稳定性'
      ]
    },
    运营: { 
      title: '品类运营', 
      salary: '18-35K', 
      requirements: [
        '3年以上品类运营经验',
        '熟悉电商品类',
        '数据分析能力强',
        '有供应链背景优先',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责品类规划',
        '制定营销策略',
        '提升品类销量'
      ]
    }
  },
  didi: {
    pm: { 
      title: '产品经理', 
      salary: '22-40K', 
      requirements: [
        '3年以上产品经验',
        '有出行/交易平台经验',
        '了解出行行业',
        '跨部门协调能力',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责出行产品设计',
        '优化用户体验',
        '提升交易效率'
      ]
    },
    frontend: { 
      title: '前端工程师', 
      salary: '22-45K', 
      requirements: [
        '3年以上前端经验',
        '熟悉 React/Vue',
        '有地图/LBS 项目经验',
        '性能优化能力',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责前端开发',
        '优化地图性能',
        '提升用户体验'
      ]
    },
    backend: { 
      title: '后端工程师', 
      salary: '25-50K', 
      requirements: [
        '3年以上后端经验',
        '精通 Go/Java',
        '有出行/调度系统经验',
        '熟悉高并发',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责出行系统后端开发',
        '优化调度算法',
        '保障系统稳定性'
      ]
    },
    运营: { 
      title: '出行运营', 
      salary: '18-35K', 
      requirements: [
        '3年以上出行运营经验',
        '熟悉出行行业',
        '数据分析能力强',
        '有城市运营经验',
        '本科及以上学历'
      ],
      responsibilities: [
        '负责城市运营',
        '提升订单量',
        '优化用户体验'
      ]
    }
  },
  // 外企
  meta: {
    pm: { 
      title: 'Product Manager', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years product management experience',
        'Experience with global products',
        'Strong data-driven mindset',
        'Excellent English communication',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Drive product strategy for global markets',
        'Work with engineering and design teams',
        'Define metrics and measure success',
        'Communicate product vision'
      ],
      isEnglish: true
    },
    frontend: { 
      title: 'Frontend Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years frontend experience',
        'Proficient in React',
        'Experience with large-scale apps',
        'Strong CS fundamentals',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build product features',
        'Optimize performance',
        'Collaborate with design'
      ],
      isEnglish: true
    },
    backend: { 
      title: 'Backend Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years backend experience',
        'Proficient in Go/Python/Hack',
        'Experience with distributed systems',
        'Strong system design skills',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build scalable systems',
        'Optimize system performance',
        'Ensure system reliability'
      ],
      isEnglish: true
    },
    运营: { 
      title: 'Growth Manager', 
      salary: '$120k-200k', 
      requirements: [
        '5+ years growth experience',
        'Data-driven mindset',
        'Experience with global products',
        'Strong analytical skills',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Drive user growth strategies',
        'Analyze user behavior',
        'Optimize acquisition funnel'
      ],
      isEnglish: true
    }
  },
  google: {
    pm: { 
      title: 'Product Manager', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years PM experience',
        'Technical background preferred',
        'Experience with search/AI products',
        'Strong analytical skills',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Define product roadmap',
        'Work with engineering',
        'Drive product launches',
        'Measure and optimize'
      ],
      isEnglish: true
    },
    frontend: { 
      title: 'Frontend Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years frontend experience',
        'Proficient in JavaScript/TypeScript',
        'Experience with complex UIs',
        'Web performance expertise',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build Google products',
        'Optimize performance',
        'Improve user experience'
      ],
      isEnglish: true
    },
    backend: { 
      title: 'Software Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years software engineering',
        'Proficient in Go/Java/Python',
        'Strong system design skills',
        'Distributed systems experience',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build scalable backend systems',
        'Design and implement APIs',
        'Ensure system reliability'
      ],
      isEnglish: true
    },
    运营: { 
      title: 'Product Expert', 
      salary: '$100k-180k', 
      requirements: [
        '3+ years product experience',
        'Deep product knowledge',
        'Excellent communication',
        'Data-driven mindset',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Support product strategy',
        'Analyze product metrics',
        'Improve user experience'
      ],
      isEnglish: true
    }
  },
  amazon: {
    pm: { 
      title: 'Product Manager', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years PM experience',
        'Customer obsession',
        'Strong analytical skills',
        'Experience with AWS/EC2 preferred',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Define product vision',
        'Drive customer obsession',
        'Work with engineering',
        'Deliver results'
      ],
      isEnglish: true
    },
    frontend: { 
      title: 'Frontend Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years frontend experience',
        'Proficient in React/Angular',
        'Experience with AWS',
        'Strong problem-solving skills',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build customer-facing features',
        'Optimize performance',
        'Ensure quality'
      ],
      isEnglish: true
    },
    backend: { 
      title: 'Software Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years software engineering',
        'Proficient in Java/Python',
        'AWS experience preferred',
        'Strong system design',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build AWS services',
        'Design scalable systems',
        'Ensure availability'
      ],
      isEnglish: true
    },
    运营: { 
      title: 'Category Manager', 
      salary: '$100k-180k', 
      requirements: [
        '5+ years category management',
        'E-commerce experience',
        'Strong analytical skills',
        'Supplier management',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Manage product category',
        'Drive sales and growth',
        'Optimize catalog'
      ],
      isEnglish: true
    }
  },
  apple: {
    pm: { 
      title: 'Product Manager', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years PM experience',
        'Design thinking',
        'Hardware+Software integration',
        'Excellent communication',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Define product strategy',
        'Work with design and engineering',
        'Deliver seamless experience',
        'Drive product vision'
      ],
      isEnglish: true
    },
    frontend: { 
      title: 'Frontend Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years frontend experience',
        'Proficient in Swift/React',
        'Apple platform experience',
        'Strong UI/UX sense',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build Apple platform apps',
        'Create beautiful interfaces',
        'Optimize performance'
      ],
      isEnglish: true
    },
    backend: { 
      title: 'Software Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years software engineering',
        'Proficient in Swift/Go',
        'System design skills',
        'Apple ecosystem experience',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build Apple services',
        'Design scalable systems',
        'Ensure quality'
      ],
      isEnglish: true
    },
    运营: { 
      title: 'Product Operations', 
      salary: '$100k-180k', 
      requirements: [
        '5+ years operations experience',
        'Apple product knowledge',
        'Strong analytical skills',
        'Project management',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Support product launches',
        'Analyze metrics',
        'Improve operations'
      ],
      isEnglish: true
    }
  },
  microsoft: {
    pm: { 
      title: 'Product Manager', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years PM experience',
        'Cloud products experience',
        'Enterprise background preferred',
        'Strong communication',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Define product roadmap',
        'Drive cloud product strategy',
        'Work with engineering',
        'Deliver customer value'
      ],
      isEnglish: true
    },
    frontend: { 
      title: 'Frontend Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years frontend experience',
        'Proficient in TypeScript/React',
        'Microsoft ecosystem',
        'Cloud knowledge',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build Microsoft products',
        'Create intuitive UIs',
        'Optimize performance'
      ],
      isEnglish: true
    },
    backend: { 
      title: 'Software Engineer', 
      salary: '$150k-250k', 
      requirements: [
        '5+ years software engineering',
        'Proficient in C#/Go/Node.js',
        'Azure experience preferred',
        'Strong system design',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Build Azure services',
        'Design scalable systems',
        'Ensure reliability'
      ],
      isEnglish: true
    },
    运营: { 
      title: 'Technical Evangelist', 
      salary: '$100k-180k', 
      requirements: [
        '5+ years developer relations',
        'Technical background',
        'Strong communication',
        'Community building',
        'BS/BA degree or equivalent'
      ],
      responsibilities: [
        'Engage developer community',
        'Create technical content',
        'Drive adoption'
      ],
      isEnglish: true
    }
  }
}

// 获取职位列表
export const getPositions = (companyId) => {
  const company = positionJD[companyId]
  if (!company) return []
  return Object.entries(company).map(([key, value]) => ({
    id: key,
    ...value
  }))
}
