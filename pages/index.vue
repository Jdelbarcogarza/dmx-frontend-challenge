<template>
	<NavBar />

	<!-- hero section -->
	<section class="bg-white">
		<div
			class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0"
		>
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight text-neutral-800 md:text-5xl xl:text-6xl"
				>
					Create Business Solution
				</h1>
				<p
					class="mb-6 max-w-2xl font-medium text-neutral-800 md:text-lg lg:mb-8 lg:text-3xl"
				>
					We work with international startups, help entrepreneurs launch for the
					long term.
				</p>
				<a
					href="#"
					class="hover:bg-primary-800 focus:ring-primary-300 mr-3 inline-flex items-center justify-center rounded border border-primary px-5 py-2.5 text-center text-base font-medium uppercase text-primary focus:ring-4"
				>
					Write to us
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="ml-2 fill-primary"
					>
						<path d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z" />
					</svg>
				</a>
			</div>
			<div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
				<img
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
					alt="mockup"
				/>
			</div>
		</div>
	</section>

	<!-- services section -->
	<section
		class="flex flex-col items-center justify-around bg-sky-50 py-20 md:flex-row-reverse"
	>
		<h4 class="-mt-8 mb-8 text-4xl font-bold capitalize text-blue-800">
			our<br class="hidden md:visible" />
			services
		</h4>

		<div
			class="flex w-full space-x-4 overflow-x-auto md:w-fit md:justify-center"
		>
			<ServiceCard
				title="Duis fermentum"
				image="https://res.cloudinary.com/imajin/image/upload/v1583497239/agency/service3_hiunda.jpg"
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, in. Quo tempore?
				</p>
			</ServiceCard>

			<ServiceCard
				title="Lorem Ipsum"
				image="https://res.cloudinary.com/imajin/image/upload/v1583497239/agency/service1_x3q49z.jpg"
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, in. Quo tempore?
				</p>
			</ServiceCard>

			<ServiceCard
				title="Etiam rhoncus"
				image="https://res.cloudinary.com/imajin/image/upload/v1583497239/agency/service2_o8mdey.jpg"
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, in. Quo tempore?
				</p>
			</ServiceCard>
		</div>
	</section>

	<!-- <ImageCarousel /> -->

	<div class="mb-52"></div>

	<!-- tal vez debas aplicar padding -->
	<div class="flex justify-center px-4">
		<ContactBanner />
	</div>

	<div class="mb-52"></div>

	<section
		class="grid w-full grid-flow-row grid-cols-1 gap-6 px-4 pb-8 md:grid-cols-2 md:grid-rows-1"
	>
		<div class="flex flex-col items-center justify-around">
			<h4 class="mb-8 h-fit text-center text-4xl font-bold text-blue-800">
				Our Office
			</h4>

			<div class="space-y-6">
				<ContactCard />
				<ContactCard class="" />
			</div>
		</div>

		<iframe
			class="h-[650px] w-full rounded-xl md:row-span-2"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
			style="border: 0"
			allowfullscreen="false"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</section>

	<div class="md:hidden p-5 space-y-5">
		<div class="flex items-center justify-center">
			<img
			class="grayscale opacity-60 w-14"
				src="https://veluxi3.vercel.app/_nuxt/agency-logo.5255aa36.svg"
				alt="logo"
			/>
			<h5 class="text-stone-400 text-xl ml-3">Agency Theme</h5>
		</div>
		<p class="text-center text-stone-500">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsam?
		</p>
	</div>

	<AnnouncementBanner />

	<MobileFooter class="md:hidden" />

	<div class="hidden md:flex justify-center space-x-8">
		<div class=" w-full px-16 md:visible max-w-fit justify-around flex">
			<div class="mt-10 max-w-sm space-y-5 p-5">
				<div class="flex items-center justify-center">
					<img
						class="w-14 opacity-60 grayscale"
						src="https://veluxi3.vercel.app/_nuxt/agency-logo.5255aa36.svg"
						alt="logo"
					/>
					<h5 class="ml-3 text-xl text-stone-400">Agency Theme</h5>
				</div>
				<p class="text-center text-stone-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
					ipsam?
				</p>
			</div>
			<DesktopFooter />

			<div class="flex flex-col space-y-10 px-4">
				<SocialIconsGroup />

				<button
					id="dropdownTopButton"
					data-dropdown-toggle="dropdownTop"
					data-dropdown-placement="top"
					class="mb-3 mr-3 inline-flex items-center justify-center rounded border border-blue-800 bg-white px-4 py-2.5 text-center font-medium text-blue-800 focus:outline-none focus:ring-4 md:mb-0"
					type="button"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 16 16"
						class="mr-2 h-4 w-4 fill-blue-800"
					>
						<path
							d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539a6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539a6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855c.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
						/>
					</svg>
					English
					<svg
						class="ml-8 h-4 w-4 justify-self-end"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>

				<div
					id="dropdownTop"
					class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
				>
					<ul
						class="py-2 text-sm text-gray-700 dark:text-gray-200"
						aria-labelledby="dropdownTopButton"
					>
						<li>
							<a
								href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>Dashboard</a
							>
						</li>
						<li>
							<a
								href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>Settings</a
							>
						</li>
						<li>
							<a
								href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>Earnings</a
							>
						</li>
						<li>
							<a
								href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>Sign out</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>
