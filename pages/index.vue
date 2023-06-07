<template>
	<NavBar />
	<section class="bg-white">
		<!-- hero section -->
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
	<section class="flex flex-col md:flex-row-reverse bg-sky-50 justify-around items-center py-20">
		<h4 class="-mt-8 mb-8 text-4xl font-bold capitalize text-blue-800">our<br class="hidden md:visible" /> services</h4>

		<div class="flex space-x-4 overflow-x-auto ">
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
	<div class="flex justify-center">

		<ContactBanner />
	</div>
  
  <div class="mb-52"></div>

	<ContactCard />

</template>

<script lang="ts" setup></script>
