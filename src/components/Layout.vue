<template>
    <div class="bg-indigo-600 sm:pb-32">
      <header class="py-2 sm:py-10">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">
            <slot name="header"></slot>
          </h1>
        </div>
      </header>
    </div>

    <main class="sm:-mt-32">
      <div class="pb-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="px-5 py-6 bg-white rounded-lg shadow sm:px-6">
          <slot></slot>
        </div>
      </div>
    </main>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout'
})
</script>