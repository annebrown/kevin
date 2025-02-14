import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './public/**/*.html',
    './app/**/*.{js,jsx,ts,tsx,vue}',
    './assets/css/**/*.{css,scss}',
    './assets/data/**/*.{js,ts}', // Project Data
  ],
  theme: {
    extend: {},
    fontFamily: {
        'sans': ["Inter var", "ui-sans-serif", "system-ui", "sans-serif", 
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 
            "Noto Color Emoji"
        ],
        // 'serif': ['ui-serif', 'Georgia', ...],
        // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
        // 'display': ['Oswald', ...],
        // 'body': ['"Open Sans"', ...],
      }
  },
  plugins: [tailwindTypography],
} satisfies Config