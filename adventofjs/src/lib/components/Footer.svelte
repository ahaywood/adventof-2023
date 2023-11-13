<script lang="ts">
	import { Constants } from '../helpers/Constants';
	import { currentYear } from '../helpers/DateHelpers';
	import SocialMedia from './SocialMedia.svelte';
	import Twitter from '$lib/components/Icons/Twitter.svelte';
	import YouTube from '$lib/components/Icons/YouTube.svelte';
	import GitHub from '$lib/components/Icons/GitHub.svelte';
	import ZigZag from './ZigZag.svelte';
</script>

<footer class="text-center pb-8">
	<div class="trees-hearts" />

	<div class="mt-10 text-center">
		<SocialMedia
			className="justify-center"
			socialMedia={[
				{
					name: 'Twitter',
					url: Constants.AMY_TWITTER_URL,
					icon: Twitter
				},
				{
					name: 'YouTube',
					url: Constants.AMY_YOUTUBE_URL,
					icon: YouTube
				},
				{
					name: 'GitHub',
					url: Constants.PROJECT_GITHUB,
					icon: GitHub
				}
			]}
		/>
	</div>

	<div class="my-10"><ZigZag /></div>

	<div class="mb-8">
		<ul class="list-none flex gap-3 lg:gap-6 justify-center flex-col md:flex-row">
			<li class="dot">•</li>
			<li><a href="/contact">Contact / Support</a></li>
			<li class="dot">•</li>
			<li><a href="/terms">Terms and Conditions</a></li>
			<li class="dot">•</li>
			<li><a href="/disclaimers">Disclaimers</a></li>
			<li class="dot">•</li>
			<li><a href="/privacy-policy">Privacy Policy</a></li>
			<li class="dot">•</li>
		</ul>
	</div>

	<div>
		Copyright &copy;{currentYear()}.
		<a href={Constants.AHHA} target="_blank" rel="noopener noreferrer">Ah Ha Creative, LLC.</a> All Rights
		Reserved.
	</div>
</footer>

<style lang="postcss">
	a {
		@apply hover:underline;
	}

	.dot {
		@apply hidden md:block;
	}
</style>
