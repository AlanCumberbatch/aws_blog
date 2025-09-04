import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import DocumentView from './views/DocumentView.vue'
import i18n from './i18n'
import './style.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/document/:id', name: 'Document', component: DocumentView, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
