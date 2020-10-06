<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <slot name="header" :logo="logoImage" />
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <aside>
      <slot name="sidebar" />
    </aside>

    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    logoImage: {
      type: String,
      default: 'inbox',
    },
  },
}
</script>
