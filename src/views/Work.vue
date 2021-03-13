<template>
  <div class="pt-12 pb-6">
    <ThePortfolioSection />
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ThePortfolioSection from '../components/layout/ThePortfolioSection.vue';

export default defineComponent({
  components: {
    ThePortfolioSection
  },
  setup() {
    
  },
})
</script>

