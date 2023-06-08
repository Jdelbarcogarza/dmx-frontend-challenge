<template>
	<main class="py-6">
		<NuxtLink to="/" class="absolute invisible md:visible  left-28 z-30"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 24 24"
        class="fill-gray-600"
			>
				<path

					d="M5 20v-8H2l10-9l4 3.6V4h3v5.3l3 2.7h-3v8h-6v-6h-2v6H5Zm2-2h2v-6h6v6h2v-7.8l-5-4.5l-5 4.5V18Zm2-6h6h-6Zm1-1.975h4q0-.8-.6-1.313T12 8.2q-.8 0-1.4.513t-.6 1.312Z"
				/></svg>
		</NuxtLink>

		<div class="flex flex-col items-center justify-center text-center">
			<img
				class="w-14"
				src="https://veluxi3.vercel.app/_nuxt/agency-logo.5255aa36.svg"
				alt="logo"
			/>
			<h4 class="mt-8 text-4xl font-bold capitalize text-blue-800">
				Free project quote
			</h4>
			<p class="mt-4 px-16 text-xl">
				Do you have any questions? Are you ready to reduce cost and create new
				revenue? Or you simply want to say hi? Drop us a message.
			</p>
		</div>

		<div class="mt-28 flex justify-center">
			<form class="w-full max-w-2xl space-y-16 px-4 md:w-1/2">
				<div
					class="flex flex-col justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0"
				>
					<InputField label="Name" />
					<InputField label="Email" />
				</div>
				<div
					class="flex flex-col justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0"
				>
					<InputField label="Phone" />
					<InputField label="Company" />
				</div>
				<TextArea label="Message"></TextArea>

				<div class="flex flex-col items-center justify-between md:flex-row">
					<!-- terms and conditions -->
					<div>
						<div>
							<input type="checkbox" class="" />
							<label for="" class="ml-2">Lorem ipsum dolor sit. accept?</label>
						</div>
						<NuxtLink class="text-blue-500 underline"
							>Lorem & ipsum dolor *</NuxtLink
						>
					</div>

					<!-- button -->
					<a
						href="#"
						class="hover:bg-primary-800 focus:ring-primary-300 mt-8 inline-flex w-fit items-center justify-center rounded border border-primary px-6 py-2 text-center font-bold uppercase text-primary focus:ring-4 md:mt-0 md:px-6 md:py-2"
					>
						contact us
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
			</form>
		</div>
	</main>
</template>

<script lang="ts" setup>
import InputField from "~/components/contactsPage/InputField.vue";
import TextArea from "~/components/contactsPage/TextArea.vue";
</script>
