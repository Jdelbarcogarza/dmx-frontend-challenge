<!-- left-1/2  -->
<template>
	
		<div
		v-show="showBanner"
			class="fixed bottom-0 left-1/3 z-50 mx-auto flex max-w-6xl -translate-x-1/3 items-center rounded bg-stone-700 px-4 py-3"
		>
			<p class="text-white">
				Dies ist ein Beispiel für eine Nachricht, die häufig für wichtige
				Informationen für Besucher oder Benutzer verwendet wird. Bitte klicken
				Sie auf die Schaltfläche neben, um diese Nachricht zu schließen.
			</p>

			<button @click="changeBanner()" class="ml-2 h-fit rounded bg-white px-10 py-1.5 uppercase">
				Accept
			</button>
		</div>

</template>


<script setup lang="ts">

const showBanner = ref<boolean>(true);


const changeBanner = () => {
	showBanner.value = false
}

</script>