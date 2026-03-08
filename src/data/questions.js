export const questions = [
  // 产品设计类
  {
    id: 1,
    category: "product",
    question: "如何设计一个AI推荐系统的产品方案？",
    answer: "1. 明确推荐场景（首页推荐/详情页推荐/搜索推荐）\n2. 确定推荐目标（点击率/转化率/留存）\n3. 设计特征工程：用户特征、内容特征、上下文特征\n4. 选择推荐算法：协同过滤/内容推荐/深度学习\n5. 评估指标：CTR/CVR/覆盖率/多样性\n6. 持续优化：A/B测试、用户反馈",
    difficulty: "hard",
    tags: ["推荐系统", "算法"]
  },
  {
    id: 2,
    category: "product",
    question: "如果让你做一款AI对话类产品，你会如何设计？",
    answer: "1. 明确产品定位：客服助手/情感陪伴/工具助手\n2. 核心功能：多轮对话/意图识别/知识库问答\n3. 交互设计：语音/文字/多模态\n4. 关键技术：NLU/对话管理/知识图谱\n5. 商业模式：订阅/按量计费/企业定制\n6. 冷启动策略：种子用户/数据积累",
    difficulty: "medium",
    tags: ["对话产品", "AI助手"]
  },
  {
    id: 3,
    category: "product",
    question: "如何评估一个AI产品的效果？",
    answer: "1. 业务指标：DAU/留存/转化率/收入\n2. 模型指标：准确率/召回率/F1值/响应时间\n3. 用户体验：满意度/反馈率/完成率\n4. 成本指标：算力成本/模型推理成本\n5. 对比基准：与竞品/与人工对比\n6. 长期价值：数据积累/模型迭代",
    difficulty: "medium",
    tags: ["效果评估", "指标"]
  },
  {
    id: 4,
    category: "product",
    question: "AI产品和传统互联网产品有什么本质区别？",
    answer: "1. 不确定性：AI输出不可控\n2. 数据依赖：效果高度依赖数据质量\n3. 迭代方式：模型训练周期长\n4. 可解释性：AI决策过程难以解释\n5. 成本结构：前期研发高，后期边际成本低\n6. 用户预期：用户对AI期望往往过高",
    difficulty: "easy",
    tags: ["AI产品", "认知"]
  },
  {
    id: 5,
    category: "product",
    question: "如何处理AI产品的冷启动问题？",
    answer: "1. 规则先行：用规则系统度过初期\n2. 众包数据：通过人工标注积累数据\n3. 迁移学习：用相似场景数据预训练\n4. 种子用户：找高质量用户贡献数据\n5. 激励体系：激励用户反馈数据\n6. 渐进优化：从简单场景逐步扩展",
    difficulty: "medium",
    tags: ["冷启动", "数据"]
  },
  {
    id: 6,
    category: "product",
    question: "如何确定AI产品的MVP？",
    answer: "1. 聚焦核心场景：选择痛点最强烈的场景\n2. 最小功能集：只做能验证核心假设的功能\n3. 人机结合：用人工弥补AI不足\n4. 快速迭代：2周一个迭代周期\n5. 成本可控：选择轻量级技术方案\n6. 指标明确：定义清晰的验证指标",
    difficulty: "medium",
    tags: ["MVP", "产品设计"]
  },
  {
    id: 7,
    category: "product",
    question: "如果AI模型效果突然下降30%，你会如何分析？",
    answer: "1. 查数据：检查数据Pipeline是否有异常\n2. 查特征：验证特征工程是否稳定\n3. 查模型：检查模型版本和训练数据\n4. 查上游：确认上游业务变化\n5. 查竞品：是否竞品有重大更新\n6. 做实验：AB测试对比新旧模型\n7. 回滚：必要时回滚到稳定版本",
    difficulty: "hard",
    tags: ["问题排查", "数据分析"]
  },
  {
    id: 8,
    category: "product",
    question: "如何平衡AI产品的用户体验和商业化？",
    answer: "1. 分层服务：免费版有限制，付费版全功能\n2. 价值感知：让用户看到付费带来的提升\n3. 渐进付费：在关键场景引导付费\n4. 避免骚扰：不要过度推送广告\n5. 透明定价：价格与价值匹配\n6. 长期价值：优先保证用户体验",
    difficulty: "medium",
    tags: ["商业化", "用户体验"]
  },
  {
    id: 9,
    category: "product",
    question: "说一个你做过的AI产品的失败案例及反思？",
    answer: "常见失败原因：\n1. 需求不真实：用户痛点不够痛\n2. 技术不成熟：AI能力达不到预期\n3. 数据不够：样本量不足以训练好模型\n4. 成本过高：商业价值覆盖不了投入\n\n反思：\n- 要深入了解AI能力边界\n- 要找到真实且付费意愿强的场景\n- 要从小场景切入验证",
    difficulty: "medium",
    tags: ["复盘", "经验"]
  },
  {
    id: 10,
    category: "product",
    question: "如何向投资人介绍你的AI产品？",
    answer: "1. 痛点：用户有什么问题需要解决\n2. 方案：AI如何解决这个问题\n3. 优势：为什么比竞品/人工更好\n4. 市场：市场规模和增长空间\n5. 商业模式：如何赚钱\n6. 团队：为什么你们能做成\n7. 里程碑：目前的进展和下一步计划",
    difficulty: "easy",
    tags: ["商业化", "融资"]
  },
  // 数据分析类
  {
    id: 11,
    category: "data",
    question: "如何设计一个AB测试实验？",
    answer: "1. 假设清晰：明确要验证的假设\n2. 指标选择：选择核心指标+护栏指标\n3. 流量分配：确定实验组/对照组比例\n4. 样本量：计算所需最小样本量\n5. 周期：确定实验时长（通常1-2周）\n6. 显著性：设定统计显著性水平\n7. 分析：对比实验组和对照组差异\n8. 决策：根据结果决定是否全量",
    difficulty: "hard",
    tags: ["AB测试", "实验设计"]
  },
  {
    id: 12,
    category: "data",
    question: "如何评估一个推荐模型的效果？",
    answer: "1. 离线指标：准确率/召回率/F1/AUC\n2. 在线指标：CTR/CVR/停留时长\n3. 业务指标：用户留存/GMV\n4. 负向指标：曝光多样性/用户投诉\n5. 长期指标：模型迭代效果\n6. 对比基准：与baseline/竞品对比",
    difficulty: "medium",
    tags: ["推荐系统", "效果评估"]
  },
  {
    id: 13,
    category: "data",
    question: "模型效果好的离线指标但上线效果不好，可能是什么原因？",
    answer: "1. 数据分布不一致：离线训练数据和在线数据分布不同\n2. 特征穿越：训练时使用了未来信息\n3. 反馈延迟：转化行为需要时间\n4. 曝光偏差：模型倾向于推荐高频item\n5. 冷启动：新用户/新item效果差\n6. 探索不足：推荐过于集中\n7. 指标不一致：离线指标和业务指标不对齐",
    difficulty: "hard",
    tags: ["问题排查", "模型优化"]
  },
  {
    id: 14,
    category: "data",
    question: "如何做用户留存分析？",
    answer: "1. 定义留存：次日/7日/30日留存\n2. 计算方法：cohort分析\n3. 分群维度：新用户来源/渠道/行为\n4. 分析维度：对比不同用户群留存\n5. 归因分析：找到影响留存的关键因素\n6. 优化策略：针对低留存原因优化\n7. 持续监控：建立留存指标体系",
    difficulty: "medium",
    tags: ["留存", "数据分析"]
  },
  {
    id: 15,
    category: "data",
    question: "如何建立AI产品的数据指标体系？",
    answer: "1. 业务指标：DAU/留存/转化/收入\n2. 模型指标：准确率/响应时间/覆盖率\n3. 用户指标：满意度/反馈率/完成率\n4. 成本指标：算力/存储/人力成本\n5. 质量指标：数据准确率/特征稳定性\n6. 监控告警：设置指标异常阈值",
    difficulty: "medium",
    tags: ["指标体系", "数据"]
  },
  {
    id: 16,
    category: "data",
    question: "如何提升模型的召回率？",
    answer: "1. 增加候选集：扩大召回来源\n2. 丰富特征：增加用户/物品特征\n3. 多路召回：融合多种召回策略\n4. 向量化：优化embedding效果\n5. 负采样：优化负样本策略\n6. 冷启动：解决新用户新物品召回\n7. 调整阈值：根据业务需求平衡precision/recall",
    difficulty: "hard",
    tags: ["召回", "模型优化"]
  },
  {
    id: 17,
    category: "data",
    question: "如何提升模型的准确率？",
    answer: "1. 数据质量：清洗脏数据，增加高质量样本\n2. 特征工程：提取更多有效特征\n3. 模型优化：选择更合适的模型架构\n4. 调参：超参数优化\n5. 集成学习：多模型融合\n6. 后处理：规则调整结果\n7. 业务规则：结合业务逻辑优化",
    difficulty: "medium",
    tags: ["准确率", "模型优化"]
  },
  {
    id: 18,
    category: "data",
    question: "如何处理数据标注质量问题？",
    answer: "1. 标注规范：制定清晰的标注指南\n2. 多人标注：用多个人标注取一致部分\n3. 交叉验证：定期抽查标注质量\n4. 众包优化：用众包平台筛选优质标注员\n5. 反馈机制：让标注员知道标注错误\n6. 自动化：用模型辅助标注",
    difficulty: "medium",
    tags: ["数据标注", "数据质量"]
  },
  // AI基础概念类
  {
    id: 19,
    category: "basic",
    question: "什么是RAG？RAG和微调有什么区别？",
    answer: "RAG (Retrieval Augmented Generation)：\n- 结合检索和生成的混合方案\n- 先从知识库检索相关文档，再生成答案\n- 优点：可更新知识库、可解释、成本低\n\n微调 (Fine-tuning)：\n- 在预训练模型基础上用特定数据训练\n- 优点：效果更好、一致性更强\n\n区别：RAG改的是知识，微调改的是能力",
    difficulty: "medium",
    tags: ["RAG", "微调", "概念"]
  },
  {
    id: 20,
    category: "basic",
    question: "什么是大模型的幻觉问题？如何解决？",
    answer: "幻觉（Hallucination）：\n- 模型生成的内容与事实不符\n\n解决方向：\n1. RAG：结合外部知识库\n2. CoT：让模型展示推理过程\n3. Prompt优化：明确要求基于事实\n4. 人工审核：关键场景人工复核\n5. 置信度：输出时附带置信度\n6. 后验纠正：用规则纠正明显错误",
    difficulty: "medium",
    tags: ["幻觉", "大模型"]
  },
  {
    id: 21,
    category: "basic",
    question: "什么是模型的过拟合？如何判断和处理？",
    answer: "过拟合：\n- 模型在训练数据上表现好，但测试数据上差\n\n判断方法：\n1. 训练集准确率高，测试集准确率低\n2. 验证集loss不再下降甚至上升\n\n处理方法：\n1. 增加数据量\n2. 正则化（L1/L2）\n3. Dropout\n4. 早停（Early Stopping）\n5. 简化模型复杂度",
    difficulty: "easy",
    tags: ["过拟合", "概念"]
  },
  {
    id: 22,
    category: "basic",
    question: "什么是召回率(Recall)和精确率(Precision)？",
    answer: "召回率(Recall)：\n- 实际正例中预测对了多少\n- 公式：TP / (TP + FN)\n\n精确率(Precision)：\n- 预测为正的里面实际对了多少\n- 公式：TP / (TP + FP)\n\nF1值：\n- Precision和Recall的调和平均\n- F1 = 2 * P * R / (P + R)",
    difficulty: "easy",
    tags: ["指标", "概念"]
  },
  {
    id: 23,
    category: "basic",
    question: "什么是迁移学习？",
    answer: "迁移学习(Transfer Learning)：\n- 将一个任务上学到的知识迁移到另一个任务\n\n常见方式：\n1. 预训练+微调：用大规模数据预训练，在小数据上微调\n2. 特征提取：冻结底层参数，只训练顶层\n3. 多任务学习：同时学习多个相关任务\n\n应用场景：新产品冷启动、数据稀缺的垂直领域",
    difficulty: "easy",
    tags: ["迁移学习", "概念"]
  },
  {
    id: 24,
    category: "basic",
    question: "什么是提示工程(Prompt Engineering)？",
    answer: "提示工程：\n- 通过设计输入提示词来引导模型输出\n- 不需要改模型参数\n\n常见技巧：\n1. Few-shot：给几个例子让模型学习\n2. CoT：让模型展示推理过程\n3. 角色设定：设定AI扮演的角色\n4. 格式指定：指定输出格式\n5. 条件约束：添加限制条件",
    difficulty: "easy",
    tags: ["Prompt", "概念"]
  },
  {
    id: 25,
    category: "basic",
    question: "什么是指令微调(Instruction Tuning)？",
    answer: "指令微调：\n- 用指令-响应对数据微调模型\n- 让模型理解并执行各种指令\n\n与预训练区别：\n- 预训练：预测下一个token\n- 指令微调：学习根据指令生成响应\n\n数据格式：\n- Instruction + Input + Output\n\n效果：提升指令遵循能力、改善对话质量",
    difficulty: "medium",
    tags: ["微调", "概念"]
  },
  {
    id: 26,
    category: "basic",
    question: "什么Token？为什么大模型按Token计费？",
    answer: "Token：\n- 语言模型处理的基本单位\n- 1个中文约1-3个Token\n- 1个英文单词约1-2个Token\n\n为什么按Token计费：\n1. 计算资源：Token数决定推理计算量\n2. 内存占用：Token数决定显存占用\n3. 成本相关：API成本与Token直接相关",
    difficulty: "easy",
    tags: ["Token", "概念"]
  },
  {
    id: 27,
    category: "basic",
    question: "什么是对比学习(Contrastive Learning)？",
    answer: "对比学习：\n- 通过对比正负样本学习embedding\n- 相似样本距离近，不相似距离远\n\n应用场景：\n1. 推荐系统：学习用户/物品embedding\n2. 图像检索：学习图片embedding\n3. NLP：学习句子/词向量\n\n优点：不需要标注数据，学习到语义相似性",
    difficulty: "hard",
    tags: ["对比学习", "概念"]
  },
  {
    id: 28,
    category: "basic",
    question: "什么是Agent？Agent和普通AI应用有什么区别？",
    answer: "Agent（智能体）：\n- 能够自主感知、决策、执行的AI系统\n\n核心能力：\n1. 感知：理解环境\n2. 规划：分解任务、制定计划\n3. 执行：调用工具、执行动作\n4. 反思：根据反馈调整策略\n\nvs 普通AI：普通AI一问一答，Agent主动规划自动执行",
    difficulty: "medium",
    tags: ["Agent", "概念"]
  },
  {
    id: 29,
    category: "basic",
    question: "为什么现在的大模型能理解上下文？",
    answer: "核心机制：Attention（注意力机制）\n\n工作原理：\n- 每个token都能关注到其他所有token\n- 根据相关性分配权重\n\nTransformer架构：\n- 2017年提出，基于Attention\n- 并行处理，效率高\n- 可以处理任意长度序列\n\nContext Window：能处理的上下文长度",
    difficulty: "hard",
    tags: ["Transformer", "原理"]
  },
  {
    id: 30,
    category: "basic",
    question: "什么是Embedding？Embedding有什么用？",
    answer: "Embedding（嵌入）：\n- 将离散的高维数据映射到连续的向量空间\n\n常见类型：\n- Word2Vec/GloVe：词向量\n- BERT：句子向量\n- 推荐系统：用户/物品向量\n\n应用场景：\n1. 相似度计算：找相似内容\n2. 聚类分析：用户分群\n3. 特征输入：作为模型的输入\n4. 降维可视化：高维数据可视化",
    difficulty: "easy",
    tags: ["Embedding", "概念"]
  }
];
