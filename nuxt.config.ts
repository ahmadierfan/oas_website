// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['./assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  compatibilityDate: '2025-07-15',

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/orion-favicon.ico" },
      ]
    }
  }
})
