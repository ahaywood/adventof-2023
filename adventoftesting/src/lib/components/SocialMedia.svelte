<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	interface SocialMedia {
		name: string;
		url: string;
		icon: new (...args: any[]) => SvelteComponent;
	}

	export let socialMedia: SocialMedia[] = [];
	export let className: string = '';
</script>

{#if socialMedia}
	<ul class={`flex gap-x-8 w-full text-white justify-center ${className}`}>
		{#each socialMedia as { name, url, icon }}
			<li>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<svelte:component this={icon} />
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<span />
{/if}
