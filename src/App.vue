<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header-content">
          <h1 class="logo">
            <router-link to="/">{{ $t('app.title') }}</router-link>
          </h1>
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-link">{{ $t('app.collection') }}</router-link>
          <div class="language-switcher">
            <select v-model="$i18n.locale" @change="changeLanguage" class="language-select">
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </nav>
      </div>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <div class="container">
        <p>{{ $t('footer.text') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = () => {
  // 保存语言选择到 localStorage
  localStorage.setItem('preferred-language', locale.value)
}

// 从 localStorage 恢复语言选择
const savedLanguage = localStorage.getItem('preferred-language')
if (savedLanguage && ['en', 'ja', 'zh'].includes(savedLanguage)) {
  locale.value = savedLanguage
}
</script>

<style scoped>
.header {
  background: #f5f1e8;
  color: #2c1810;
  padding: 1.5rem 0;
  border-bottom: 2px solid #8b4513;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content {
  display: flex;
  align-items: center;
}

.logo a {
  color: #2c1810;
  text-decoration: none;
  font-family: 'Libre Baskerville', 'Crimson Text', serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.language-switcher {
  margin-left: 1rem;
}

.language-select {
  background: #f5f1e8;
  border: 2px solid #8b4513;
  color: #2c1810;
  padding: 0.3rem 0.5rem;
  font-family: 'Crimson Text', 'Libre Baskerville', serif;
  font-size: 0.9rem;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.language-select:hover {
  background: #e6d3a3;
}

.language-select:focus {
  outline: none;
  background: #e6d3a3;
}

.nav-link {
  color: #8b4513;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-family: 'Crimson Text', 'Libre Baskerville', serif;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #2c1810;
}

.main {
  min-height: calc(100vh - 200px);
  background: #f5f1e8;
}

.footer {
  background: #f5f1e8;
  padding: 1.5rem 0;
  text-align: center;
  color: #8b4513;
  border-top: 2px solid #8b4513;
  font-family: 'Crimson Text', 'Libre Baskerville', serif;
  font-style: italic;
  font-size: 0.9rem;
}
</style>
