<template>
  <section class="h-auto p-4 bg-gradient-to-b from-primary-dark to-primary">
    <TitleSection>My Portafolio</TitleSection>
    <div class="flex-col mt-8 space-y-5">
      <PortafolioCard v-for="item in items" :item="item" :key="item.name">
      </PortafolioCard>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import TitleSection from '../ui/TitleSection.vue';
import PortafolioCard from '../ui/PortafolioCard.vue';
import { PortafolioItem } from '../../types';

export default defineComponent({
  components: {
    TitleSection,
    PortafolioCard,
  },
  setup() {
    const items = ref<PortafolioItem[]>([
      {
        name: 'Covid Tracker',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github: 'https://github.com/PieroNarciso/covid-19',
        tecnologies: ['nodejs', 'typescript', 'vue', 'vuetify', 'docker'],
        path: '/portafolio/covid-app.png',
        link: 'https://covid.pieronarciso.xyz',
      },
      {
        name: 'Note Taking App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github: 'https://github.com/PieroNarciso/note-taking-app',
        tecnologies: ['nodejs', 'react', 'typescript', 'tailwindcss'],
        path: '/portafolio/keeper-app.png',
        link: 'https://note-app-demo.pieronarciso.xyz',
      },
      {
        name: 'Task App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github: 'https://github.com/PieroNarciso/taskapp',
        tecnologies: ['nodejs', 'vue', 'vuetify', 'typescript', 'docker'],
        path: '/portafolio/task-app.png',
        link: 'https://task-app.pieronarciso.xyz'
      },
      {
        name: 'Hash App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github: 'https://github.com/PieroNarciso/encryption-hash-app',
        tecnologies: ['nodejs', 'vue', 'typescript'],
        path: '/portafolio/hash-app.png',
        link: 'https://hash-app.pieronarciso.xyz',
      },
      {
        name: 'Chat App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github: 'https://github.com/PieroNarciso/chat-room',
        tecnologies: ['nodejs', 'vue', 'typescript'],
        path: '/portafolio/chat-app.png',
      }
    ]);

    return {
      items,
    };
  },
});
</script>
