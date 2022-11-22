<script>
	export let data;
</script>

<main>
	{#each data.tags as tag}
		{#if tag != undefined}
			<p><a href="tags/{tag}">{tag}</a></p>
		{/if}
	{/each}
</main>
