<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ['action']
});
</script>
<template>
  <div @click="action">
    <button
      class="flex px-6 py-2 space-x-4 text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
    >
      <slot name="icon"></slot>
      <span><slot></slot></span>
    </button>
  </div>
</template>