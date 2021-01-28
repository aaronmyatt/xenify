<template>
    <div class="pb-32 bg-indigo-600">
      <header class="py-10">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">
            <slot name="header"></slot>
          </h1>
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="px-5 py-6 bg-white rounded-lg shadow sm:px-6">
          <div class="border-4 border-gray-200 border-dashed rounded-lg">
            <slot></slot>
          </div>
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