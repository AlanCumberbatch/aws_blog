// 文档类型定义
export interface DocumentContent {
  title: string
  description: string
  content: string
}

export interface Document {
  id: string
  author: string
  createdAt: string
  updatedAt: string
  tags: string[]
  category: string
  // 多语言内容
  content: {
    en: DocumentContent
    ja: DocumentContent
    zh: DocumentContent
  }
}

export interface DocumentMeta {
  id: string
  title: string
  description: string
  author: string
  createdAt: string
  updatedAt: string
  tags: string[]
  category: string
}

export interface DocumentCategory {
  id: string
  name: string
  description: string
  color: string
}
