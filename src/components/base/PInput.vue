<template>
  <input
    v-bind="$attrs"
    type="text"
    :value="modelValue"
    @input="updateModelValue"
    class="w-full text-lg border-0 rounded placeholder-primary-dark bg-coolWhite-dark placeholder-opacity-60 focus:ring-offset-2 focus:ring-offset-primary focus:ring-2 focus:ring-secondary-dark transition duration-300"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
    },
  },
  setup(_, context) {
    const updateModelValue = (event: { target: HTMLInputElement }) => {
      context.emit('update:modelValue', event.target.value);
    };

    return {
      updateModelValue,
    };
  },
});
</script>
