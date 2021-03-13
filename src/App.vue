<template>
  <TheNavbar />
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheNavbar from './components/layout/TheNavbar.vue';

export default defineComponent({
  components: {
    TheNavbar,
  },
  name: 'App',
});
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
.fade-enter-active,
.fade-leave-active {
  @apply transform duration-150;
};
.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}
</style>
