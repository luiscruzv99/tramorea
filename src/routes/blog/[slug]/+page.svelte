<script>
// @ts-nocheck
    export let data;
    const {title, date, tags, content} = data;
</script>

<article>
    <h1>{title}</h1>
    <p>Published: {date} </p>
    {#if tags}
    <p> Tags:
    {#each tags as e}
        \{e}\ 
    {/each}
    </p>
    {/if}
    <svelte:component this={content}/>
</article>