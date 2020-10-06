<template>
  <div class="flex items-center mr-2 -ml-2 md:hidden">
    <button
      class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
      aria-label="Main menu"
      aria-expanded="false"
    >
      <!-- Icon when menu is closed. -->
      <!-- Heroicon name: menu / Menu open: "hidden", Menu closed: "block" -->
      <svg class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <!-- Icon when menu is open. -->
      <!-- Heroicon name: x / Menu open: "block", Menu closed: "hidden" -->
      <svg class="hidden w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>
