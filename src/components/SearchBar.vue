<script lang="ts">
import { defineComponent } from "vue";
import useSearch from "../composables/useSearch";

export default defineComponent({
  data() {
    return {
      searchTerm: "",
    };
  },
  setup() {
    const { search } = useSearch();
    return {
      search,
    };
  },
  watch: {
    searchTerm(term){
      this.search(term);
    }
  },
});
</script>

<template>
  <div class="w-full max-w-lg lg:max-w-xs">
    <label for="search" class="sr-only">Search</label>
    <div class="relative text-gray-400 focus-within:text-gray-600">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <!-- Heroicon name: search -->
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        id="search"
        v-model="searchTerm"
        class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
        placeholder="Search"
        type="search"
        name="search"
      />
    </div>
  </div>
</template>
