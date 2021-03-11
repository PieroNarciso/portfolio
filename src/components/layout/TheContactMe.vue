<template>
  <section class="px-4 pt-4 bg-primary" v-bind="$attrs">
    <TitleSection>
      Contact Me
    </TitleSection>
    <div class="mt-12">
      <ContactMeForm />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ContactMeForm from '../ui/ContactMeForm.vue';
import TitleSection from '../ui/TitleSection.vue';

export default defineComponent({
  components: {
    ContactMeForm,
    TitleSection,
  },
  setup() {},
});
</script>
