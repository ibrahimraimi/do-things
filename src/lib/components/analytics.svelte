<script lang="ts">
	import { browser } from "$app/environment";

	if (browser) {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function gtag() {
			window.dataLayer.push(arguments);
		};
		window.gtag("js", new Date());

		window.gtag("config", "G-RFXTYCN1JG");
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-RFXTYCN1JG"></script>

	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag("js", new Date());
		gtag("config", PUBLIC_GA_MEASUREMENT_ID || "G-RFXTYCN1JG");
	</script>
</svelte:head>
