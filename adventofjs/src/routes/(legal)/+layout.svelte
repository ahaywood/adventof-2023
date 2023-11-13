<script>
	import Footer from '$lib/components/Footer.svelte';
	import ShortHeader from '$lib/components/ShortHeader.svelte';
</script>

<ShortHeader />

<div class="snowflakes mt-12 mb-16">
	<div class="grid grid-cols-12 mb-20">
		<div class="col-span-12 lg:col-span-4 lg:col-start-5 px-5 lg:px-0 legal-content">
			<slot><!-- optional fallback --></slot>
		</div>
	</div>
</div>

<div class="zigZagBorder" />
<div class="snowflake-border" />
<div class="zigZagBorder" />

<Footer />

<style lang="postcss">
	@media (min-width: 1024px) {
		.snowflakes {
			@apply pt-10;
			background: url('/images/snowflakes--left.png') 100px center no-repeat space,
				url('/images/snowflakes--right.png') calc(100% - 100px) center no-repeat space;
			background-size: 175px auto;
		}
	}
</style>
