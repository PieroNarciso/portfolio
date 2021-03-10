<template>
  <div
    class="relative flex items-center overflow-hidden rounded-lg shadow-md group ease-in-out bg-brown hover:shadow-xl hover:scale-105 transform duration-300 hover:bg-opacity-60"
  >
    <div
      class="absolute flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-70 bg-primary-dark"
    >
      <p class="text-2xl font-semibold uppercase text-coolWhite-light">
        {{ item.name }}
      </p>
    </div>
    <div class="p-4">
      <img class="object-cover" :src="item.path" :alt="item.name" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<{ name: string; path: string }>,
      required: true,
    },
  },
  setup() {},
});
</script>
