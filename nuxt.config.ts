// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {

			link: [
				{
					rel: "stylesheet",
					href: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css",
				},
			],
			script: [{ src: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.js" }],
		},
	},

	modules: ["nuxt-icon"],
	css: ["~/assets/css/main.css"],
	plugins: ["~/plugins/autoAnimatePlugin.ts"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
