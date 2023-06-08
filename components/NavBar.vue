<template>
	<header>
		<nav class="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
			<div
				class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between"
			>
				<!-- mobile button -->
				<button
				class="visible md:hidden"
					type="button"
					data-drawer-target="drawer-navigation"
					data-drawer-show="drawer-navigation"
					aria-controls="drawer-navigation"
					data-drawer-backdrop="true"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						class="fill-black"
					>
						<path d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" />
					</svg>
				</button>

				<!-- drawer -->
				<div
					id="drawer-navigation"
					class="fixed left-0 top-0 z-40 h-screen w-80 -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
					tabindex="-1"
					aria-labelledby="drawer-navigation-label"
				>
					<h5
						id="drawer-navigation-label"
						class="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
					>
						Menu
					</h5>
					<button
						type="button"
						data-drawer-hide="drawer-navigation"
						aria-controls="drawer-navigation"
						class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
					>
						<svg
							aria-hidden="true"
							class="h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="sr-only">Close menu</span>
					</button>
					<div class="overflow-y-auto py-4">
						<ul class="space-y-2 font-medium">
							<li>
								<a
									href="/"
									class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									<span class="ml-3">About</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									<span class="ml-3 flex-1 whitespace-nowrap">Services</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									<span class="ml-3 flex-1 whitespace-nowrap">Our Expertise</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									
									<span class="ml-3 flex-1 whitespace-nowrap">Case Studies</span>
								</a>
							</li>
							<li>
								<a
									href="/contact"
									class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>

									<span class="ml-3 flex-1 whitespace-nowrap">Contact</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<a href="https://flowbite.com" class="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						class="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span
						class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					>
						Agency</span
					>
				</a>
				<div class="flex items-center lg:order-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						class="fill-gray-500"
					>
						<path
							d="m9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2h-5.5Zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Z"
						/>
					</svg>
				</div>
				<div
					class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
					id="mobile-menu-2"
				>
					<ul
						class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8"
					>
						<li>
							<NuxtLink
								to="/"
								class="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-gray-700 dark:text-white lg:bg-transparent lg:p-0"
								aria-current="page"
								>About</NuxtLink
							>
						</li>
						<li>
							<NuxtLink
								to="/"
								class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
								>Services</NuxtLink
							>
						</li>
						<li>
							<NuxtLink
								to="/contact"
								class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
								>Contact</NuxtLink
							>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>


<script setup lang="ts">
import { initDrawers } from 'flowbite';
import { modalBackdrop } from 'flowbite';

const backdropHidden = ref<boolean>(true);


onMounted(() => {
	initDrawers()
})

</script>