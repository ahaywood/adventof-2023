<script lang="ts">
	import { Constants } from '../helpers/Constants';
	import { currentYear } from '../helpers/DateHelpers';
	import SocialMedia from './SocialMedia.svelte';
	import Twitter from '$lib/components/Icons/Twitter.svelte';
	import YouTube from '$lib/components/Icons/YouTube.svelte';
</script>

<footer class="text-center pb-8">
	<SocialMedia
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
			}
		]}
	/>

	<div class="zigZag" />

	<div class="mb-8">
		<ul class="list-none flex gap-6 justify-center">
			<li>•</li>
			<li><a href="/contact">Contact / Support</a></li>
			<li>•</li>
			<li><a href="/terms">Terms and Conditions</a></li>
			<li>•</li>
			<li><a href="/disclaimers">Disclaimers</a></li>
			<li>•</li>
			<li><a href="/privacy-policy">Privacy Policy</a></li>
			<li>•</li>
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
</style>
