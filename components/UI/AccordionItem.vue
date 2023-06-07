<template>
  <h2 :id="`accordion-collapse-heading-${itemNumber}`">
    <button
      type="button"
      class="flex w-full items-center justify-between border border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
      :data-accordion-target="`#accordion-collapse-body-${itemNumber}`"
      aria-expanded="false"
      :aria-controls="`accordion-collapse-body-${itemNumber}`"
    >
      <span>{{ title }}</span>
      <svg
        data-accordion-icon
        class="h-6 w-6 rotate-180 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </h2>
  <div
    :id="`accordion-collapse-body-${itemNumber}`"
    class="hidden"
    :aria-labelledby="`accordion-collapse-heading-${itemNumber}`"
  >
    <div class="border border-t-0 border-gray-200 p-5 dark:border-gray-700">
      <div class="mb-2 text-gray-500 dark:text-gray-400">
        <!-- aqui va el contenido del item del acordeón, se define en el elemento padre -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { initAccordions } from "flowbite";


defineProps<{
  itemNumber: number;
  title: string;
}>();

onMounted(() => {

initAccordions();
});
</script>