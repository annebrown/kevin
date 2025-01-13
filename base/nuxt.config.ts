//<--------@@/base/nuxt.config.ts---------------------------------------------->
//------------------------------------------------------------------------------
//
// Shareable assets for use by any app in the monorepo
//
//------------------------------------------------------------------------------
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  }
})
//<--------@@/base/nuxt.config.ts---------------------------------------------->