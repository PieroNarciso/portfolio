<template>
  <section id="contact" class="pt-4 bg-primary" v-bind="$attrs">
    <TitleSection> Contact Me </TitleSection>
    <div class="mt-12 text-lg grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-32">
      <div class="lg:col-span-1">
        <p class="lg:text-2xl md:text-xl text-coolWhite-light lg:mt-8 xl:mt-12 2xl:mt-20 2xl:px-12">
          I am interested in job offers, freelancer opportunities for web projects, as a fullstack web developer or backend developer. I am open to take any challenge. If you have any other request or question, feel free to ask.
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
