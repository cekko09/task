// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  ssr: false, 
  nitro: {
    preset: 'vercel', 
  },
  vite: {
    optimizeDeps: {
      include: ['naive-ui', 'vue'],
      esbuildOptions: {
        format: 'esm'
      }
    }
  }
})
