<script>
	import kwesforms from 'kwesforms';
	import Button from '$lib/components/Button.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ShortHeader from '$lib/components/ShortHeader.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		kwesforms.init();
	});
</script>

<ShortHeader />

<div class="snowflakes mt-12 mb-16">
	<div class="grid grid-cols-12 mb-20">
		<div class="col-span-12 lg:col-span-4 lg:col-start-5 px-5 lg:px-0">
			<h2 class="text-5xl text-center font-decorative mb-8">Contact Us</h2>

			<form
				action="https://kwesforms.com/api/foreign/forms/8D7BjW206H3WFPDGo7Ii"
				class="kwes-form form"
				data-kw-success-message="Thanks for taking the time to contact us! We'll be in touch soon!"
			>
				<div class="field">
					<label for="name">Name</label>
					<input type="text" name="name" data-kw-rules="required" />
				</div>

				<div class="field">
					<label for="email">Email</label>
					<input type="email" name="email" data-kw-rules="required|email" />
				</div>

				<div class="field">
					<label for="message">Message</label>
					<textarea name="message" data-kw-rules="required" />
				</div>

				<div class="field">
					<Button label="Submit" type="button" />
				</div>
			</form>
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
			background: url('/images/snowflakes--left.png') 100px center no-repeat,
				url('/images/snowflakes--right.png') calc(100% - 100px) center no-repeat;
			background-size: 175px auto;
		}
	}

	.treesHeartsBorder {
		background: url('/images/border__trees-hearts@2x.png') center top repeat-x;
		background-size: 263px auto;
		@apply h-[93px];
	}
</style>
