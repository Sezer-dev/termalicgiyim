export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Termal İç Giyim",
    htmlAttrs: {
      lang: "tr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://termalicgiyim.com/favicon.ico"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/Carousel.client.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "nuxt-i18n"
  ],
  i18n: {
    locales: [
      {
        code: "tr",
        file: "tr-TR.js"
      },
      {
        code: "en",
        file: "en-US.js"
      }
    ],
    lazy: true,
    defaultLocale: "tr",
    langDir: "lang/",
    vueI18n: {
      fallbackLocale: "tr"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
