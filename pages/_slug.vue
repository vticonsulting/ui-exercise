<template>
  <div class="p-8">
    <!-- <h1>{{ page.title }}</h1> -->
    <!-- <h2>{{ page.subtitle }}</h2> -->

    <NuxtContent class="mt-4" :document="page" />
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
