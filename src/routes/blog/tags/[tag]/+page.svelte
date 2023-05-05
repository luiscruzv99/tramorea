<script>
	export let data;
	import BlogCard from '$lib/Components/BlogCard.svelte';
</script>

<svelte:head>
	<title>Tag {data.tag} - Luis' page</title>
	<html lang="en" />
</svelte:head>

<div class="flex justify-around p-4 md:p-8 lg:p-16">
	<aside class=" hidden lg:block w-1/5 text-center my-auto p-8" />
	<main class="md:3/4 lg:w-3/5">
		<h1>Posts tagged {data.tag}</h1>
		<hr />
		{#if data}
			<div class=" grid md:grid-cols-2">
				{#each data.taggedPosts as post}
					<div class="flex justify-center">
						<BlogCard blogEntry={post} />
					</div>
				{/each}
			</div>
		{/if}
	</main>
	<aside class="hidden lg:block w-1/5 text-center" />
</div>
