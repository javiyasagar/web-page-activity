<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-blue-800 to-emerald-500 rounded-lg"></div>
          <span class="text-xl font-bold text-slate-800">Safety & Culture</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            class="text-slate-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            :class="activeSection === 'home' ? 'text-blue-800' : ''"
          >
            Home
          </a>
          <a 
            href="#pricing" 
            class="text-slate-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            :class="activeSection === 'pricing' ? 'text-blue-800' : ''"
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            class="text-slate-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            :class="activeSection === 'contact' ? 'text-blue-800' : ''"
          >
            Contact
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <svg class="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        class="md:hidden overflow-hidden transition-all duration-300"
        :class="mobileMenuOpen ? 'max-h-48 mt-4' : 'max-h-0'"
      >
        <div class="flex flex-col space-y-3 py-4">
          <a 
            href="#home" 
            class="text-slate-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            @click="closeMobileMenu"
          >
            Home
          </a>
          <a 
            href="#pricing" 
            class="text-slate-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            @click="closeMobileMenu"
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            class="text-slate-600 hover:text-blue-800 transition-colors duration-200 font-medium"
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

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('home')

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
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
