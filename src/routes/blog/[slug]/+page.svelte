<script>
	// @ts-nocheck
	import TagContainer from '$lib/components/TagContainer.svelte';
	export let data;
	const { title, date, tags, content } = data;
</script>
<div class="flex justify-around p-4 md:p-8 lg:p-16">
	<aside class=" hidden lg:block w-1/5 text-center p-8">
		<TagContainer {tags} />
	</aside>
	<article class="md:3/4 lg:w-3/5 m-2">
		<h1>{title}</h1>
		<hr />
        <p class="text-sm">Published: {date}</p>
        <svelte:component this={content} class="p-4"/>
	</article>
	<aside class="hidden lg:block w-1/5 text-center" />
</div>
