<script lang="ts">
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import Twitter from '$lib/components/Icons/Twitter.svelte';
	import Twitch from '$lib/components/Icons/Twitch.svelte';
	import { Constants } from '$lib/helpers/Constants';
	import CodePen from '$lib/components/Icons/CodePen.svelte';
	import GitHub from '$lib/components/Icons/GitHub.svelte';
	import YouTube from '$lib/components/Icons/YouTube.svelte';
</script>

<div class="pt-12">
	<!-- TODO: Come back and check this after I work on the hero -->
	<div
		class="flex items-center justify-center gap-x-8 lg:gap-x-20 mb-6 px-5 md:px-0 w-screen overflow-x-hidden lg:overflow-x-visible"
	>
		<div class="presents">
			<img src="/images/present.png" alt="Presents" class="hidden md:block" />
			<img src="/images/present.png" alt="Presents" class="hidden sm:block" />
			<img src="/images/present.png" alt="Presents" />
		</div>
		<h2 class="section-heading relative top-3">Who are you?</h2>
		<div class="presents">
			<img src="/images/present.png" alt="Presents" class="hidden md:block" />
			<img src="/images/present.png" alt="Presents" class="hidden sm:block" />
			<img src="/images/present.png" alt="Presents" />
		</div>
	</div>
	<p class="text-center px-4 sm:px-0">
		For the <em>second</em> year in a row, we’ve put together a set of 24 challenges for the holiday
		season.
	</p>
</div>

<div class="grid grid-cols-12">
	<div
		class="px-4 sm:px-10 md:px-24 flex flex-col lg:flex-row gap-x-20 items-center pb-24 mb-16 lg:mb-0 col-span-8 col-start-3"
	>
		<!-- Amy Dutton -->
		<div class="flex-1">
			<div class="mb-6 flex flex-col md:flex-row">
				<div class="relative md:-left-6 w-[150px]">
					<img
						src="/images/avatar__amy.png"
						srcset="/images/avatar__amy@2x.png 2x, /images/avatar__amy.png 1x"
						alt="Amy Dutton"
						height="150"
						width="150"
					/>
				</div>
				<div class="box my-4">
					<div class="name">Amy Dutton</div>
					<div class="title">RedwoodJS Core Leadership Team</div>
				</div>
			</div>
			<div class="md:pr-5">
				<p>
					My name is Amy Dutton. I'm a lead maintainer on the <a
						href="https://redwoodjs.com"
						target="_blank">RedwoodJS</a
					> core team. I have 22+ years of experience in web development and design. I love teaching
					and seeing something finally click. I live in Nashville, TN with my husband, 3 kids, and 2
					dogs.
				</p>
				<SocialMedia
					socialMedia={[
						{
							name: 'Twitter',
							icon: Twitter,
							url: Constants.AMY_TWITTER_URL
						},
						{
							name: 'Twitch',
							icon: Twitch,
							url: Constants.AMY_TWITCH_URL
						},
						{
							name: 'CodePen',
							icon: CodePen,
							url: Constants.AMY_CODEPEN_URL
						},
						{
							name: 'GitHub',
							icon: GitHub,
							url: Constants.AMY_GITHUB_URL
						},
						{
							name: 'YouTube',
							icon: YouTube,
							url: Constants.AMY_YOUTUBE_URL
						}
					]}
				/>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.presents {
		@apply flex items-center gap-x-4 xl:gap-x-12;
	}

	.box .name {
		@apply font-script text-3xl mb-2;
	}

	.box .title {
		@apply font-slabSerif uppercase text-base;
	}
</style>
