<template>
  <button
    v-bind="$attrs"
    class="px-3 py-2 border-2 rounded text-coolWhite border-coolWhite focus:outline-none"
  >
    <slot></slot>
  </button> 
</template>
