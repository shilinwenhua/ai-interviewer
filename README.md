# AI面试助手 - 项目维护文档

## ⚠️ 重要：代码存放规则

**所有代码必须存放在 `/Users/liusicheng/.openclaw/workspace-feishuB/ai-interviewer/` 目录下，禁止放桌面！**

---

## 项目结构

```
ai-interviewer/
├── src/
│   ├── App.jsx              # 主应用（最新 V5.0）
│   ├── components/
│   │   ├── LoginPage.jsx    # 登录页
│   │   ├── RegisterPage.jsx # 注册页
│   │   ├── AIInterviewPage.jsx # AI面试页面
│   │   ├── AbilityRadar.jsx # 能力雷达图
│   │   └── InterviewHistory.jsx # 面试历史
│   ├── main.jsx            # 入口
│   └── ...
├── 产品文档/                 # 需求文档（从桌面复制）
│   ├── V5.0版本产品需求文档.md
│   ├── V5.0_UI设计稿.md
│   └── V6.0_社区版产品需求文档.md
├── dist/                   # 构建产物
├── package.json
└── vite.config.js
```

---

## 版本历史

| 版本 | 状态 | 说明 |
|------|------|------|
| V1.0 | ✅ 完成 | 题库浏览（30道题） |
| V2.0 | ✅ 完成 | 简历解析、收藏、复习记录 |
| V3.0 | ✅ 完成 | AI问答（接入硅基流动API） |
| V4.0 | ✅ 完成 | 用户系统（昵称登录） |
| V5.0 | 🔄 开发中 | 邮箱密码登录 + 深色主题 + 现代化UI |
| V6.0 | 📋 规划中 | 社区版（帖子、评论、点赞） |

---

## 开发命令

```bash
cd ai-interviewer

# 安装依赖
npm install

# 开发模式（端口 5173）
npm run dev

# 构建生产版本
npm run build
```

---

## 维护记录

- **2026-03-07**: 代码从桌面迁移到 workspace，统一管理
- **2026-03-07**: V2.0 智能面试流程上线（选择角色→公司→JD→答题→AI反馈）
- **2026-03-07**: 真实面试题库整理完成
  - 产品经理：50+ 题（按公司+题型分类）
  - 前端工程师：40+ 题
  - 后端工程师：40+ 题
  - 运营：30+ 题
  - 覆盖公司：字节、阿里、腾讯、百度、美团、京东、滴滴、Meta、Google、Amazon

---

## 题库说明

真实面试题库位于 `src/data/realQuestions/`：
- `pm.js` - 产品经理题库
- `frontend.js` - 前端工程师题库
- `backend.js` - 后端工程师题库
- `operation.js` - 运营题库

题型分类：自我介绍、项目经验、专业知识、场景题、Coding、行为题
