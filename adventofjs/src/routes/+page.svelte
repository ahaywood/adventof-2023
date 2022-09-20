<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	const { faqs } = data;
</script>

<h1 class="font-slabSerif">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each faqs as faq}
	<h2>{faq.question}</h2>
	<p>{@html faq.answer}</p>
{/each}

<Footer />
