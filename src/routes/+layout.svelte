<script>
	import "../app.pcss";
	import Metadata from "$lib/components/metadata.svelte";
	import Analytics from "$lib/components/analytics.svelte";
	import SiteHeader from "$lib/components/site-header.svelte";
</script>

<Metadata />
<Analytics />

<main
	class="mx-4 mt-4 flex max-w-5xl flex-1 flex-col antialiased md:flex-row lg:mx-auto lg:flex-col"
>
	<SiteHeader />
	<slot />
</main>
