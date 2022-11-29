<script>
	export let tags = {};
</script>

<div class="bg-cpink rounded-lg hover:scale-105 hover:transition-all sticky top-32">
	<a href="/blog/tags" >
		<div class=" bg-coral rounded-t-lg"><h4>Tags</h4></div>

		<div class="py-4 flex flex-wrap justify-center">
			{#each tags as tag}
				<div class="py-2"><a href="/blog/tags/{tag}" class="tag_link">#{tag}</a></div>
			{/each}
		</div>
	</a>
</div>
