<template>
  <div class="px-4 py-8 pt-12 sm:px-8 lg:px-12 xl:px-24 2xl:px-36 h-screen">
    <TheContactMe />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheContactMe from '../components/layout/TheContactMe.vue';

export default defineComponent({
  components: {
    TheContactMe,
  },
  setup() {
    
  },
})
</script>

