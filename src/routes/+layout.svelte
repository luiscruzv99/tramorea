<script>
	import '../app.postcss';
	import Header from  '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Header />
<main class="flex-grow pb-32">
	<slot />
</main>
<Footer />
