<div class="snowflakes pt-12 md:pt-24 pb-4 md:pb-20 grid grid-cols-12">
	<div class="col-span-9 col-start-3 lg:col-span-6 lg:col-start-4">
		<h2 class="section-heading mb-8 lg:mb-20">How It Works</h2>

		<ol>
			<li>
				<h3 class="tertiary-heading">For 24 days, you will get an email</h3>
				<p class="mb-4">
					This year, we're working on a single project over 24 days. By the end, you'll have an
					entire design system setup.
				</p>
				<p class="mb-4">Each challenge includes:</p>
				<ul class="list-disc">
					<li>
						All the assets you need to get started, including a Figma design file If you don’t have
						<a href="https://figma.com" target="_blank">Figma</a>, don’t worry, it’s FREE)
					</li>
					<li>A brief on how to get started, with ideas to test yourself, and FAQs.</li>
				</ul>
			</li>

			<li>
				<h3 class="tertiary-heading">Complete the Challenge</h3>
				<p>
					Complete the challenge on your own, or refer to the tutorial and final coded solution.
				</p>
				<p>
					You can complete the challenges using any framework/platform you'd like, but the provided
					solutions will be built on top of <a
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noreferrer">TailwindCSS</a
					>
					and <a href="https://storybook.js.org/" target="_blank" rel="noreferrer">Storybook</a>.
				</p>
			</li>

			<li>
				<h3 class="tertiary-heading">Share your success</h3>
				<p>
					When you’re finished call your mom! Tweet about it! Stick your code on GitHub. Post a
					picture on Instagram. Talk about it on Facebook. Use the hashtag #adventofcss.
				</p>
			</li>
		</ol>
	</div>
</div>

<div class="fat-border" />

<style>
	@media (min-width: 1024px) {
		.snowflakes {
			background: url('/images/snowflakes--left.png') no-repeat 50px 50px,
				url('/images/snowflakes--right.png') no-repeat calc(100% - 50px) 50px;
		}
	}

	ol {
		counter-reset: how-it-works;
	}

	ol > li {
		@apply mb-20 relative pl-12;
	}

	ol > li:before {
		@apply absolute text-7xl font-decorative top-4 -left-10;
		counter-increment: how-it-works;
		content: counter(how-it-works);
	}

	ul {
		@apply ml-4;
	}

	ul > li {
		@apply mb-4;
	}

	h3 {
		@apply mb-4;
	}

	.fat-border {
		@apply bg-fatBorder bg-repeat-x bg-center min-h-[180px] w-full;
	}
</style>
