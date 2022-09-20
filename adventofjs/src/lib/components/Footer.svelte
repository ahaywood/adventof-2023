<script lang="ts">
	import { Constants } from '../helpers/Constants';
	import { currentYear } from '../helpers/DateHelpers';
</script>

<footer class="text-center">
	<div class="mb-8">
		<ul class="list-none flex gap-6 justify-center">
			<li>•</li>
			<li><a href="/contact">Contact / Support</a></li>
			<li>•</li>
			<li><a href="/terms">Terms and Conditions</a></li>
			<li>•</li>
			<li><a href="/disclaimers">Disclaimers</a></li>
			<li>•</li>
			<li><a href="/privacy-policy">Privacy Policy</a></li>
			<li>•</li>
		</ul>
	</div>

	<div>
		Copyright &copy;{currentYear()}.
		<a href={Constants.AHHA} target="_blank" rel="noopener noreferrer">Ah Ha Creative, LLC.</a> All Rights
		Reserved.
	</div>
</footer>

<style lang="postcss">
	a {
		@apply hover:underline;
	}
</style>
