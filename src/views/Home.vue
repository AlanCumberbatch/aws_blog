<template>
  <div class="home">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">{{ $t('home.title') }}</h1>
        <p class="page-subtitle">{{ $t('home.subtitle') }}</p>
      </div>

      <!-- 文档列表 -->
      <div class="documents-section">
        <div class="document-list">
          <div
            v-for="document in documents"
            :key="document.id"
            class="document-item"
            @click="navigateToDocument(document.id)"
          >
            <div class="document-info">
              <div class="document-header">
                <h3 class="document-title">{{ document.title }}</h3>
                <span class="date">{{ formatDate(document.updatedAt) }}</span>
              </div>
              <p class="document-description">{{ document.description }}</p>
            </div>
            <div class="document-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getAllDocuments, FlatDocument } from '@/data/documents'

const router = useRouter()
const { locale } = useI18n()
const documents = ref<FlatDocument[]>([])

// 方法
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const navigateToDocument = (id: string) => {
  router.push(`/document/${id}`)
}

const loadDocuments = () => {
  documents.value = getAllDocuments(locale.value)
}

// 生命周期
onMounted(() => {
  loadDocuments()
})

// 监听语言变化，重新加载文档
watch(locale, () => {
  loadDocuments()
})
</script>

<style scoped>
.home {
  padding: 3rem 0;
  background: #f5f1e8;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 1rem 0;
}

.page-title {
  font-family: 'Libre Baskerville', 'Crimson Text', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c1810;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.page-subtitle {
  font-family: 'Crimson Text', 'Libre Baskerville', serif;
  font-size: 1rem;
  color: #8b4513;
  font-style: italic;
}

.documents-section {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;
}

.document-list {
  background: #f5f1e8;
  border: 2px solid #8b4513;
}

.document-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #8b4513;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background: #f5f1e8;
}

.document-item:last-child {
  border-bottom: none;
}

.document-item:hover {
  background: #e6d3a3;
}

.document-info {
  flex: 1;
}

.document-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.document-title {
  font-family: 'Libre Baskerville', 'Crimson Text', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #2c1810;
  margin: 0;
}

.document-description {
  font-family: 'Crimson Text', 'Libre Baskerville', serif;
  font-size: 0.95rem;
  color: #5d4e37;
  line-height: 1.5;
  margin: 0;
  font-style: italic;
}

.date {
  font-family: 'Crimson Text', 'Libre Baskerville', serif;
  font-size: 0.8rem;
  color: #8b4513;
  font-style: italic;
}

.document-arrow {
  font-family: 'Libre Baskerville', 'Crimson Text', serif;
  font-size: 1.5rem;
  color: #8b4513;
  font-weight: bold;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

    .document-item {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .document-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }

  .document-arrow {
    align-self: flex-end;
  }
}
</style>
