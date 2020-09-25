import path from 'path'

export default {
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  ssr: false,
  head: {
    title: 'UI Exercise',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'UI Exercise'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },
  components: true,
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],
  buildModules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/vue-feather-icons.js'],
  serverMiddleware: ['~/api/index.js'],
  router: {
    linkActiveClass: 'is-active',
  },
  loading: {
    color: '#d5504c',
    height: '5px',
  },
  loadingIndicator: {
    name: 'rotating-plane',
    background: '#d5504c',
    color: 'white',
  },
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-preset-env': {},
      },
    },
    preset: {
      stage: 1,
    },
  },
  generate: {
    fallback: true,
  },
}
