<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main class="flex-grow">
	<slot />
</main>
<Footer />
