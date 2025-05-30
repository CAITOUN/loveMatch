# 问卷页面 (Questionnaire)

## 功能概述
- **多维度问卷**：涵盖性格、情感需求、生活方式、未来规划等方面
- **动态问题调整**：根据用户回答智能调整后续问题
- **进度保存**：支持断点续答，实时保存用户进度
- **响应式设计**：适配移动端和桌面端
- **数据安全**：确保用户数据安全和隐私保护

## 需要考虑的关键点

### 1. 用户体验
- **引导流程**：清晰的问题引导和进度展示
- **交互设计**：流畅的页面切换和动画效果
- **响应式适配**：确保在各种设备上的良好体验
- **加载状态**：优雅的加载和过渡效果
- **错误处理**：友好的错误提示和恢复机制

### 2. 技术实现
- **状态管理**：
  - 使用 React Hook Form 处理表单状态
  - 实现实时保存和断点续答
  - 管理问题流程和答案验证
- **数据持久化**：
  - 本地存储临时数据
  - 服务端数据同步
  - 断点续答机制
- **性能优化**：
  - 组件懒加载
  - 图片优化
  - 状态更新优化

### 3. 问卷设计
- **问题类型**：
  - 单选题
  - 多选题
  - 量表题
  - 开放性问题
- **问题流程**：
  - 基础信息收集
  - 性格测评
  - 价值观调查
  - 生活习惯评估
  - 未来规划探讨

### 4. UI/UX 设计
- **视觉风格**：
  - 与首页保持一致的设计语言
  - 使用 Shadcn UI 组件库
  - 遵循 Tailwind 设计规范
- **交互元素**：
  - 进度条显示
  - 问题卡片设计
  - 选项按钮样式
  - 导航控制

### 5. 数据安全
- **数据加密**：敏感信息加密存储
- **隐私保护**：明确的隐私政策说明
- **数据清理**：提供数据删除选项

### 6. 可访问性
- **键盘导航**：支持键盘操作
- **屏幕阅读**：适配屏幕阅读器
- **颜色对比**：确保足够的对比度

## 技术栈
- Next.js App Router
- TypeScript
- React Hook Form
- Zod (表单验证)
- Shadcn UI
- Tailwind CSS
- Radix UI

## 目录结构 

app/questionnaire/
├── page.tsx # 问卷主页面
├── loading.tsx # 加载状态组件
├── error.tsx # 错误处理组件
└── README.md # 本文档
components/questionnaire/
├── questionnaire-form/ # 问卷表单组件
├── question-card/ # 问题卡片组件
└── progress-bar/ # 进度条组件