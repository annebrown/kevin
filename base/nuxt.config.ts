//<--------@@/base/nuxt.config.ts---------------------------------------------->
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({

    imports: {
        dirs: ['base/assets/data/**']
      },

    telemetry: false, // F Telemetry

    modules: [
        '@nuxtjs/tailwindcss', 
    ],

    alias: { // Base path
        'base': fileURLToPath(new URL('./base', import.meta.url)),
    },
    
    css: [join(currentDir, './assets/css/fleet.css')],
    
    tailwindcss: {
      configPath: join(currentDir, 'tailwind.config.ts'),
      exposeConfig: true,
      injectPosition: 0,
      viewer: true,
    },

    colorMode: {
        classSuffix: '',
        preference: 'dark',
    },

    googleFonts: {
        download: true,
        families: {
            Roboto: true,
        }
    },

})
//<--------@@/base/nuxt.config.ts---------------------------------------------->