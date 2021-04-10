<template>
  <div class="fixed md:absolute z-10 flex items-center justify-between w-full px-3 py-2 shadow-xl bg-primary-light">
    <div>
      <BurgerMenu class="md:hidden"/>
    </div>
    <SocialBar class="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SocialBar from '../ui/SocialBar.vue';
import BurgerMenu from '../ui/BurgerMenu.vue';

export default defineComponent({
  components: {
    SocialBar,
    BurgerMenu,
  },
  setup() {
    
  },
})
</script>

