<template>
  <div
    class="flex items-center h-screen bg-gradient-to-b from-primary-light to-primary"
  >
    <div class="px-2">
      <transition-group appear>
        <h1
          class="text-5xl font-semibold ease-in-out text-coolWhite transform transition duration-200 hover:scale-110 hover:translate-x-4"
          key="transition-1"
        >
          <span
            class="hover:text-secondary-dark transition duration-100"
            v-for="(char, index) in name"
            :key="index"
          >
            {{ char }}
          </span>
        </h1>
        <h1 class="text-3xl font-semibold text-coolWhite" key="transition-2">
          <span
            class="hover:text-secondary-dark transition duration-100"
            v-for="(char, index) in presentationName"
            :key="index"
          >
            {{ char }}
          </span>
        </h1>
      </transition-group>

      <p-btn
        class="mt-5 font-semibold uppercase"
        @click="$router.push({ name: 'Contact' })"
      >
        Contact Me
      </p-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import PBtn from '../base/PBtn.vue';

export default defineComponent({
  components: {
    PBtn,
  },
  setup() {
    const name = ref("I'm Piero".split(''));
    const presentationName = ref('Fullstack Web Developer'.split(''));

    return {
      name,
      presentationName,
    };
  },
});
</script>

<style lang="css" scoped>
.v-enter-from {
  @apply opacity-0 translate-x-12 scale-75;
}
.v-enter-to {
  @apply opacity-100 translate-x-0 scale-100;
}
.v-enter-active {
  @apply transition ease-in-out duration-1000;
}
</style>
