<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import GetGoodWho from './GetGoodWho.svelte';
	import Hero from './Hero.svelte';
	import HowItWorks from './HowItWorks.svelte';
	import Pricing from './Pricing.svelte';
	import SpecialThanks from './SpecialThanks.svelte';
	import WhoAreYou from './WhoAreYou.svelte';
	import Faqs from './Faqs.svelte';
	import JoinTheChallenge from './JoinTheChallenge.svelte';

	export let data;
	const { faqs } = data;
</script>

<Hero />
<Pricing />
<SpecialThanks />
<HowItWorks />
<GetGoodWho />
<WhoAreYou />

<!-- border -->
<div class="bg-xes h-[10px] bg-repeat-x mt-0" />
<div class="bg-diamond h-[23px] bg-repeat-x my-1" />
<div class="bg-xes h-[10px] bg-repeat-x" />

<div class="flex items-center my-9">
	<div class="flex-1 bg-reindeerLeft bg-right bg-repeat-x h-[140px]" />
	<div class="mx-8"><img src="/images/reindeer-heart.png" alt="heart" /></div>
	<div class="flex-1 bg-reindeerRight bg-left bg-repeat-x h-[140px]" />
</div>

<div class="bg-xes h-[10px] bg-repeat-x" />
<div class="bg-diamond h-[23px] bg-repeat-x my-1" />
<div class="bg-xes h-[10px] bg-repeat-x mb-16" />

<Faqs {faqs} />
<JoinTheChallenge />
<Pricing />
<Footer />
