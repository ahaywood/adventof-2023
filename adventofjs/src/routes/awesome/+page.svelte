<div class="flex flex-col justify-between min-h-screen">
	<div class="fat-border" />

	<a
		class="bg-black text-white uppercase font-slabSerif text-sm py-2 px-6 absolute right-0 top-0 hover:bg-white hover:text-black"
		href="/">[X] Close</a
	>

	<div class="layout-grid">
		<div class="col-span-8 col-start-3 mt-24">
			<h1 class="font-decorative uppercase text-5xl mb-5 text-center">Awesome!</h1>

			<p class="text-center mb-12">
				You're all set! Thanks again for being here!<br /> I hope you enjoy the challenges as much as
				I've enjoyed putting them together.
			</p>
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
