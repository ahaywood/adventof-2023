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

	export let data;
	const { faqs, friends } = data;
</script>

<Hero />
<Pricing />
<HowItWorks />
<GetGoodWho />
<WhoAreYou />
<Friends {friends} />
<Faqs {faqs} />
<JoinTheChallenge />
<Pricing />
<Footer />
