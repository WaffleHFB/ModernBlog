# 个人博客 & 作品集

这是一个使用 Next.js 构建的现代简约个人网站，具有博客系统、动画组件和清新的设计美学。该网站既是作品集展示平台，也是分享文章和想法的空间。

## ✨ 特性

- **响应式设计**：完全响应式布局，在所有设备上都能完美展示
- **动画组件**：使用 Framer Motion 实现流畅的动画效果
- **博客系统**：基于 Markdown 的博客系统，支持代码语法高亮
- **深色模式**：支持明暗主题切换
- **SEO 优化**：使用 Next.js 内置的 SEO 优化功能
- **高性能**：通过 Next.js 静态生成实现优化的加载速度
- **现代技术栈**：使用 TypeScript 确保类型安全

## 🛠️ 技术栈

- **框架**: [Next.js](https://nextjs.org/)
- **开发语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **动画**: [Framer Motion](https://www.framer.com/motion/)
- **数据库**: [Prisma](https://www.prisma.io/)
- **部署**: [GitHub Pages](https://pages.github.com/)

## 🚀 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **运行开发服务器**
   ```bash
   npm run dev
   ```

4. **构建生产版本**
   ```bash
   npm run build
   ```

## 📁 项目结构

```
├── components/          # 可重用的 UI 组件
├── lib/                # 工具函数和配置
├── pages/              # Next.js 页面和 API 路由
├── public/             # 静态资源
├── styles/             # 全局样式和 Tailwind 配置
└── types/              # TypeScript 类型定义
```

## 🎨 自定义设置

### 样式
项目使用 Tailwind CSS 进行样式设计。你可以通过修改 `tailwind.config.js` 文件来自定义主题。

### 内容
- 博客文章存储在 `pages/articles` 目录中
- 在 `lib/constants.ts` 中更新个人信息
- 在 `components/AnimatedTitle.tsx` 文件中修改动画效果

## 📝 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎贡献、提出问题和功能请求！请查看 [issues 页面](https://github.com/wafflehfb/ModernBlog/issues)。

## 🙏 致谢

- Next.js 团队提供的出色框架
- Vercel 提供的托管解决方案
- 所有帮助这个项目成长的贡献者

---

由 [你的名字](https://github.com/wafflehfb) 用 ❤️ 制作
