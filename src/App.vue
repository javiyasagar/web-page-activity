<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import PricingSection from './components/PricingSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <PricingSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>
