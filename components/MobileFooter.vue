<template>
	<div  id="accordion-collapse" data-accordion="collapse" class="mt-11">
		<AccordionItem  :item-number="1" title="Company">
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
</template>

<script setup lang="ts">
import { initAccordions } from "flowbite";
import AccordionItem from "./UI/AccordionItem.vue";

const dropdown = ref();

onMounted(() => {

	initAccordions();
});
</script>
