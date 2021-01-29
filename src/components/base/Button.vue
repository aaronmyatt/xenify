<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    action: {
      type: Function,
      default: () => {
        console.log('No Action Defined')
      }
    },
    styles: {
      type: Object,
      default: () => {
        return {
          backgroundColour: 'bg-indigo-500',
          hoverBackgroundColour: 'hover:bg-indigo-600',
        }
      }
    }
  }
});
</script>
<template>
  <div @click="action">
    <button
      class="flex px-6 py-2 space-x-4 text-white border-0 rounded focus:outline-none"
      :class="[styles.backgroundColour, styles.hoverBackgroundColour]"
    >
      <slot name="icon"></slot>
      <span><slot></slot></span>
    </button>
  </div>
</template>