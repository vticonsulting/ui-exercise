<template>
  <form class="flex w-full md:ml-0" action="#" method="GET">
    <label for="search_field" class="sr-only">Search</label>
    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
      <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </div>
      <input
        id="search_field"
        class="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 rounded-md focus:outline-none focus:placeholder-gray-400 sm:text-sm"
        placeholder="Search"
        type="search"
      />
    </div>
  </form>
</template>
