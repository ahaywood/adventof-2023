<script lang="ts">
	import Faq from './Faq.svelte';
	export let faqs: Faq[];
</script>

<div class="snowflakes">
	<h2 class="section-heading mb-8">Frequently Asked Questions</h2>
	<div class="grid grid-cols-12 mb-20">
		<div class="col-span-12 lg:col-span-8 lg:col-start-3 px-5 lg:px-0">
			{#each faqs as faq}
				<Faq {faq} />
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	@media (min-width: 1024px) {
		.snowflakes {
			@apply pt-10;
			background: url('/images/snowflakes--left.png') 32px center no-repeat,
				url('/images/snowflakes--right.png') calc(100% - 32px) center no-repeat;
			background-size: 175px auto;
		}
	}
</style>
