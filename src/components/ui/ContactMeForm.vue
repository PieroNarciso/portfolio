<template>
  <form class="flex-col space-y-3">
    <PInput placeholder="Name" v-model="nameInput" />
    <PInput placeholder="Email" v-model="emailInput" />
    <PInput placeholder="Subject" v-model="subjectInput" />
    <PTextarea placeholder="Message" v-model="messageInput" />
    <div class="flex flex-row-reverse">
      <PBtn class="inline-flex items-center mt-3" type="button" @click="sendMessage">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
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

export default defineComponent({
  components: {
    PInput,
    PTextarea,
    PBtn,
  },
  setup() {
    const nameInput = ref('');
    const emailInput = ref('');
    const subjectInput = ref('');
    const messageInput = ref('');

    const sendMessage = async () => {
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID as string;
      const USER_ID = import.meta.env.VITE_USER_ID as string;

      const resEmail = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_email: emailInput.value,
        from_name: nameInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
      }, USER_ID);

      console.log(resEmail);
    };

    return {
      nameInput,
      emailInput,
      subjectInput,
      messageInput,
      sendMessage,
    };
  },
});
</script>
