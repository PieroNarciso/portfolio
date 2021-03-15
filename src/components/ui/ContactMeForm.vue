<template>
  <form class="flex-col space-y-3">
    <PInput placeholder="Name" v-model="nameInput" />
    <PInput placeholder="Email" v-model="emailInput" />
    <PInput placeholder="Subject" v-model="subjectInput" />
    <PTextarea placeholder="Message" v-model="messageInput" />
    <div class="flex flex-row-reverse">
      <PBtn
        class="inline-flex items-center mt-3 md:text-lg"
        type="button"
        @click="sendMessage"
        :loading="isLoading"
      >
        <template #icon>
          <p-icon class="w-6 h-6" icon="mail"></p-icon>
        </template>
        <span class="ml-2">Send Message</span>
      </PBtn>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import emailjs from 'emailjs-com';

import PInput from '../base/PInput.vue';
import PTextarea from '../base/PTextarea.vue';
import PBtn from '../base/PBtn.vue';
import PIcon from '../base/PIcon.vue';

export default defineComponent({
  components: {
    PInput,
    PTextarea,
    PBtn,
    PIcon,
  },
  setup() {
    const nameInput = ref('');
    const emailInput = ref('');
    const subjectInput = ref('');
    const messageInput = ref('');

    const isLoading = ref(false);

    const sendMessage = async () => {
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID as string;
      const USER_ID = import.meta.env.VITE_USER_ID as string;

      isLoading.value = true;

      const resEmail = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: emailInput.value,
          from_name: nameInput.value,
          subject: subjectInput.value,
          message: messageInput.value,
        },
        USER_ID
      );
      isLoading.value = false;
      if (resEmail.status === 200) {
        console.log('Email Sent');
      } else {
        console.log('Error');
      }

      console.log(resEmail);
    };

    return {
      nameInput,
      emailInput,
      subjectInput,
      messageInput,
      sendMessage,
      isLoading,
    };
  },
});
</script>
