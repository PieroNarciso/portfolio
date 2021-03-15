<template>
  <section class="p-4 bg-primary-light bg-gradient-to-b from-primary to-primary-dark" v-bind="$attrs">
    <div class="grid grid-cols-1">
      <TitleSection>
        My Skills
      </TitleSection>
      <div class="mt-8 grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 2xl:grid-cols-4 xl:gap-8 sm:gap-6">
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
