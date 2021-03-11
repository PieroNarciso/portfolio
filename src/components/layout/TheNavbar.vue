<template>
  <div class="absolute flex items-center justify-between w-full px-3 py-2 bg-primary-light">
    <div>
      <BurgerMenu />
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

