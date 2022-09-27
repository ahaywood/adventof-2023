<script lang="ts">
	import Faq from './Faq.svelte';
	export let faqs: Faq[];
</script>

<h2 class="section-heading mb-8">Fequently Asked Questions</h2>
<div class="grid grid-cols-12 mb-20">
	<div class="col-span-8 col-start-3">
		{#each faqs as faq}
			<Faq {faq} />
		{/each}
	</div>
</div>
