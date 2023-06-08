<template>
	<header>
		<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
			<div
				class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
			>
				<a href="https://flowbite.com" class="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						class="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span
						class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
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
						class="fill-white"
					>
						<path
							d="m9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2h-5.5Zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Z"
						/>
					</svg>
				</div>
				<div
					class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
					id="mobile-menu-2"
				>
					<ul
						class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
					>
						<li>
							<NuxtLink
								to="/"
								class="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
								aria-current="page"
								>About</NuxtLink
							>
						</li>
						<li>
							<NuxtLink
								to="/"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
								>Services</NuxtLink
							>
						</li>
						<li>
							<NuxtLink
								to="/contact"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
								>Contact</NuxtLink
							>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>
