<template>
  <section class="pt-4 bg-primary" v-bind="$attrs">
    <TitleSection> Contact Me </TitleSection>
    <div class="mt-12 lg:grid-cols-2 lg:grid lg:gap-8">
      <div class="mt-12 lg:col-span-1">
        <p class="lg:text-2xl text-coolWhite-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="lg:col-span-1">
        <ContactMeForm />
      </div>
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
