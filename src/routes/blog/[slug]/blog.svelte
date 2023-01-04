<script context="module">
	import a from "$lib/Components/blog/a.svelte"
	export { a }
</script>

<script>
	export let title;
	export let date;
	import '$lib/oneDark.css'
	import '$lib/blog.css'
</script>

<svelte:head>
	<title>{title}</title>
	<html lang="en" />
</svelte:head>

<article>
	<h1>{title}</h1>
	<p class="text-sm text-center">Written: {date}</p>
	<hr />
	<slot />
</article>
