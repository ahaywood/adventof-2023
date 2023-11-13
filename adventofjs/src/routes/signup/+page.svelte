<script>
	import kwesforms from 'kwesforms';
	import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		kwesforms.init();
	});
</script>

<div class="flex flex-col justify-between min-h-screen">
	<div class="fat-border" />

	<a
		class="bg-black text-white uppercase font-slabSerif text-sm py-2 px-6 absolute right-0 top-0 hover:bg-white hover:text-black"
		href="/">[X] Close</a
	>

	<div class="layout-grid">
		<div class="col-span-8 col-start-3 mt-24">
			<h1 class="font-decorative uppercase text-5xl mb-5 text-center">Send me Free Challenges</h1>

			<form
				action="https://kwesforms.com/api/foreign/forms/05tUYKug2PP1CaDv4RsK"
				class="kwes-form form grid grid-cols-2 gap-x-10 gap-y-10 signup"
				data-kw-success-message="Thanks for signing up! You should receive an email with details from us soon!"
			>
				<div>
					<label for="name">Name</label>
					<input type="text" name="name" data-kw-rules="required" />
				</div>

				<div>
					<label for="email">Email</label>
					<input type="text" name="email" data-kw-rules="required|email" />
				</div>

				<div
					class="col-span-2 flex items-center justify-center gap-x-8 lg:gap-x-20 mb-6 px-5 md:px-0 overflow-x-hidden lg:overflow-x-visible"
				>
					<div class="presents">
						<img src="/images/present.png" alt="Presents" class="hidden md:block" />
						<img src="/images/present.png" alt="Presents" class="hidden sm:block" />
						<img src="/images/present.png" alt="Presents" />
					</div>
					<div><Button label="Count me in!" type="button" /></div>
					<div class="presents">
						<img src="/images/present.png" alt="Presents" class="hidden md:block" />
						<img src="/images/present.png" alt="Presents" class="hidden sm:block" />
						<img src="/images/present.png" alt="Presents" />
					</div>
				</div>
			</form>
		</div>
	</div>

	<div>
		<div class="zigZagBorder" />
		<div class="snowflake-border" />
		<div class="zigZagBorder" />
	</div>
</div>

<style lang="postcss">
	.fat-border {
		@apply bg-fatBorder bg-repeat-x bg-center min-h-[180px] w-full;
	}

	.presents {
		@apply flex items-center gap-x-4 xl:gap-x-12;
	}
</style>
