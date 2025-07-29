<script>
	export let blogEntry = {};
</script>

<div class="bg-cpink p-4 m-2 lg:w-2/3 rounded-xl hover:scale-105 hover:transition-all">
	{#if blogEntry}
		<a href={blogEntry.path}>
			<h2>
				{blogEntry.meta.title}
			</h2>
			<p>Published: {blogEntry.meta.date}</p>
			{#if blogEntry.meta.tags.length > 1}
				<div class="flex flex-wrap">
					<p>Tags:</p>

					{#each blogEntry.meta.tags as t}
						<a href="/blog/tags/{t}" class="tag_link">#{t}</a>
					{/each}
				</div>
			{/if}
		</a>
	{/if}
</div>
