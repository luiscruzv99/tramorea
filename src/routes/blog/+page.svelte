<script>
	// @ts-nocheck
	export let data;
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
</script>

<h1>BLOG</h1>
<a href="./blog/Genesis">Test</a>
{#each data.orderedPosts as post}
	<p><a href="{post.path}">
    {post.meta.title}</a>, {post.meta.date}</p>
{/each}
<UnderConstruction />
