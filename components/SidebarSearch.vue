<template>
  <div class="px-3 mt-5">
    <label for="search" class="sr-only">Search</label>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <!-- Heroicon name: search -->
        <svg
          class="w-4 h-4 mr-3 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
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
        class="block w-full form-input pl-9 sm:text-sm sm:leading-5"
        placeholder="Search"
        autocomplete="off"
      />
    </div>
  </div>
</template>
