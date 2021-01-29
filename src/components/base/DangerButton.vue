<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
  components: {
    Button
  },
  props: {
    action: {
      type: Function,
      default: () => {
        console.log("No Action Defined");
      },
    },
  },
});
</script>
<template>
  <div>
    <Button
      :action="action"
      :styles="{
        backgroundColour: 'bg-red-500',
        hoverBackgroundColour: 'hover:bg-red-600',
      }"
    >
      <slot></slot>
    </Button>
  </div>
</template>