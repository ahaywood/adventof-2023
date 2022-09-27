<script lang="ts">
	import Trees from './Trees.svelte';
</script>

<svelte:head>
	<title>Advent of JavaScript</title>
</svelte:head>

<header class="border-top min-h-[97px] bg-repeat-x text-center pt-[76px]">
	<a
		class="bg-black text-white uppercase font-slabSerif text-sm py-2 px-6 absolute left-0 top-0 hover:bg-white hover:text-black"
		href="https://store.selfteach.me/"
		target="_blank">Login</a
	>

	<div
		class="flex absolute w-full justify-between max-w-[1437px] left-1/2 -translate-x-1/2 top-[89px]"
	>
		<Trees />
		<Trees />
	</div>

	<img src="/images/bells.png" alt="Christmas Bells" class="mx-auto mb-6" />

	<div class="flex w-full justify-between px-5 ">
		<div class="flex items-center gap-x-5">
			<div>
				<img
					src="/images/heart.png"
					srcset="/images/heart@2x.png 2x, /images/heart.png 1x"
					alt="Cross Stitched Heart"
				/>
			</div>
			<a href="http://vercel.com" target="_blank" class="text-center">
				<h3 class="uppercase font-slabSerif text-sm mb-2">Sponsored by</h3>
				<img src="/images/logo__vercel.svg" alt="Vercel" />
			</a>
			<div>
				<img
					src="/images/heart.png"
					srcset="/images/heart@2x.png 2x, /images/heart.png 1x"
					alt="Cross Stitched Heart"
				/>
			</div>
		</div>

		<div class="title">
			<h2 class="font-script text-4xl mb-10">Starts December 1, 2022</h2>
			<h1 class="font-decorative mb-2">
				<div class="text-[5rem] leading-none">Advent</div>
				<div class="font-slabSerif uppercase text-3xl leading-none mb-10">of</div>
				<div class="text-[5rem] leading-none">JavaScript</div>
			</h1>
			<h2 class="font-script text-4xl">24 Challenges for the Season</h2>
		</div>

		<div class="flex items-center gap-x-5">
			<div>
				<img
					src="/images/heart.png"
					srcset="/images/heart@2x.png 2x, /images/heart.png 1x"
					alt="Cross Stitched Heart"
				/>
			</div>
			<a href="http://compressed.fm" target="_blank" class="text-center">
				<h3 class="uppercase font-slabSerif text-sm mb-2">Powered by</h3>
				<img src="/images/logo__compressed.svg" alt="Compressed.fm" />
			</a>
			<div>
				<img
					src="/images/heart.png"
					srcset="/images/heart@2x.png 2x, /images/heart.png 1x"
					alt="Cross Stitched Heart"
				/>
			</div>
		</div>
	</div>

	<div class="flex w-full justify-between max-w-[1437px] left-1/2 -translate-x-1/2 relative">
		<Trees />
		<Trees />
	</div>
</header>

<style lang="postcss">
	.title {
		background: url('/images/reindeer--left.png') left top no-repeat,
			url('/images/reindeer--right.png') right top no-repeat;
		background-size: 77px 123px;
	}

	@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
		.title {
			background: url('/images/reindeer--left@2x.png') left top no-repeat,
				url('/images/reindeer--right@2x.png') right top no-repeat;
			background-size: 77px 123px;
		}
	}

	.border-top {
		@apply bg-borderTop bg-centerTop;
		background-size: auto 97px;
	}
</style>
