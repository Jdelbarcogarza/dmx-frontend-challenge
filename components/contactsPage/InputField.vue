<template>
	<div class="relative h-11 w-full min-w-[200px]">
		<input
			class="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all focus:border-blue-600 focus:outline-0 disabled:border-0"
			placeholder=" "
		/>
		<label
			class="after:content[' '] text-blue-gray-500 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-600 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-600 peer-focus:after:scale-x-100 peer-focus:after:border-blue-600 peer-disabled:text-transparent"
		>
			{{ props.label }}
		</label>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{ label: string }>();
</script>
