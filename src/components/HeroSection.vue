<template>
  <section id="home" class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center">
    <div class="container mx-auto px-6 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Text Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Empowering Safety
              <span class="gradient-text"> Through Culture</span>
            </h1>
            <p class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              We help organizations create environments where safety is not a rule — it's a mindset.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              @click="scrollToPricing"
              class="btn-primary text-center"
            >
              Explore Plans
            </button>
            <button class="btn-secondary text-center">
              Learn More
            </button>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-800">500+</div>
              <div class="text-sm text-slate-600">Organizations</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-500">98%</div>
              <div class="text-sm text-slate-600">Satisfaction</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-800">24/7</div>
              <div class="text-sm text-slate-600">Support</div>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Visual Elements -->
        <div class="relative">
          <!-- Floating Abstract Shapes -->
          <div class="relative w-full h-96 lg:h-full min-h-[400px]">
            <!-- Main Circle -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-800/20 to-emerald-500/20 rounded-2xl animate-float"></div>
            
            <!-- Secondary Shapes -->
            <div class="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-emerald-500/30 to-blue-800/30 rounded-xl animate-float" style="animation-delay: 2s;"></div>
            <div class="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-800/25 to-emerald-500/25 rounded-lg animate-float" style="animation-delay: 4s;"></div>
            
            <!-- Safety Icon -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg class="w-32 h-32 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToPricing = () => {
  const element = document.getElementById('pricing')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
