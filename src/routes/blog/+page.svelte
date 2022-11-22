<script>
	// @ts-nocheck
	export let data;
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
</script>

<div class="flex justify-around p-16">
	<aside class=" hidden lg:block w-1/5 text-center my-auto">Test</aside>
	<main class="w-3/5">
		<h1>The Blog™</h1>
		<hr />
		<p>
			Welcome to The Blog™, my little corner of the internet, where I try and write articles about
			my silly little interests, be it coding and software engineering or any other of my passing
			obsessions. If you are interested in reading what I have to say about a particular topic, I
			encourage you to check the <a href="/blog/tags" class="page_link">tags page</a> or the widget on
			the sidebar.
		</p>
		<p>
			If, however, you are only interested in checking out my writing style, I recommend you to take
			a look at my last blog entry, linked down below.
		</p>

		{#if data.lastPost}
			<p><a href={data.lastPost.path} class="page_link">{data.lastPost.meta.title}</a> - {data.lastPost.meta.date}</p>
			{#if data.lastPost.meta.tags.length > 1}
			<p>
				Tags:
				{#each data.lastPost.meta.tags as t}
					[{t}]
				{/each}
			</p>
			{/if}
		{/if}
	</main>
	<aside class="hidden lg:block w-1/5 text-center" />
</div>

<UnderConstruction />
