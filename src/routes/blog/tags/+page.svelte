<script>
	export let data;
</script>

<main>
	{#each data.tags as tag}
		{#if tag != undefined}
			<p>{tag}</p>
		{/if}
	{/each}
</main>
