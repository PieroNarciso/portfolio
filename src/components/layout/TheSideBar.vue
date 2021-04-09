<template>
  <nav class="w-14 xl:w-20 h-full flex justify-center" v-bind="$attrs">
    <div class="fixed h-screen flex flex-col justify-center space-y-4">
      <router-link
        v-for="nav in navList"
        :key="nav.id"
        class="hover:bg-primary rounded p-1 flex-col flex items-center text-white"
        :to="isHome? { to: 'Home', hash: nav.hash } : { name: nav.to }"
      >
        <p-icon :class="iconClass" :icon="nav.icon"></p-icon>
        <span class="hidden xl:block">{{ nav.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router';

import PIcon from '../base/PIcon.vue';

export default defineComponent({
  components: {
    PIcon,
  },
  setup() {
    const route = useRoute();
    const iconClass = ref('text-white h-8 w-8');
    const isHome = computed(() => {
      return route.name === 'Home'
    });

    const navList = ref([
      { id: 1, name: 'Home', icon: 'home', hash: '#home', to: 'Home' },
      { id: 4, name: 'Skills', icon: 'skill', hash: '#skill'},
      { id: 2, name: 'Work', icon: 'work', hash: '#work', to: 'Work' },
      { id: 3, name: 'Contact', icon: 'contact', hash: '#contact', to: 'Contact' },
    ]);

    return {
      iconClass,
      navList,
      isHome,
    }
  },
})
</script>

