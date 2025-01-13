import tailwindTypography from '@tailwindcss/typography'

module.exports = {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './public/**/*.html',
      './app/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {},
    },
    plugins: [tailwindTypography()],
  }