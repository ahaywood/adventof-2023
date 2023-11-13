<script lang="ts">
	export let label: string;
	export let src: string = '';
	export let type: 'button' | 'link' = 'link';
</script>

{#if type === 'link'}
	<a href={src}>
		<span>
			{label}
		</span>
	</a>
{:else}
	<button type="submit">
		<span>{label}</span>
	</button>
{/if}

<style lang="postcss">
	button,
	a {
		@apply bg-button cursor-pointer block bg-center uppercase font-slabSerif text-base h-[90px] w-[275px] bg-no-repeat mx-auto p-4;
	}

	button > span,
	a > span {
		@apply w-full h-full flex items-center justify-center hover:bg-white hover:text-primary;
	}
</style>
