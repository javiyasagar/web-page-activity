import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const THEME_STORAGE_KEY = 'theme'

const getPreferredTheme = () => {
  const saved = localStorage.getItem(THEME_STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const applyTheme = (theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

applyTheme(getPreferredTheme())

createApp(App).mount('#app')
