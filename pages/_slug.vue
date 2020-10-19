<template>
  <div class="flex w-full h-full p-12 overflow-hidden bg-white">
    <h1 class="text-3xl font-bold">{{ page.title }}</h1>
    <h2 class="text-3xl font-bold">{{ page.subtitle }}</h2>

    <NuxtContent class="mt-4 prose" :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const page = await $content(params.slug || 'index')
      .fetch()
      .catch(err => {
        console.log(err)
        // eslint-disable-next-line no-undef
        error({statusCode: 404, message: 'Page not found'})
      })

    return {page}
  },
}
</script>
