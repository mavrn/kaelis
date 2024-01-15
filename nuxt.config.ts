// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    renderJsonPayloads: false,
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
});
