<script>
	// @ts-nocheck
	export let data;
	import BlogCard from '$lib/Components/BlogCard.svelte';
	import TagContainer from '$lib/Components/TagContainer.svelte';
</script>

<svelte:head>
	<title>All Blog posts - Luis' page</title>
	<html lang="en" />
</svelte:head>

<div class="flex justify-around p-4 md:p-8 lg:p-16">
	<aside class=" hidden lg:block w-1/5 text-center my-auto p-8">
		<TagContainer tags={data.tags} />
	</aside>
	<main class="md:3/4 lg:w-3/5">
		<h1>All posts</h1>
		<hr />
		<div class=" grid md:grid-cols-2">
			{#each data.orderedPosts as post}
				<div class="flex justify-center">
					<BlogCard blogEntry={post} />
				</div>
			{/each}
		</div>
	</main>
	<aside class="hidden lg:block w-1/5 text-center" />
</div>
