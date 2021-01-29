<template>
  <nav
    class="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none"
  >
    <div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
      <div
        class="relative flex items-center justify-between h-16 lg:border-b lg:border-indigo-400 lg:border-opacity-25"
      >
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <img
              class="block w-8 h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden lg:block lg:ml-10">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navItems"
                :key="item"
                class="px-3 py-2 text-sm font-medium text-white rounded-md"
                :class="
                  $route.path === item.route
                    ? 'bg-indigo-700'
                    : 'hover:bg-indigo-500 hover:bg-opacity-75'
                "
                :to="item.route"
              >
                {{ item.label }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
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
                class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </div>
          <div class="items-center hidden px-4 lg:flex">
            <CartButton />
          </div>
        </div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 text-indigo-200 bg-indigo-600 rounded-md hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
            aria-expanded="false"
            @click="mobileMenuVisible = !mobileMenuVisible"
          >
            <span class="sr-only">Open main menu</span>
            <!--
                Heroicon name: menu

                Menu open: "hidden", Menu closed: "block"
              -->
            <svg
              v-if="!mobileMenuVisible"
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
                Heroicon name: x

                Menu open: "block", Menu closed: "hidden"
              -->
            <svg
              v-else
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class="lg:hidden"
      :class="{ block: mobileMenuVisible, hidden: !mobileMenuVisible }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item"
          class="block px-3 py-2 text-base font-medium text-white rounded-md"
          :class="
            $route.path === item.route
              ? 'bg-indigo-700'
              : 'hover:bg-indigo-500 hover:bg-opacity-75'
          "
          :to="item.route"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CartButton from "./CartButton.vue";

export default defineComponent({
  name: "Navbar",
  components: {
    CartButton
  },
  data() {
    return {
      navItems: [
        {
          label: "Home",
          route: "/",
        },
        {
          label: "About",
          route: "/about",
        },
      ],
      mobileMenuVisible: false,
    };
  },
});
</script>