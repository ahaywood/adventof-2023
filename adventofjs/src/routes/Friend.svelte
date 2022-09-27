<script lang="ts">
	export let order: number;
	export let firstName: string;
	export let lastName: string;
	export let image: string;
</script>

<div class="box">
	<div class="flex gap-x-4">
		<img src={image} alt={firstName} />
		<div>
			<div class="font-decorative text-7xl">{order}</div>
			<h3 class="uppercase text-base font-slabSerif">{firstName}<br />{lastName}</h3>
		</div>
	</div>
</div>
