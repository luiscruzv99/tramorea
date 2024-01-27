<script>
	import CardComponent from '$lib/Components/CardComponent.svelte';
	import ImgCarrousel from '$lib/Components/ImgCarrousel.svelte';

	import face from '$lib/assets/profile.jpg';
	import Luis from '$lib/assets/Luis.txt?raw';

	import pathCarr from '$lib/assets/IdxCarr/pathfinder.png';
	import cellsCarr from '$lib/assets/IdxCarr/cells.gif';
	import dotCarr from '$lib/assets/IdxCarr/dotfiles.png';
	import svsCarr from '$lib/assets/IdxCarr/svsChat.png';
</script>

<div class="mx-5 md:mx-20 lg:mx-40 xl:mx-80 pb-32">
	<CardComponent
		titulo={'About Me'}
		desc={Luis}
		imgSrc={face}
		imgLink="https://github.com/luiscruzv99"
	/>

	<hr />
	<section>
		<a href="/blog">
			<h1
				class="px-4 hover:scale-110 hover:font-bold hover:text-fopal transition ease-in-out duration-200"
			>
				The blog
			</h1>
		</a>
		<p>
			Sometimes I feel the need to leave a written reference of something I've done or found, to use
			it in the future. Sometimes I simply want to write about a thing that has peaked my interest
			or about my interests and hobbies. Whatever the case may be, if you think there might be
			something of value, don't be afraid to take a look <a href="./blog" class="page_link">here</a>
			or check <a href="./blog" class="page_link">the last post</a> I made.
		</p>
	</section>
	<section>
		<h1>My Projects</h1>
		<p class="p-4">
			As part of my habit of learning new technologies, and as a way of practising coding, I tend to
			start a lot of really small and simple projects. Unfortunately, most of them don't ever get to
			see the light of day and be uploaded to my github, and they usually end up being deleted once
			I feel I'm finished with them. Nonetheless, there are some that I do upload to my github, in
			order to save the code for future reference, or just to work on them again when I feel like
			it.
		</p>

		<p class="p-4">
			If you feel curious, you can always check my <a class="page_link" href="./projects"
				>projects page</a
			>, my
			<a class="page_link" href="https://github.com/luiscruzv99" target="_blank">github page</a>, or
			just look at some of the project images down below.
		</p>

		<ImgCarrousel files={[cellsCarr, pathCarr, dotCarr, svsCarr]} />
	</section>

	<hr />
</div>
