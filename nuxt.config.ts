// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  vite: {
    clearScreen: false,
    server: {
      strictPort: true,
    },
  },
})
