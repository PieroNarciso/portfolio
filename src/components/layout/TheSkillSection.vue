<template>
  <section class="p-4 bg-primary-light bg-gradient-to-b from-primary-light to-primary">
    <div class="grid grid-cols-1">
      <TitleSection>
        <span v-for="char in 'My Skills'.split('')" class="hover:text-secondary" :key="char">
          {{ char }}
        </span>
      </TitleSection>
      <div class="mt-8 grid grid-cols-2 gap-2">
        <SkillCard
          v-for="skillItem in skills"
          :key="skillItem.name"
          :item="skillItem"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import TitleSection from '../ui/TitleSection.vue';
import SkillCard from '../ui/SkillCard.vue';

export default defineComponent({
  components: {
    SkillCard,
    TitleSection,
  },
  setup() {
    const skills = ref([
      { name: 'vue', path: '/vue.png' },
      { name: 'typescript', path: '/typescript.png' },
      { name: 'nodejs', path: '/nodejs.png' },
      { name: 'tailwindcss', path: '/tailwindcss.png' },
      { name: 'javascript', path: '/javascript.png' },
      { name: 'mongodb', path: '/mongodb.png' },
      { name: 'python', path: '/python.png' },
      { name: 'react', path: '/reactjs.png' },
    ]);

    return {
      skills,
    };
  },
});
</script>
