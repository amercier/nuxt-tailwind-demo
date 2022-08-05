export default {
  devServerHandlers: [], // https://github.com/nuxt-community/tailwindcss-module/issues/480
  // Auto-load components/
  components: true,
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  tailwindcss: {
    exposeConfig: true
  }
};
