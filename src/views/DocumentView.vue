<template>
  <div class="document-view">
    <div class="container">
      <div v-if="document" class="document-container">
        <!-- 返回按钮 -->
        <div class="back-section">
          <button class="back-btn" @click="goBack">
            {{ $t('document.back') }}
          </button>
        </div>

        <!-- 文档头部信息 -->
                <div class="document-header">
          <div class="document-title-section">
            <h1 class="document-title">{{ document.title }}</h1>
            <span class="date">{{ formatDate(document.updatedAt) }}</span>
          </div>
          <p class="document-description">{{ document.description }}</p>
        </div>

        <!-- 文档内容 -->
        <div class="document-content">
          <MarkdownRenderer :content="document.content" />
        </div>
      </div>

      <div v-else class="not-found">
        <h2>{{ $t('document.notFound') }}</h2>
        <p>{{ $t('document.notFoundMessage') }}</p>
        <button class="btn" @click="goBack">{{ $t('document.back') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import { getDocumentById, FlatDocument } from '@/data/documents'

interface Props {
  id: string
}

const props = defineProps<Props>()
const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

const document = ref<FlatDocument | null>(null)

// 方法
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const goBack = () => {
  router.push('/')
}

const loadDocument = () => {
  const docId = props.id || route.params.id as string
  document.value = getDocumentById(docId, locale.value)
}

// 生命周期
onMounted(() => {
  loadDocument()
})

// 监听语言变化，重新加载文档
watch(locale, () => {
  loadDocument()
})
</script>

<style scoped>
.document-view {
  padding: 3rem 0;
  background: #f5f1e8;
  min-height: 100vh;
}

.back-section {
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
}

.back-btn {
  background: #8b4513;
  color: #f8f6f0;
  border: 1px solid #8b4513;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-family: 'Georgia', serif;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.back-btn:hover {
  background: #654321;
}

.document-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.document-header {
  background: #f5f1e8;
  border: 2px solid #8b4513;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.document-title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.document-title {
  font-family: 'Libre Baskerville', 'Crimson Text', serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #2c1810;
  margin: 0;
}

.document-description {
  font-family: 'Crimson Text', 'Libre Baskerville', serif;
  font-size: 1.1rem;
  color: #5d4e37;
  margin: 0;
  line-height: 1.6;
  font-style: italic;
}

.date {
  font-family: 'Crimson Text', 'Libre Baskerville', serif;
  font-size: 0.9rem;
  color: #8b4513;
  font-style: italic;
}

.document-content {
  background: #f5f1e8;
  border: 2px solid #8b4513;
  padding: 2rem;
}

.not-found {
  text-align: center;
  padding: 6rem 2rem;
  color: #8b4513;
  max-width: 600px;
  margin: 0 auto;
}

.not-found h2 {
  font-family: 'Times New Roman', serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2c1810;
  letter-spacing: 1px;
}

.not-found p {
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #5d4e37;
  font-style: italic;
}

@media (max-width: 768px) {
  .document-header {
    padding: 2rem;
  }

    .document-title-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .document-title {
    font-size: 1.8rem;
  }

  .document-description {
    font-size: 1rem;
  }

  .document-content {
    padding: 2rem;
  }

  .back-section,
  .document-container {
    padding: 0 1rem;
  }
}
</style>
