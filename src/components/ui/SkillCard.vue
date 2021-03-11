<template>
  <div
    class="relative flex items-center overflow-hidden rounded-lg shadow-md group ease-in-out bg-primary-light hover:shadow-xl hover:bg-opacity-60"
  >
    <div
      class="absolute flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-50 bg-secondary-light"
    >
      <p class="text-2xl font-bold tracking-wide uppercase opacity-100 text-primary-dark">
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
