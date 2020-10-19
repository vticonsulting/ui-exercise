<template>
  <Layout>
    <div class="overflow-hidden">
      <Nuxt keep-alive :key="$route.params.id" />
    </div>

    <template #header>
      <Navbar />
    </template>

    <template #footer>
      <Footer />
    </template>

    <PortalTarget name="modals" />
    <SvgSprite />
  </Layout>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head() {
    return {
      title: '',
      titleTemplate: chunk => {
        if (chunk) {
          return `${chunk} - UI Exercise`
        }
        return 'UI Exercise'
      },
      bodyAttrs: {
        class: ['bg-gray-100 dark:bg-gray-800 antialiased'],
      },
    }
  },
}
</script>
