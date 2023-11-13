<div class="snowflakes pt-12 md:pt-24 pb-4 md:pb-20 grid grid-cols-12">
	<div class="col-span-9 col-start-3 lg:col-span-6 lg:col-start-4">
		<h2 class="section-heading mb-8 lg:mb-20">How It Works</h2>

		<ol>
			<li>
				<h3 class="tertiary-heading">For 24 days, you will get an email</h3>
				<p>
					This year, we're working on a single project over 24 days. By the end, you'll have a
					full-stack application.
				</p>
				<p class="mb-4">Each challenge includes:</p>
				<ul class="list-disc">
					<li>
						All the HTML and CSS you need to get started, allowing you to focus on the JavaScript.
					</li>
					<li>
						A brief describing the feature and it's requirements, ways to push yourself, and steps
						to help you get started.
					</li>
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
						href="https://redwoodjs.com"
						target="_blank"
						rel="noreferrer">RedwoodJS</a
					>.
				</p>
			</li>

			<li>
				<h3 class="tertiary-heading">Share your success</h3>
				<p>
					When you’re finished call your mom! Tweet about it! Stick your code on GitHub. Post a
					picture on Instagram. Talk about it on Facebook. Use the hashtag #adventofjs.
				</p>
			</li>
		</ol>
	</div>
</div>

<div class="fat-border" />

<style lang="postcss">
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
