<script lang="ts">
	export let label: string;
	export let src: string;
</script>

<a href={src}>
	<span>
		{label}
	</span>
</a>

<style lang="postcss">
	a {
		@apply bg-button cursor-pointer block bg-center uppercase font-slabSerif text-base h-[90px] w-[275px] bg-no-repeat mx-auto p-4;
	}

	a > span {
		@apply w-full h-full flex items-center justify-center hover:bg-white hover:text-primary;
	}
</style>
