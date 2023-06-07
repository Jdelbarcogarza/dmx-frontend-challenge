/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite.{js,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00BCD4"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

