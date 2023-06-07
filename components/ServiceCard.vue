<template>
	<div
		class="flex h-[350px] sm:w-[240px] flex-col items-center rounded-xl p-4 shadow-lg bg-white min-w-[240px] overflow-visible my-8"
	>
		<img
			class="relative bottom-8 -mb-3 h-32 w-56 rounded-xl shadow-lg drop-shadow-xl "
			:src="props.image"
			alt="camera"
		/>

		<!-- text section -->
		<div class="flex flex-grow flex-col justify-between">
			<h4 class="text-xl font-medium text-neutral-800">{{ props.title }}</h4>

			<div class="w-full break-all text-sm text-neutral-800">
				<slot></slot>
			</div>

			<button
				class="w-full rounded border border-blue-800 py-2 font-bold uppercase text-blue-800"
			>
				see detail
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	title: string;
  image: string;
}>();
</script>
