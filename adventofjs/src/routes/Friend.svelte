<script lang="ts">
	export let day: number;
	export let firstName: string;
	export let lastName: string;
	export let avatar: string;
	export let avatar2x: string;
</script>

<div class="box">
	<div class="flex gap-x-4">
		<img src={avatar} srcSet={`${avatar2x} 2x, ${avatar} 1x`} alt={firstName} />
		<div>
			<div class="font-decorative text-7xl relative top-4 mb-2">{day}</div>
			<h3 class="uppercase text-base font-slabSerif">
				{#if firstName}{firstName}{/if}<br />{#if lastName}{lastName}{/if}<br />
			</h3>
		</div>
	</div>
</div>
