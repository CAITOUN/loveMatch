# 项目目录结构与技术要点

## 目录结构

```
├── app/                # Next.js App Router 目录，页面与布局
│   ├── layout.tsx      # 全局布局组件
│   └── page.tsx        # 首页页面组件
├── components/         # 复用型 React 组件
│   ├── main-nav.tsx    # 主导航组件
│   ├── site-header.tsx # 站点头部组件
│   ├── theme-provider.tsx # 主题切换 Provider
│   ├── theme-toggle.tsx   # 主题切换按钮
│   ├── tailwind-indicator.tsx # Tailwind 环境指示器
│   ├── icons.tsx       # 图标集合
│   └── ui/             # 基础 UI 组件（如 Button）
│       └── button.tsx  # 按钮组件，基于 Radix + Tailwind
├── config/             # 配置文件
│   └── site.ts         # 站点基础信息配置
├── lib/                # 工具库与静态资源
│   ├── fonts.ts        # 字体配置
│   └── utils.ts        # 通用工具函数
├── public/             # 静态资源（图片、icon等）
├── styles/             # 全局样式
│   └── globals.css     # Tailwind 全局样式
├── types/              # TypeScript 类型定义
│   └── nav.ts          # 导航类型定义
├── .vscode/            # VSCode 配置
├── .next/              # Next.js 构建产物
├── node_modules/       # 依赖包
├── package.json        # 项目依赖与脚本
├── tailwind.config.js  # Tailwind 配置
├── next.config.mjs     # Next.js 配置
├── tsconfig.json       # TypeScript 配置
├── README.md           # 项目说明
└── ...（省略部分配置文件）
```

## 技术要点总结

### 技术栈
- **Next.js 13 App Router**：采用新一代文件路由与服务端组件架构。
- **React 18**：函数式组件，优先使用 Server Component，按需使用 Client Component。
- **TypeScript**：全量类型约束，接口优先，避免 enum。
- **Tailwind CSS**：原子化 CSS，支持暗黑模式，定制主题变量。
- **Radix UI**：无障碍、可定制的底层 UI 组件。
- **Shadcn UI**：基于 Radix + Tailwind 的 UI 组件方案。
- **Lucide Icons**：现代 SVG 图标。
- **next-themes**：主题切换（明暗模式）。

### 目录与代码结构
- 组件、工具、类型、配置分离，便于维护和扩展。
- 组件采用命名导出，分为复用型（components/）和基础型（components/ui/）。
- 页面与布局全部放在 app/ 下，支持嵌套路由和布局。
- 类型定义集中在 types/，便于全局复用。

### UI 与样式
- Tailwind 配合自定义 CSS 变量实现主题切换。
- 组件样式通过 class-variance-authority（cva）实现多态变体。
- 响应式设计，移动优先。
- 图标统一封装在 components/icons.tsx，便于扩展。

### 最佳实践
- 优先使用 Server Component，最小化 use client 范围。
- 主题切换、导航等 UI 状态通过轻量 Client Component 实现。
- 工具函数、配置、类型全部模块化，便于复用。
- 代码风格统一，Prettier + ESLint + Tailwind 插件自动格式化与校验。
- 依赖与脚本管理规范，支持 typecheck、lint、format、build、dev 等常用命令。

### 依赖与配置
- 主要依赖：next、react、@radix-ui/react-slot、tailwindcss、lucide-react、next-themes、class-variance-authority、tailwind-merge。
- 开发依赖：typescript、eslint、prettier、autoprefixer、postcss、@types/react 等。
- Tailwind 配置支持动画插件（tailwindcss-animate）、主题变量、响应式断点。
- 字体通过 next/font/google 动态引入。

---

如需详细讨论某一部分，可随时引用本文件内容。 