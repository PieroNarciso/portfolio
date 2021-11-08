<template>
  <section id="work" class="h-auto p-4 bg-gradient-to-b from-primary-dark to-primary" v-bind="$attrs">
    <TitleSection>My Portfolio</TitleSection>
    <div class="flex flex-col mt-12 xl:flex-none xl:grid xl:grid-cols-2 xl:px-2 space-y-10 sm:px-8 md:px-16 xl:gap-x-8 xl:gap-y-12 xl:space-y-0">
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
        name: 'DiscoverFy',
        description: 'Discover new music based in your taste in Spotify. App built with React, tailwindcss, Vitejs and the Spotify RestAPI',
        github: 'https://github.com/PieroNarciso/spotify-dashboard',
        tecnologies: ['typescript', 'react', 'tailwindcss'],
        path: '/portafolio/spotify-app.png',
        link: 'https://spotify.pieronarciso.com'
      },
      {
        name: 'Covid Tracker',
        description:
          "Searches all acumulate cases by covid-19 in all countries and line plot in a graph. If using a third party RESTful API to fetch the data. It's build in Vuejs 2 with Typescript as a frontend Framework.",
        github: 'https://github.com/PieroNarciso/covid-19',
        tecnologies: ['nodejs', 'typescript', 'vue', 'vuetify', 'docker'],
        path: '/portafolio/covid-app.png',
        link: 'https://covid.pieronarciso.com',
      },
      {
        name: 'Note Taking App',
        description:
          "An app for taking notes in a colorfull way, similiar to Google Keep. It is build using React with Typescript in the Frontend. And Tailwindcss for the styling.",
        github: 'https://github.com/PieroNarciso/note-taking-app',
        tecnologies: ['nodejs', 'react', 'typescript', 'tailwindcss'],
        path: '/portafolio/keeper-app.png',
        link: 'https://note-app-demo.pieronarciso.com',
      },
      {
        name: 'Task App',
        description:
          'Web App for task tracking with material design user interface. It is build using Vuejs 2 with Typescript and Vuetify.',
        github: 'https://github.com/PieroNarciso/taskapp',
        tecnologies: ['nodejs', 'vue', 'vuetify', 'typescript', 'docker'],
        path: '/portafolio/task-app.png',
      },
      {
        name: 'Hash App',
        description:
          'Web Application to hash text with multiples hash algorithms. It is build with Vue 3 and the new composition API, Typescript and Bulma.',
        github: 'https://github.com/PieroNarciso/encryption-hash-app',
        tecnologies: ['nodejs', 'vue', 'typescript'],
        path: '/portafolio/hash-app.png',
      },
      {
        name: 'Chat App',
        description:
          'Chat Application with session authentication to manage permissions. It is build with Vue 3, Typescript and Bootstrap.',
        github: 'https://github.com/PieroNarciso/chat-room-app',
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
