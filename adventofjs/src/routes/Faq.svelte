<script lang="ts">
	import { slide } from 'svelte/transition';
	export let faq: Faq;
	let isExpanded = false;
</script>

<div class="pb-8">
	<button
		class="flex gap-x-4 font-slabSerif text-base leading-8"
		on:click={() => (isExpanded = !isExpanded)}
	>
		<div class="w-3">
			{#if isExpanded}-{:else}+{/if}
		</div>
		<div class="text-left">{faq.question}</div>
	</button>

	{#if isExpanded}
		<div class="faq pl-8" transition:slide>
			<div>{@html faq.answer}</div>
		</div>
	{/if}
</div>
