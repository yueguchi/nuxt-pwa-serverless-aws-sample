const { ENV } = require('./configs/env')

const routerConfig = {
  middleware: 'redirectAppRoot'
}
if (ENV.BASE_URL) {
  routerConfig.base = ENV.BASE_URL
}

module.exports = {
  mode: 'universal',

  srcDir: 'app/',

  router: {
    ...routerConfig
  },

  render: {
    /**
     * compression を通すと API Gateway がレスポンスを返せないので
     * なにもしないミドルウェアを定義しておく
     */
    compressor: (req, res, next) => {
      next()
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-pwa-serveless-sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt-pwa-serveless-sample' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'nuxt-pwa-lambda-sample',
    lang: 'ja',
    short_name: 'npls',
    title: 'nuxt-pwa-lambda-sampleです',
    'og:title': 'nuxt-pwa-lambda-sampleです',
    description: 'nuxt-pwa-lambda-sampleです',
    'og:description': 'nuxt-pwa-lambda-sampleです',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  workbox: {
    dev: true, //開発環境でもPWA
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}
