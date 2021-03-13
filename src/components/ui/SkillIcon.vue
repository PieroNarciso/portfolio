<template>
  <div
    class="relative inline-flex items-center justify-center p-1 rounded-xl bg-brown hover:scale-125 transform duration-200 hover:bg-brown-dark"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <p-icon class="w-6 h-6 text-coolWhite-light" :icon="iconName"></p-icon>

    <!-- Tooltip -->
    <div
      v-if="showTooltip"
      class="absolute z-10 px-1 mb-16 text-xs uppercase bg-gray-800 rounded opacity-85 text-coolWhite-light"
    >
      {{ iconName }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import PIcon from '../base/PIcon.vue';

export default defineComponent({
  components: {
    PIcon,
  },
  props: {
    iconName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup() {
    const showTooltip = ref(false);

    return {
      showTooltip,
    };
  },
});
</script>
