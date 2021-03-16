<template>
  <div>
    <TheHero class="sm:px-4"/>
    <TheSkillSection class="sm:px-8 2xl:px-24"/>
    <ThePortfolioSection class="sm:px-8 2xl:px-24 xl:pt-12 2xl:pt-16" />
    <TheContactMe class="px-4 pb-8 sm:px-8 2xl:px-24 xl:pt-12 2xl:pt-16"/>

    <div
      class="fixed flex items-center justify-center w-full text-gray-200 bottom-1 animate-bounce"
    >
      <span>scroll down</span>
      <svg
        class="w-5 h-5 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHero from '../components/layout/TheHero.vue';
import TheSkillSection from '../components/layout/TheSkillSection.vue';
import ThePortfolioSection from '../components/layout/ThePortfolioSection.vue';
import TheContactMe from '../components/layout/TheContactMe.vue';

export default defineComponent({
  components: {
    TheHero,
    TheSkillSection,
    ThePortfolioSection,
    TheContactMe,
  },
  setup() {
    
  },
})
</script>

