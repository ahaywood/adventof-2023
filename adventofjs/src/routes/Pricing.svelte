<script>
	import Button from '$lib/components/Button.svelte';
</script>

<div class="zigZagBorder" />

<div class="grid grid-cols-12 gap-x-5">
	<div class="tier">
		<div class="amount">
			<div class="dollar">$</div>
			<div class="number">0</div>
		</div>
		<h3>24 Challenges</h3>
		<p>
			Each challenge includes all the assets you need to get started, including a Figma file, a
			style guide, a brief, ways to push yourself, and steps to help you get started.
		</p>
		<Button label="Sign me up!" />
	</div>

	<div class="tier">
		<div class="amount">
			<div class="dollar">$</div>
			<div class="number">24</div>
		</div>
		<h3>24 Challenges & Solutions</h3>
		<p>
			Each challenge includes all the assets you need to get started, including a Figma file, a
			style guide, a brief, ways to push yourself, and steps to help you get started.
		</p>
		<p>You’ll also receive the final coded solution and tutorial explaining how to get there.</p>
		<Button label="Yes, please!" />
	</div>

	<div class="tier">
		<div class="amount">
			<div class="dollar">$</div>
			<div class="number">39</div>
		</div>
		<h3>Bundled with CSS Challenges</h3>
		<p>
			All 24 JavaScript challenges and their solutions. PLUS 24 CSS challenges and their solutions
			from <a href="https://adventofcss.com">Advent of CSS</a>.
		</p>
		<Button label="Awesome!" />
	</div>
</div>

<div class="zigZagBorder" />
<div class="snowflakes" />
<div class="zigZagBorder" />

<style lang="postcss">
	.tier {
		@apply bg-verticalDivider bg-rightTop bg-repeat-y col-span-4 px-12 flex flex-col justify-end h-full pb-8 pt-12;
	}

	.amount {
		@apply text-center flex justify-center mb-6;
	}

	.dollar {
		@apply font-script text-5xl relative -top-5;
	}

	.number {
		@apply font-slabSerif text-5xl;
	}

	h3 {
		@apply uppercase font-slabSerif text-base text-center mb-5;
	}
</style>
