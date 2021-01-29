<script>
import { defineComponent } from "vue";
import useCart from "../composables/useCart";

export default defineComponent({
    data(){
      return {
        toggleAnimation: false
      }
    },
    setup(){
        const { totalItems } = useCart()
        return {
            totalItems
        }
    },
    watch: {
      totalItems(val, oldVal) {
        this.toggleAnimation = true;
        setTimeout(() => {
          this.toggleAnimation = false;
        }, 500);
      }
    }
});
</script>

<template>
  <div class="absolute">
    <router-link
      :to="'/cart'"
      class="flex-shrink-0 p-1 text-indigo-200 bg-indigo-600 rounded-full hover:text-white"
    >
      <span class="sr-only">View Cart</span>
      <!-- Heroicon name: bell -->
      <svg
        class="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span 
        v-if="totalItems"
        :class="{'magictime puffOut': toggleAnimation}"
        class="relative inline-block w-6 p-1 text-xs text-center bg-red-500 border rounded-full left-4 bottom-4">
          {{ totalItems > 99 ? 99 : totalItems}}
      </span>

    </router-link>
  </div>
</template>
<style scoped>
  .magictime {
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
  }
</style>
