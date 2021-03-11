<template>
  <div class="space-x-4">
    <p-fab-btn href="https://github.com/PieroNarciso">
      <p-icon class="text-coolWhite-light w-7 h-7" icon="github"></p-icon>
      <p class="ml-2">Github</p>
    </p-fab-btn>
    <p-fab-btn href="https://www.linkedin.com/in/piero-narciso/">
      <p-icon class="w-7 h-7 text-coolWhite-light" icon="linkedin"></p-icon>
      <p class="ml-2">LinkedIn</p>
    </p-fab-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PFabBtn from '../base/PFabBtn.vue';
import PIcon from '../base/PIcon.vue';

export default defineComponent({
  components: {
    PFabBtn,
    PIcon,
  },
  setup() {},
});
</script>
