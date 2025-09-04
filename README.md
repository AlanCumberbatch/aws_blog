# AWS Markdown Blog

一个使用 Vue3 + TypeScript 构建的 Markdown 文档展示平台，专门用于陈列和展示 AWS 相关的技术文档。

## ✨ 特性

- 🚀 **Vue3 + TypeScript**: 现代化的前端技术栈
- 📝 **Markdown 渲染**: 支持完整的 Markdown 语法和代码高亮
- 🎨 **响应式设计**: 适配各种设备尺寸
- 🔍 **搜索功能**: 支持按标题、描述、标签搜索
- 📂 **分类管理**: 按服务类型组织文档
- 🏷️ **标签系统**: 灵活的标签分类
- 📱 **移动端优化**: 完美的移动端体验

## 🛠️ 技术栈

- **前端框架**: Vue 3
- **开发语言**: TypeScript
- **构建工具**: Vite
- **路由管理**: Vue Router 4
- **Markdown 渲染**: marked + highlight.js
- **样式**: CSS3 + 响应式设计

## 📦 安装和运行

### 环境要求

- Node.js >= 16.0.0
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

访问 http://localhost:3000 查看应用

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 预览生产版本

```bash
npm run preview
# 或
yarn preview
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── DocumentCard.vue    # 文档卡片组件
│   └── MarkdownRenderer.vue # Markdown 渲染组件
├── views/              # 页面组件
│   ├── Home.vue           # 首页
│   └── DocumentView.vue   # 文档详情页
├── data/               # 数据文件
│   └── documents.ts       # 文档数据
├── types/              # TypeScript 类型定义
│   └── document.ts        # 文档相关类型
├── utils/              # 工具函数
│   └── markdown.ts        # Markdown 处理工具
├── App.vue             # 根组件
├── main.ts             # 应用入口
└── style.css           # 全局样式
```

## 📝 添加新文档

在 `src/data/documents.ts` 文件中的 `sampleDocuments` 数组里添加新的文档对象：

```typescript
{
  id: 'unique-document-id',
  title: '文档标题',
  description: '文档描述',
  content: `# 文档内容
这里是 Markdown 格式的内容...`,
  author: '作者名称',
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  tags: ['标签1', '标签2'],
  category: 'category-id'
}
```

## 🎨 自定义样式

项目使用 CSS 变量和模块化样式，主要样式文件：

- `src/style.css`: 全局样式
- 各组件内的 `<style scoped>`: 组件特定样式

## 🔧 配置

### 修改端口

在 `vite.config.ts` 中修改 `server.port` 配置：

```typescript
export default defineConfig({
  // ...
  server: {
    port: 3000, // 修改为其他端口
    open: true
  }
})
```

### 添加新的文档分类

在 `src/data/documents.ts` 的 `documentCategories` 数组中添加新分类：

```typescript
{
  id: 'new-category',
  name: '新分类',
  description: '分类描述',
  color: '#颜色代码'
}
```

## 📱 响应式设计

项目采用移动优先的响应式设计：

- **桌面端**: >= 1024px
- **平板端**: 768px - 1023px
- **移动端**: < 768px

## 🚀 部署

### GitHub Pages

1. 构建项目：`npm run build`
2. 将 `dist` 目录内容推送到 GitHub Pages 分支
3. 在 GitHub 仓库设置中启用 Pages

### 其他静态托管

构建后的 `dist` 目录可以部署到任何静态文件托管服务。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [marked](https://marked.js.org/)
- [highlight.js](https://highlightjs.org/)
