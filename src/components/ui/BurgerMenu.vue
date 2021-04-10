<template>
  <button
    v-bind="$attrs"
    class="p-1 rounded-full focus:bg-primary-dark transform duration-200 hover:scale-105 focus:outline-none"
    @click="toggleSideBar"
  >
    <p-icon class="w-10 h-10 text-coolWhite" icon="menu"></p-icon>
  </button>

  <teleport to="body">
    <transition>
      <TheRouteMenu v-if="showSideBar" @close="toggleSideBar" />
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import PIcon from '../base/PIcon.vue';
import TheRouteMenu from './TheRouteMenu.vue';

export default defineComponent({
  components: {
    PIcon,
    TheRouteMenu,
  },
  setup() {
    const showSideBar = ref(false);
    const toggleSideBar = () => {
      showSideBar.value = !showSideBar.value;
    };

    return {
      showSideBar,
      toggleSideBar,
    };
  },
});
</script>

<style scoped>
.v-enter-from, .v-leave-to {
  @apply w-2/6;
}
.v-enter-active, .v-leave-active {
  @apply transform ease-in duration-100;
}
</style>
