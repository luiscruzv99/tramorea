<script>
	// @ts-nocheck
	export let data;
	import BlogCard from '$lib/components/blogCard.svelte';
	import TagContainer from '$lib/components/tagContainer.svelte';
</script>

<svelte:head>
	<title>The Blog - Luis' page</title>
	<html lang="en" />
</svelte:head>

<div class="flex justify-around p-4 md:p-8 lg:p-16">
	<aside class="hidden lg:block w-1/5 text-center lg:relative my-48 p-8">
		<TagContainer tags={data.tags} />
	</aside>
	<main class="md:3/4 lg:w-3/5">
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
		<div class="flex justify-center m-2">
			<BlogCard blogEntry={data.last} />
		</div>

		<p>
			If you want to see all my posts, just head to my <a href="/blog/posts" class="page_link"
				>all posts</a
			> page, where you can find them ordered by published date.
		</p>
	</main>
	<aside class="hidden lg:block w-1/5 text-center" />
</div>
