<template>
  <div class="markdown-renderer">
    <div
      class="markdown-content"
      v-html="renderedContent"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { renderMarkdown } from '@/utils/markdown'

interface Props {
  content: string
}

const props = defineProps<Props>()

const renderedContent = computed(() => {
  return renderMarkdown(props.content)
})
</script>

<style scoped>
.markdown-renderer {
  max-width: 100%;
  overflow-x: auto;
}

.markdown-content {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* 确保代码块样式正确 - 简洁风格 */
.markdown-content :deep(pre) {
  background-color: #2c1810;
  color: #d4af37;
  padding: 1.5rem;
  border: 1px solid #8b4513;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-family: 'Courier New', monospace;
}

.markdown-content :deep(code) {
  background-color: #e6d3a3;
  color: #2c1810;
  padding: 0.2rem 0.4rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.markdown-content :deep(pre code) {
  background: none;
  padding: 0;
  color: inherit;
}

/* 表格样式 */
.markdown-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.markdown-content :deep(th),
.markdown-content :deep(td) {
  border: 1px solid #8b4513;
  padding: 0.5rem;
  text-align: left;
}

.markdown-content :deep(th) {
  background-color: #8b4513;
  color: #f8f6f0;
  font-weight: 600;
}

/* 引用块样式 */
.markdown-content :deep(blockquote) {
  border-left: 3px solid #8b4513;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #5d4e37;
  font-style: italic;
}

/* 链接样式 */
.markdown-content :deep(a) {
  color: #8b4513;
  text-decoration: underline;
}

/* 图片样式 */
.markdown-content :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
}

/* 列表样式 */
.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.markdown-content :deep(li) {
  margin-bottom: 0.5rem;
}

/* 水平线样式 */
.markdown-content :deep(hr) {
  border: none;
  height: 1px;
  background: #8b4513;
  margin: 2rem 0;
}
</style>
