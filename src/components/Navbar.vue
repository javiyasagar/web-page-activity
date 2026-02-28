<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-blue-800 to-emerald-500 rounded-lg"></div>
          <span class="text-xl font-bold text-slate-800 dark:text-slate-100">Safety & Culture</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            class="text-slate-600 dark:text-slate-300 hover:text-blue-800 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
            :class="activeSection === 'home' ? 'text-blue-800 dark:text-emerald-400' : ''"
          >
            Home
          </a>
          <a 
            href="#pricing" 
            class="text-slate-600 dark:text-slate-300 hover:text-blue-800 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
            :class="activeSection === 'pricing' ? 'text-blue-800 dark:text-emerald-400' : ''"
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            class="text-slate-600 dark:text-slate-300 hover:text-blue-800 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
            :class="activeSection === 'contact' ? 'text-blue-800 dark:text-emerald-400' : ''"
          >
            Contact
          </a>

          <button
            type="button"
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="theme === 'dark'" class="w-5 h-5 text-slate-200" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-9 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm11.364-2.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM5.757 4.05a1 1 0 010 1.414l-.707.707A1 1 0 013.636 4.757l.707-.707a1 1 0 011.414 0zm12.607 6.95a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 11a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm12.536-6.243a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414zM4.879 13.536a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-slate-800 dark:text-slate-200" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z"/>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-2">
          <button
            type="button"
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="theme === 'dark'" class="w-5 h-5 text-slate-200" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-9 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm11.364-2.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM5.757 4.05a1 1 0 010 1.414l-.707.707A1 1 0 013.636 4.757l.707-.707a1 1 0 011.414 0zm12.607 6.95a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 11a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm12.536-6.243a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414zM4.879 13.536a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-slate-800 dark:text-slate-200" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z"/>
            </svg>
          </button>

          <button 
            @click="toggleMobileMenu"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg class="w-6 h-6 text-slate-800 dark:text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        class="md:hidden overflow-hidden transition-all duration-300"
        :class="mobileMenuOpen ? 'max-h-48 mt-4' : 'max-h-0'"
      >
        <div class="flex flex-col space-y-3 py-4">
          <a 
            href="#home" 
            class="text-slate-600 dark:text-slate-300 hover:text-blue-800 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
            @click="closeMobileMenu"
          >
            Home
          </a>
          <a 
            href="#pricing" 
            class="text-slate-600 dark:text-slate-300 hover:text-blue-800 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
            @click="closeMobileMenu"
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            class="text-slate-600 dark:text-slate-300 hover:text-blue-800 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
            @click="closeMobileMenu"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const THEME_STORAGE_KEY = 'theme'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('home')
const theme = ref('light')

const applyTheme = (nextTheme) => {
  theme.value = nextTheme
  document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
}

const toggleTheme = () => {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
  
  // Update active section based on scroll position
  const sections = ['home', 'pricing', 'contact']
  const scrollPosition = window.scrollY + 100
  
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  const saved = localStorage.getItem(THEME_STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved)
  } else {
    theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
