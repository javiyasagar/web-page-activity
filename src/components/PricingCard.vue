<template>
  <div 
    class="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    :class="[
      featured 
        ? 'bg-gradient-to-br from-blue-800 to-emerald-500 text-white shadow-2xl scale-105' 
        : 'bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-700'
    ]"
  >
    <!-- Featured Badge -->
    <div 
      v-if="featured" 
      class="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4"
    >
      Most Popular
    </div>
    
    <!-- Plan Name -->
    <h3 class="text-2xl font-bold mb-2" :class="featured ? 'text-white' : 'text-slate-800 dark:text-slate-100'">
      {{ name }}
    </h3>
    
    <!-- Price -->
    <div class="mb-6">
      <span class="text-4xl font-bold" :class="featured ? 'text-white' : 'text-slate-800 dark:text-slate-100'">
        ${{ price }}
      </span>
      <span class="text-slate-600 dark:text-slate-300" :class="featured ? 'text-white/80' : ''">
        /month
      </span>
    </div>
    
    <!-- Features -->
    <ul class="space-y-3 mb-8">
      <li 
        v-for="feature in features" 
        :key="feature"
        class="flex items-center space-x-3"
        :class="featured ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'"
      >
        <svg 
          class="w-5 h-5 flex-shrink-0" 
          :class="featured ? 'text-white' : 'text-emerald-500'" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span>{{ feature }}</span>
      </li>
    </ul>
    
    <!-- CTA Button -->
    <button 
      class="w-full py-3 rounded-xl font-semibold transition-all duration-300"
      :class="[
        featured 
          ? 'bg-white text-blue-800 hover:bg-slate-100' 
          : 'btn-primary'
      ]"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: 'Get Started'
  }
})
</script>
