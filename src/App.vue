<template>
  <the-navbar />
  <div class="flex">
    <div class="hidden md:inline-block">
      <the-side-bar  class="bg-gray-600"/>
    </div>
    <div>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheNavbar from './components/layout/TheNavbar.vue';
import TheSideBar from './components/layout/TheSideBar.vue';

export default defineComponent({
  components: {
    TheNavbar,
    TheSideBar,
  },
  name: 'App',
});
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
.fade-enter-active {
  @apply transform duration-1000;
}
.fade-leave-active {
  @apply transform duration-150;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}
</style>
