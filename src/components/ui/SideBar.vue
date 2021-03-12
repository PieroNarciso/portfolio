<template>
  <div
    class="fixed top-0 left-0 z-20 w-full h-full px-8 pt-4 pb-8 opacity-90 bg-brown-dark"
  >
    <div class="flex flex-row-reverse mb-4">
      <button
        class="focus:outline-none hover:scale-105 transform duration-150"
        @click="closeSidebar"
      >
        <p-icon class="w-10 h-10 text-coolWhite-light" icon="close"></p-icon>
      </button>
    </div>

    <!-- Links to Navigate -->
    <div class="mt-12">
      <router-link
        class="block w-full py-2 text-2xl font-semibold tracking-wider text-center border-b-2 hover:text-primary-dark text-coolWhite-dark border-brown-light focus:outline-none"
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        type="button"
        :name="link.name"
        @click.prevent="goToRoute"
      >
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import PIcon from '../base/PIcon.vue';

export default defineComponent({
  emits: ['close'],
  components: {
    PIcon,
  },
  setup(_, context) {
    const router = useRouter();
    const closeSidebar = () => {
      context.emit('close');
    };

    const goToRoute = (event: { target: HTMLButtonElement }) => {
      closeSidebar();
      router.push({ name: event.target.name });
    };

    const links = ref([
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Work', to: '/work' },
      { name: 'Contact', to: '/contact' },
    ]);

    return {
      closeSidebar,
      links,
      goToRoute,
    };
  },
});
</script>

<style scoped>
.router-link-active {
  @apply text-primary-dark;
}
</style>
