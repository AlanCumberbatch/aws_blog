import { marked } from 'marked'
import hljs from 'highlight.js'

// 配置 marked
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (err) {
        console.error('代码高亮错误:', err)
      }
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true
})

// 渲染 Markdown 内容
export function renderMarkdown(content: string): string {
  return marked(content)
}

// 提取 Markdown 标题
export function extractTitle(content: string): string {
  const lines = content.split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('# ')) {
      return trimmed.substring(2).trim()
    }
  }
  return '无标题'
}

// 提取 Markdown 描述（前几行非标题内容）
export function extractDescription(content: string, maxLength: number = 150): string {
  const lines = content.split('\n')
  let description = ''

  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('```')) {
      description += trimmed + ' '
      if (description.length > maxLength) {
        break
      }
    }
  }

  return description.trim().substring(0, maxLength) + (description.length > maxLength ? '...' : '')
}

// 提取 Markdown 标签
export function extractTags(content: string): string[] {
  const tagRegex = /#(\w+)/g
  const matches = content.match(tagRegex)
  return matches ? matches.map(tag => tag.substring(1)) : []
}
