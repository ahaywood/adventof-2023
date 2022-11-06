<script lang="ts">
	import { Constants } from '$lib/helpers/Constants';
	import Trees from './Trees.svelte';
</script>

<svelte:head>
	<title>Advent of JavaScript</title>
</svelte:head>

<header class="border-top min-h-[97px] bg-repeat-x text-center pt-[76px]">
	<a
		class="bg-black text-white uppercase font-slabSerif text-sm py-2 px-6 absolute left-0 top-0 hover:bg-white hover:text-black"
		href={Constants.PODIA}
		target="_blank">Login</a
	>

	<div
		class="hidden sm:flex absolute w-full justify-between max-w-[1437px] left-1/2 -translate-x-1/2 top-[89px]"
	>
		<Trees />
		<Trees />
	</div>

	<img src="/images/bells.png" alt="Christmas Bells" class="mx-auto mb-6" />

	<div class="hero-title">
		<!-- SPONSORED BY: VERCEL -->
		<div class="sponsored flex items-center gap-x-5 justify-center">
			<div>
				<img
					src="/images/heart.png"
					srcset="/images/heart@2x.png 2x, /images/heart.png 1x"
					alt="Cross Stitched Heart"
				/>
			</div>
			<a href="http://vercel.com" target="_blank" class="text-center">
				<h3 class="uppercase font-slabSerif text-xs sm:text-sm mb-2">Sponsored by</h3>
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

		<!-- TITLE -->
		<div class="title">
			<h2 class="font-script text-2xl lg:text-4xl mb-10">
				Starts <span class="whitespace-nowrap">December 1, 2022</span>
			</h2>
			<h1 class="font-decorative mb-4 lg:mb-2">
				<div class="text-4xl lg:text-[5rem] leading-none">Advent</div>
				<div class="font-slabSerif uppercase text-xl lg:text-3xl leading-none mb-4 lg:mb-10">
					of
				</div>
				<div class="text-4xl lg:text-[5rem] leading-none">JavaScript</div>
			</h1>
			<h2 class="font-script text-2xl lg:text-4xl">24 Challenges for the Season</h2>
		</div>

		<!-- POWERED BY COMPRESSED.FM -->
		<div class="poweredBy flex items-center gap-x-5 justify-center">
			<div>
				<img
					src="/images/heart.png"
					srcset="/images/heart@2x.png 2x, /images/heart.png 1x"
					alt="Cross Stitched Heart"
				/>
			</div>
			<a href="http://compressed.fm" target="_blank" class="text-center">
				<h3 class="uppercase font-slabSerif text-xs sm:text-sm mb-2">Powered by</h3>
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

	<div
		class="hidden sm:flex w-full justify-between max-w-[1437px] left-1/2 -translate-x-1/2 relative"
	>
		<Trees />
		<Trees />
	</div>
</header>

<style lang="postcss">
	/* wraps the entire hero title section */
	.hero-title {
		@apply grid w-full lg:px-12 gap-y-10 xl:gap-y-0 mb-20 md:mb-12 lg:mb-20 xl:mb-0;
		grid-template-columns: 2;
		grid-template-areas:
			'title title'
			'sponsored sponsored'
			'poweredBy poweredBy';
	}

	@media (min-width: 640px) {
		.hero-title {
			grid-template-areas:
				'title title'
				'sponsored poweredBy';
		}
	}

	@media (min-width: 1200px) {
		.hero-title {
			grid-template-columns: 3;
			grid-template-areas: 'sponsored title poweredBy';
		}
	}

	.sponsored {
		grid-area: sponsored;
	}

	.poweredBy {
		grid-area: poweredBy;
	}

	.title {
		grid-area: title;
	}

	@media (min-width: 768px) {
		.title {
			background: url('/images/reindeer--left.png') left top no-repeat,
				url('/images/reindeer--right.png') right top no-repeat;
			background-size: 77px 123px;
		}
	}

	/* @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-width: 768px) {
		.title {
			background: url('/images/reindeer--left@2x.png') left top no-repeat,
				url('/images/reindeer--right@2x.png') right top no-repeat;
			background-size: 77px 123px;
		}
	} */

	.border-top {
		@apply bg-borderTop bg-centerTop;
		background-size: auto 97px;
	}
</style>
