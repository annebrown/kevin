//<--------@/nuxt.config.ts---------------------------------------------------->
//------------------------------------------------------------------------------
//
// App-specific config
// Uses monorepo shared assets
//
//------------------------------------------------------------------------------
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

export default defineNuxtConfig({

    extends: ['../../base'], // Extend monorepo's shared assets
    css: [ resolve(__dirname, 'app/assets/css/ship.css') ], 

    telemetry: false, // F Telemetry

    devtools: { enabled: true },
  
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },

    modules: [
        '@nuxt/ui',
        '@nuxt/content', 
        '@nuxt/image', 
        '@nuxtjs/mdc', 
        '@nuxtjs/tailwindcss', 
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@nuxt/icon',
    ],

    tailwindcss: {
        configPath: '../../base/tailwind.config.ts', // Path to Tailwind config
      },
    colorMode: {
        classSuffix: '',
        preference: 'dark',
    },
    srcDir: 'app/',

    content: {

        documentDriven: true,

        // Ignore "Number Dot" ordering in /content
        ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],
        
        highlight: {

            theme: {
                dark: 'github-dark',
                default: 'github-dark',
                light: 'github-light',
            },
            langs: ['go', 'regexp', 'perl', 'json', 'js', 'ts', 'tsx', 'html', 'css', 
                'vue','shell' , 'mdc', 'yaml', 'md', 'console', 'ini', 'java', 
                'diff', 'log', 'mermaid'
            ],
        }, // highlight
        
        sources: {
            github: { // GitHub Public Repo
              prefix: '/docs-pub', // Route Prefix
              driver: 'github',
              repo: "annebrown/content-base",
              branch: "main",
              dir: "content", 
            },
            localDocsPub: {
                prefix: '/local-docs-pub', // Route Prefix
                driver: 'fs',
                base: resolve(__dirname, '/home/anne/devy/prod/content-data/content-data/content'),
            },
            localDocsPriv: {
                prefix: '/docs-priv', // Route Prefix
                driver: 'fs',
                base: resolve(__dirname, '/home/anne/devy/proj/docs-priv/docs-priv/content'),
            },
            // backups: {
            //     prefix: '/local-backups',
            //     driver: 'fs',
            //     base: resolve(__dirname, '~/prod/content-data/backups'),
            // },
        }, // sources

        // Use Cache 4 Dev Server
        // - unless XXserver launched w alias (XXservernocache)
        // - Faster DX for CMS client dev
        watch: process.env.DISABLE_CONTENT_WATCH === 'true' ? false : {
            ws: { port: 4444, } // WebSocket server
        },

    }, // Content

    compatibilityDate: '2024-09-28',
    
    googleFonts: {
        download: true,
        families: {
            Roboto: true,
        }
    },
    features: {
        devLogs: true,
    },
  })
//<--------@/nuxt.config.ts---------------------------------------------------->