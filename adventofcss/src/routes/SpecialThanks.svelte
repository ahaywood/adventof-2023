<script lang="ts">
	import { Constants } from '$lib/helpers/Constants';
</script>

<div class="py-16 text-center grid grid-cols-1 lg:grid-cols-12 gap-x-5 px-10">
	<div class="lg:col-start-4 lg:col-span-6">
		<div class="flex items-center gap-x-5 justify-center mb-3">
			<div>
				<img
					src="/images/heart.png"
					srcset="/images/heart@2x.png 2x, /images/heart.png 1x"
					alt="Cross Stitched Heart"
				/>
			</div>
			<h2 class="font-script text-4xl">Special Thanks to Our Sponsor</h2>
			<div>
				<img
					src="/images/heart.png"
					srcset="/images/heart@2x.png 2x, /images/heart.png 1x"
					alt="Cross Stitched Heart"
				/>
			</div>
		</div>

		<p class="mb-6">
			<a href={Constants.TWENTY_ONE} target="_blank" rel="noreferrer">In the past</a>, I’ve offered
			the challenges for free and charged for the solutions. Thanks to the generosity of our
			sponsor, RedwoodJS, I’m able to offer all the content this year for FREE.
		</p>

		<img src="/images/redwoodjs.svg" alt="RedwoodJS" class="w-[257px] h-[48px] mx-auto" />
	</div>
</div>

<div class="trees-hearts" />
<div class="double-diamonds" />
