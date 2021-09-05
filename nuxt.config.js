export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'moshi-web',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Mosshi web, work in progress'
      },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: 'mosshi-web' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.mosshi.co'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Mosshi web'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Mosshi web, work in progress'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://i.imgur.com/M5wKKTK.png'
      },
      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'mosshi-web' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.mosshi.co'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Mosshi web'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Mosshi web, work in progress'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.imgur.com/M5wKKTK.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://i.imgur.com/M5wKKTK.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'mosshi-web'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.mosshi.co'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'mosshi-web',
      short_name: 'mosshi-web',
      description: 'Mosshi web, work in progress',
      theme_color: '#ffffff',
      dir: 'ltr',
      lang: 'es'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    moshiApi: process.env.MOSHI_API,
    mercadolibreUrl: process.env.MERCADOLIBRE_URL,
    mercadolibreClientId: process.env.MERCADOLIBRE_CLIENT_ID
  }
}
