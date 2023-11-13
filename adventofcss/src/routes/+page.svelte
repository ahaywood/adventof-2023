<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Friends from './Friends.svelte';
	import GetGoodWho from './GetGoodWho.svelte';
	import Hero from './Hero.svelte';
	import HowItWorks from './HowItWorks.svelte';
	import Pricing from './Pricing.svelte';
	import WhoAreYou from './WhoAreYou.svelte';
	import Faqs from './Faqs.svelte';
	import JoinTheChallenge from './JoinTheChallenge.svelte';
	import SpecialThanks from './SpecialThanks.svelte';

	export let data;
	const { faqs } = data;
</script>

<Hero />
<Pricing />
<SpecialThanks />
<HowItWorks />
<GetGoodWho />
<WhoAreYou />
<Faqs {faqs} />
<JoinTheChallenge />
<Pricing />
<Footer />
