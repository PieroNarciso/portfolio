<template>
  <div
    class="overflow-hidden bg-primary-light grid grid-cols-1 rounded-md hover:shadow-xl transform hover:scale-105 duration-300"
  >
    <div class="h-48">
      <img
        class="object-cover object-top w-full h-full cursor-pointer"
        v-if="item.path"
        @click="toggleImg"
        :src="item.path"
        alt=""
      />
    </div>
    <div class="flex-col p-4">
      <h1 class="text-xl font-bold tracking-wide text-coolWhite-dark">
        {{ item.name }}
      </h1>
      <p class="text-coolWhite-dark">{{ item.description }}</p>
      <div class="flex items-center justify-center mt-3 space-x-2">
        <div
          class="inline-flex items-center justify-center p-1 rounded-xl bg-brown hover:scale-125 transform duration-200 hover:bg-brown-dark"
          v-for="tec in item.tecnologies"
          :key="tec"
        >
          <p-icon class="w-6 h-6 text-coolWhite-light" :icon="tec"></p-icon>
        </div>
      </div>
    </div>
  </div>

  <teleport to="body">
    <transition>
      <div
        v-if="showImg"
        class="fixed top-0 w-screen h-screen px-8 pt-4 pb-8 bg-gray-800 bg-opacity-50"
      >
        <div class="flex flex-row-reverse mb-4">
          <button
            @click="toggleImg"
            class="focus:outline-none hover:scale-105 transform duration-150"
          >
            <p-icon
              class="w-10 h-10 text-coolWhite-light"
              icon="close"
            ></p-icon>
          </button>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img
            class="w-full h-full"
            @click="toggleImg"
            :src="item.path"
            alt=""
          />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { PortafolioItem } from '../../types';
import PBtn from '../base/PBtn.vue';
import PIcon from '../base/PIcon.vue';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<PortafolioItem>,
      required: true,
    },
  },
  components: {
    PBtn,
    PIcon,
  },
  setup() {
    const showImg = ref(false);
    const toggleImg = () => {
      showImg.value = !showImg.value;
    };

    return {
      showImg,
      toggleImg,
    };
  },
});
</script>

<style scoped>
.v-enter-from {
  @apply opacity-10;
}

.v-enter-active {
  @apply duration-300;
}

.v-enter-to {
  @apply opacity-100;
}
.v-leave-from {
  @apply opacity-100;
}
.v-leave-to {
  @apply opacity-0
}
.v-leave-active {
  @apply duration-300;
}
</style>
