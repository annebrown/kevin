//<--------@@/base/nuxt.config.ts---------------------------------------------->
//------------------------------------------------------------------------------
//
// Shareable assets for use by any app in the monorepo
//
//------------------------------------------------------------------------------
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [join(currentDir, './assets/css/fleet.css')],
  tailwindcss: {
    configPath: join(currentDir, 'tailwind.config.ts'),
    exposeConfig: true,
    injectPosition: 0,
    viewer: true,
  }
})
//<--------@@/base/nuxt.config.ts---------------------------------------------->