<script>
	import '../app.postcss';
	import Header from  '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
</script>

<Header />
<main class="flex-grow pb-32">
	<slot />
</main>
<Footer />
