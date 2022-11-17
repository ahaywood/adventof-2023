<script lang="ts">
	import ZigZag from '$lib/components/ZigZag.svelte';
</script>

<div class="grid grid-cols-2 lg:grid-cols-12 mb-10">
	<div class="col-span-12 lg:col-span-5 lg:col-start-2 px-10 lg:px-0 lg:pr-24 pt-20">
		<h2 class="section-heading mb-8">Get Good at JS</h2>
		<p>
			The best way to learn is through real world projects and components. Build things! Practice.
			Challenge yourself. Not sure what to build? With Advent of CSS, you'll get 24 challenges via
			email, every day, December 1 - 24, 2021.
		</p>
		<div class="pt-6 hidden lg:block">
			<img src="/images/ginger-bread-man.png" alt="Ginger Bread Men" />
		</div>
	</div>

	<div class="col-span-12 lg:col-span-5 px-10 lg:px-0 lg:pl-24 pt-7">
		<div class="mb-20 lg:mt-4 lg:mb-12">
			<img src="/images/pluses.png" alt="Pluses Border" class="mx-auto" />
		</div>
		<h2 class="section-heading mb-8">Who is<br />this for?</h2>
		<p>
			These challenges are perfect for beginner to intermediate developers (or designers) who want
			to become more comfortable with their CSS styling skills.
		</p>
		<p>Before accepting this challenge, you really should know basic HTML and CSS.</p>
		<p>
			You learn best through implementation. Once you’ve applied your knowledge to a specific
			project, learning concepts are solidified.
		</p>
	</div>
</div>

<ZigZag />
<div class="zigZagBorder" />
<div class="snowflake-border" />
<div class="zigZagBorder" />
<ZigZag />
