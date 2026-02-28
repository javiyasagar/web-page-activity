<template>
  <section id="pricing" class="py-20 bg-slate-50">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Choose Your Safety Plan
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Select the perfect plan for your organization's safety culture journey
        </p>
      </div>
      
      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard
          name="Starter"
          :price="29"
          :features="[
            'Up to 50 employees',
            'Basic safety training modules',
            'Email support',
            'Monthly safety reports',
            'Mobile app access'
          ]"
          button-text="Start Free Trial"
        />
        
        <PricingCard
          name="Professional"
          :price="79"
          :features="[
            'Up to 200 employees',
            'Advanced training programs',
            'Priority support',
            'Real-time analytics',
            'Custom safety protocols',
            'API access'
          ]"
          :featured="true"
          button-text="Get Started"
        />
        
        <PricingCard
          name="Enterprise"
          :price="199"
          :features="[
            'Unlimited employees',
            'Custom training development',
            'Dedicated account manager',
            'Advanced reporting & AI insights',
            'White-label options',
            'On-premise deployment'
          ]"
          button-text="Contact Sales"
        />
      </div>
      
      <!-- Additional Info -->
      <div class="text-center mt-12">
        <p class="text-slate-600">
          All plans include 
          <span class="font-semibold text-emerald-500">30-day money-back guarantee</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import PricingCard from './PricingCard.vue'
</script>
