<script>
    export let data;
</script>

<main>
    {#if data}
        {#each data.taggedPosts as post}
            <p>{post.meta.title}</p>
        {/each}
    {/if}
</main>