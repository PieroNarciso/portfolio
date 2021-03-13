<template>
  <section class="h-auto p-4 bg-gradient-to-b from-primary-dark to-primary">
    <TitleSection>My Portfolio</TitleSection>
    <div class="flex-col mt-12 space-y-10">
      <PortafolioCard v-for="item in items" :item="item" :key="item.name" />
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
        description:
          "Searches all acumulate cases by covid-19 in all countries and line plot in a graph. If using a third party RESTful API to fetch the data. It's build in Vuejs 2 with Typescript as a frontend Framework.",
        github: 'https://github.com/PieroNarciso/covid-19',
        tecnologies: ['nodejs', 'typescript', 'vue', 'vuetify', 'docker'],
        path: '/portafolio/covid-app.png',
        link: 'https://covid.pieronarciso.xyz',
      },
      {
        name: 'Note Taking App',
        description:
          "An app for taking notes in a colorfull way, similiar to Google Keep. It is build using React with Typescript in the Frontend. And Tailwindcss for the styling.",
        github: 'https://github.com/PieroNarciso/note-taking-app',
        tecnologies: ['nodejs', 'react', 'typescript', 'tailwindcss'],
        path: '/portafolio/keeper-app.png',
        link: 'https://note-app-demo.pieronarciso.xyz',
      },
      {
        name: 'Task App',
        description:
          'Web App for task tracking with material design user interface. It is build using Vuejs 2 with Typescript and Vuetify.',
        github: 'https://github.com/PieroNarciso/taskapp',
        tecnologies: ['nodejs', 'vue', 'vuetify', 'typescript', 'docker'],
        path: '/portafolio/task-app.png',
        link: 'https://taskapp.pieronarciso.xyz',
      },
      {
        name: 'Hash App',
        description:
          'Web Application to hash text with multiples hash algorithms. It is build with Vue 3 and the new composition API, Typescript and Bulma.',
        github: 'https://github.com/PieroNarciso/encryption-hash-app',
        tecnologies: ['nodejs', 'vue', 'typescript'],
        path: '/portafolio/hash-app.png',
        link: 'https://hash-app.pieronarciso.xyz',
      },
      {
        name: 'Chat App',
        description:
          'Chat Application with session authentication to manage permissions. It is build with Vue 3, Typescript and Bootstrap.',
        github: 'https://github.com/PieroNarciso/chat-room',
        tecnologies: ['nodejs', 'vue', 'typescript'],
        path: '/portafolio/chat-app.png',
      },
    ]);

    return {
      items,
    };
  },
});
</script>
