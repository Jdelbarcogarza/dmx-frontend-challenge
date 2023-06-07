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

	<div class="p-5 space-y-5">
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

	<MobileFooter />
</template>

<script lang="ts" setup></script>
