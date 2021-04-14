<template>
  <textarea
    v-bind="$attrs"
    class="w-full text-lg border-0 rounded resize-none bg-coolWhite-dark placeholder-primary-dark placeholder-opacity-60 focus:ring-offset-2 focus:ring-offset-primary focus:ring-2 focus:ring-secondary-dark transition duration-300"
    @input="updateModelValue"
    :value="modelValue"
    rows="5"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String as PropType<string>,
    }
  },
  setup(_, context) {
    const updateModelValue = (event: { target: HTMLTextAreaElement }) => {
      context.emit('update:modelValue', event.target.value);
    };
    
    return {
      updateModelValue,
    };
  },
})
</script>

