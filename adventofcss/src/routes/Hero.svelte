<script lang="ts">
	import { Constants } from '$lib/helpers/Constants';
	import SponsoredBy from './SponsoredBy.svelte';
	import Trees from './Trees.svelte';
</script>

<svelte:head>
	<title>Advent of CSS</title>
</svelte:head>

<header class="border-top min-h-[97px] bg-repeat-x text-center pt-[76px]">
	<a
		class="bg-black text-white uppercase font-slabSerif text-sm py-2 px-6 absolute left-0 top-0 hover:bg-white hover:text-black"
		href={Constants.PODIA}
		target="_blank">Login</a
	>

	<div class="absolute right-0 top-0 flex items-center gap-x-4">
		<a
			class="bg-black text-white uppercase font-slabSerif text-sm py-2 px-6 hover:bg-white hover:text-black"
			href={Constants.TWENTY_ONE}
			target="_blank"
			rel="noreferrer">2021 + 2022</a
		>

		<a
			class="bg-black text-white uppercase font-slabSerif text-sm py-2 px-6 hover:bg-white hover:text-black"
			href={Constants.TWENTY_THREE}
			rel="noreferrer">2023</a
		>
	</div>

	<div
		class="hidden sm:flex absolute w-full justify-between max-w-[1437px] left-1/2 -translate-x-1/2 top-[89px]"
	>
		<Trees />
		<Trees />
	</div>

	<img src="/images/bells.png" alt="Christmas Bells" class="mx-auto mb-6" />

	<div class="hero-title">
		<!-- TITLE -->
		<div class="title mb-8">
			<h2 class="font-script text-2xl lg:text-4xl mb-10">
				Starts <span class="whitespace-nowrap">December 1, 2023</span>
			</h2>
			<h1 class="font-decorative mb-4 lg:mb-2">
				<div class="text-4xl lg:text-[5rem] leading-none">Advent</div>
				<div class="font-slabSerif uppercase text-xl lg:text-3xl leading-none mb-4 lg:mb-10">
					of
				</div>
				<div class="text-4xl lg:text-[5rem] leading-none">CSS</div>
			</h1>
			<h2 class="font-script text-2xl lg:text-4xl">24 Challenges for the Season</h2>
		</div>
		<div class="sponsored font-slabSerif text-xs">
			<SponsoredBy />
		</div>
	</div>

	<div
		class="hidden sm:flex w-full justify-between max-w-[1437px] left-1/2 -translate-x-1/2 relative"
	>
		<Trees />
		<Trees />
	</div>
</header>

<style>
	/* wraps the entire hero title section */
	.hero-title {
		grid-template-columns: 2;
		grid-template-areas:
			'title title'
			'sponsored sponsored';
		max-width: 870px;
		@apply grid w-full lg:px-12 gap-y-10 xl:gap-y-0 mb-20 md:mb-12 lg:mb-20 xl:mb-0 mx-auto;
	}

	@media (min-width: 640px) {
		.hero-title {
			grid-template-areas:
				'title title'
				'sponsored sponsored';
		}
	}

	@media (min-width: 1200px) {
		.hero-title {
			grid-template-columns: 3;
			grid-template-areas:
				'title'
				'sponsored';
		}
	}

	.sponsored {
		grid-area: sponsored;
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

	.border-top {
		@apply bg-borderTop bg-centerTop;
		background-size: auto 97px;
	}
</style>
