<script>
	// @ts-nocheck
	import TagContainer from '$lib/components/tagContainer.svelte';
	export let data;
	const { title, date, tags, content } = data;
</script>

<div class="flex justify-around p-4 md:p-8 lg:p-16">
	<aside class=" hidden lg:block w-1/5 text-center my-auto p-8">
		<TagContainer tags={tags} />
	</aside>
	<article class="md:3/4 lg:w-3/5 m-2 xs:pb-20">
		<svelte:component this={content} title={title} date={date} class="p-4 pt-6"/>
	</article>
	<aside class="hidden lg:block w-1/5 text-center" />
</div>
