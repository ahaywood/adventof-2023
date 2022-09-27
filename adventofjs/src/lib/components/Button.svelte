<script lang="ts">
	export let label: string;
</script>

<button>
	{label}
</button>

<style lang="postcss">
	button {
		@apply bg-button bg-center uppercase font-slabSerif text-base min-h-[90px] min-w-[275px] bg-no-repeat;
	}
</style>
