<template>
  <TheNavbar />
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheNavbar from './components/layout/TheNavbar.vue';

export default defineComponent({
  components: {
    TheNavbar,
  },
  name: 'App',
});
</script>
