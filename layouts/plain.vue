<template>
  <Layout>
    <PortalTarget name="modals" />
    <SvgSprite />
    <AnnouncementBanner />
    <Nuxt keep-alive :key="$route.params.id" />
  </Layout>
</template>
