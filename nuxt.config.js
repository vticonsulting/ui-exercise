import path from 'path'

export default {
  server: {
    host: '0.0.0.0',
    port: 8701,
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8701',
    apiUrl: process.env.API_URL || 'http://localhost.8701/api',
    assetsUrl: process.env.ASSETS_URL || 'http://localhost:8701',
  },
  ssr: false,
  target: 'static',
  head: {
    title: 'UI Exercise',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'UI Exercise'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Inter:400,500,600&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css',
      },
    ],
  },
  components: true,
  modules: ['@nuxt/content', '@nuxtjs/axios', '@nuxtjs/sentry', 'nuxt-buefy'],
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/composition-api',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
    'nuxt-ackee',
  ],
  plugins: [
    '@/plugins/portal-vue',
    '@/plugins/vue-content-placeholders',
    '@/plugins/vue-feather-icons',
  ],
  serverMiddleware: ['@/server'],
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
  },
  loading: false,
  // loading: {
  //   color: '#d5504c',
  //   height: '5px',
  // },
  // loadingIndicator: {
  //   name: 'rotating-plane',
  //   background: '#d5504c',
  //   color: 'white',
  // },
  ackee: {
    server: 'https://cranky-borg.herokuapp.com',
    domainId: '601bbeb1-8a0a-4d5d-ba1f-a75ce1cefda3',
    ignoreLocalhost: false,
    detailed: true,
  },
  axios: {
    baseURL: process.env.apiUrl || 'http://localhost:8701/api',
    credentials: true,
  },
  buefy: {
    css: false,
  },
  colorMode: {
    preference: 'light',
  },
  content: {
    markdown: {
      remarkPlugins: [['remark-emoji', {emoticon: true}]],
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
    nestedProperties: ['author.name', 'categories.slug'],
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID || 'UA-76464598-4',
    },
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  // sentry: {
  //   dsn: 'https://c30dc69c78434050aed6f64b97cbd645@o244691.ingest.sentry.io/1422222',
  //   config: {
  //     maxBreadcrumbs: 50,
  //     debug: false,
  //   },
  // },
  build: {
    babel: {
      plugins: ['@babel/plugin-syntax-jsx'],
    },
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
  purgeCSS: {
    whitelist: ['dark-mode'],
    whitelistPatternsChildren: [/^token/, /^pre/, /^code/, /^nuxt-content/],
  },
  generate: {
    interval: 2000,
    fallback: true,
  },
}
