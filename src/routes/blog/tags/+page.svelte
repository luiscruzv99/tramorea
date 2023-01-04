<script lang="ts">
	export let data: { tags: String[] };
</script>

<main class="mx-5 md:mx-20 lg:mx-40 xl:mx-80 pb-32 pt-4">
	<h1>All Tags</h1>
	<hr />
	<div class="flex justify-center">
		{#each data.tags as tag}
			{#if tag != undefined}
				<div class="p-2"><a href="/blog/tags/{tag}" class="tag_link_big">{tag}</a></div>
			{/if}
		{/each}
	</div>
</main>
