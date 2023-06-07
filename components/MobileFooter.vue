<template>
	<div class="py-4">
		<div class="flex justify-center">
			<div id="accordion-collapse" data-accordion="collapse" class="mt-11 w-full max-w-lg">
				<AccordionItem :item-number="1" title="Company">
					<ul class="space-y-5 text-stone-400">
						<li>
							<NuxtLink to="#">Team</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#">History</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#">Contact us</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#">Locations</NuxtLink>
						</li>
					</ul>
				</AccordionItem>

				<AccordionItem :item-number="2" title="Resources">
					<ul class="space-y-5 text-stone-400">
						<li>
							<NuxtLink to="#">Resource</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#">Resource name</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#">Another resource</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#">Final resource</NuxtLink>
						</li>
					</ul>
				</AccordionItem>

				<AccordionItem :item-number="3" title="Legal">
					<ul class="space-y-5 text-stone-400">
						<li>
							<NuxtLink to="#">Privacy policy</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#">Terms of use</NuxtLink>
						</li>
					</ul>
				</AccordionItem>
			</div>
		</div>

		<!-- social icons -->

		<SocialIconsGroup />

		<div class="mt-4 flex justify-center">
			<button
				id="dropdownTopButton"
				data-dropdown-toggle="dropdownTop"
				data-dropdown-placement="top"
				class="mb-3 mr-3 inline-flex items-center rounded border border-blue-800 bg-white px-4 py-2.5 text-center font-medium text-blue-800 focus:outline-none focus:ring-4 md:mb-0"
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
					class="ml-8 h-4 w-4"
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
</template>

<script setup lang="ts">
import { initAccordions, initDropdowns } from "flowbite";
import AccordionItem from "./UI/AccordionItem.vue";
import SocialIcon from "./UI/SocialIcon.vue";

onMounted(() => {
	initAccordions();
	initDropdowns();
});
</script>
