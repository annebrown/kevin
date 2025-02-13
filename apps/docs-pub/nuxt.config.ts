//<--------@/nuxt.config.ts---------------------------------------------------->
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from "path" // Rqd for locally cloned CMS

export default defineNuxtConfig({

    telemetry: false, // F Telemetry

    extends: ['../../base'],
    css: [ resolve(__dirname, 'app/assets/css/ship.css') ], 
    srcDir: 'app/',
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },
    tailwindcss: {
        configPath: '../../base/tailwind.config.ts',
    },

    modules: [
        '@nuxt/ui',
        '@nuxt/content', 
        '@nuxtjs/tailwindcss', 
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@nuxt/image', 
        '@nuxtjs/mdc', 
        '@nuxt/icon',
    ],

    content: {
        // Use Cache 4 Dev Server
        // - unless XXserver launched w alias (XXservernocache)
        // - Faster DX for CMS client dev
        watch: process.env.DISABLE_CONTENT_WATCH === 'true' ? false : {
            ws: { port: 4444, } // WebSocket server
        },

        documentDriven: true,

        // Ignore "Number Dot" ordering in /content
        ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],

        highlight: {

            theme: {
                dark: 'github-dark',
                default: 'github-dark',
                light: 'github-light',
            },
        
            langs: ['go', 'regexp', 'perl', 'json', 'js', 'ts', 'tsx', 'html', 
                'css', 'vue','shell' , 'mdc', 'yaml', 'md', 'console', 'ini', 
                'java', 'diff', 'log', 'mermaid'
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
                base: resolve(__dirname, 
                    '/home/anne/devy/prod/content-data/content-data/content'),
            },
            localDocsPriv: {
                prefix: '/docs-priv', // Route Prefix
                driver: 'fs',
                base: resolve(__dirname, 
                    '/home/anne/devy/proj/docs-priv/docs-priv/content'),
            },
            // backups: {
            //     prefix: '/local-backups',
            //     driver: 'fs',
            //     base: resolve(__dirname, '~/prod/content-data/backups'),
            // },

        }, // sources
    }, // Content

    devtools: { enabled: true },

    colorMode: {
        classSuffix: '',
        preference: 'dark',
    },

    compatibilityDate: '2024-09-28',
})
//<--------@/nuxt.config.ts---------------------------------------------------->