<template>
  <div
    class="overflow-hidden bg-primary-light grid grid-cols-1 rounded-md hover:shadow-xl transform hover:scale-105 duration-300 lg:grid-cols-8"
  >
    <div class="h-52 sm:h-64 md:h-80 xl:h-96 lg:col-span-3">
      <img
        class="object-cover object-top w-full h-full cursor-pointer"
        v-if="item.path"
        @click="toggleImg"
        :src="item.path"
        alt=""
      />
    </div>
    <div class="flex flex-col justify-between p-4 lg:col-span-5">
      <div>
        <div class="flex flex-row items-center justify-between">
          <h1
            class="text-2xl font-bold tracking-wide sm:text-3xl text-coolWhite-dark"
          >
            {{ item.name }}
          </h1>
          <a
            class="flex items-center px-2 py-1 font-medium rounded-lg text-coolWhite-light focus:outline-none bg-primary-dark hover:bg-primary hover:text-coolWhite-dark"
            :href="item.github"
            target="_blank"
            rel="noreferrer"
          >
            Code
            <p-icon
              class="inline-block w-6 h-6 ml-2 text-coolWhite-light"
              icon="code"
            ></p-icon>
          </a>
        </div>
        <p class="mt-4 sm:mt-6 sm:text-lg text-coolWhite-dark">
          {{ item.description }}
        </p>
        <div class="flex items-center justify-center mt-3 sm:mt-5 space-x-3">
          <template v-for="tec in item.tecnologies" :key="tec">
            <SkillIcon :icon-name="tec" />
          </template>
        </div>
      </div>

      <div class="flex flex-row-reverse mt-4" v-if="item.link">
        <p-btn class="font-semibold tracking-wide" :href="item.link">
          Take a look
          <p-icon class="inline-block ml-1 w-7 h-7" icon="arrow-right"></p-icon>
        </p-btn>
      </div>
    </div>
  </div>

  <teleport to="body">
    <transition>
      <div
        v-if="showImg"
        class="fixed top-0 z-20 w-screen h-screen px-8 pt-4 pb-8 bg-gray-800 bg-opacity-60"
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
        <div
          class="flex items-center justify-center overflow-hidden rounded-lg"
        >
          <img class="h-full" @click="toggleImg" :src="item.path" alt="" />
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
import SkillIcon from './SkillIcon.vue';

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
    SkillIcon,
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
  @apply opacity-0;
}
.v-leave-active {
  @apply duration-300;
}
</style>
