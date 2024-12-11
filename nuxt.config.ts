// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],

  css: ['~/assets/css/main.css'],

  pwa: {
    manifest: {
      name: 'Ask you out',
      short_name: 'Ask out',
      description: 'Say yes to me!',
      lang: 'en',
      theme_color: '#f9a8d4',
      background_color: '#f9a8d4',
      prefer_related_applications: true,
      orientation: 'any',
      display: 'standalone',
      icons: [
        {
          purpose: 'maskable',
          src: 'icon512_maskable.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          purpose: 'any',
          src: 'icon512_rounded.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },


  runtimeConfig: {
    public: {
      NAME: process.env.NAME,
      BOT_TOKEN: process.env.BOT_TOKEN,
      USER_ID: process.env.USER_ID
    }
  }
})