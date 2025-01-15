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
    './assets/css/**/*.{css,scss}', // Add this line to include CSS files
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography],
} satisfies Config