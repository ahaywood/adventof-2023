<script>
	import Button from '$lib/components/Button.svelte';
	import { Constants } from '$lib/helpers/Constants';
</script>

<div class="zigZagBorder" />

<div class="grid grid-cols-1 lg:grid-cols-12 gap-x-5 lg:gap-x-2 xl:gap-x-5">
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
		<Button label="Sign me up!" src={Constants.FREE} />
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
		<Button label="Yes, please!" src={Constants.SOLUTIONS} />
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
		<Button label="Awesome!" src={Constants.BUNDLE} />
	</div>
</div>

<div class="zigZagBorder" />
<div class="snowflake-border" />
<div class="zigZagBorder" />

<style lang="postcss">
	.tier {
		@apply bg-horizontalDivider bg-leftBtm bg-repeat-x lg:bg-verticalDivider lg:bg-rightTop lg:bg-repeat-y col-span-4 px-10 lg:px-8 xl:px-12 flex flex-col justify-end h-full pb-16 mb-16 lg:pb-8 lg:mb-0 pt-12;
	}

	.tier:last-child {
		background-image: none;
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
