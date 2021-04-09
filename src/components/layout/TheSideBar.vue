<template>
  <nav class="w-14 xl:w-20 h-full flex justify-center" v-bind="$attrs">
    <div class="fixed h-screen flex flex-col justify-center space-y-4">
      <router-link
        v-for="nav in navList"
        :key="nav.id"
        class="hover:bg-primary rounded p-1 flex-col flex items-center text-white"
        :to="{ to: 'Home', hash: nav.to }"
      >
        <p-icon :class="iconClass" :icon="nav.icon"></p-icon>
        <span class="hidden xl:block">{{ nav.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PIcon from '../base/PIcon.vue';

export default defineComponent({
  components: {
    PIcon,
  },
  setup() {
    const iconClass = ref('text-white h-8 w-8');

    const navList = ref([
      { id: 1, name: 'Home', icon: 'home', to: '#home' },
      { id: 4, name: 'Skills', icon: 'skill', to: '#skill'},
      { id: 2, name: 'Work', icon: 'work', to: '#work' },
      { id: 3, name: 'Contact', icon: 'contact', to: '#contact' },
    ]);

    return {
      iconClass,
      navList,
    }
  },
})
</script>

