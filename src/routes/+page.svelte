<script>
	import UnderConstruction from '$lib/Components/UnderConstruction.svelte';
	import CardComponent from '$lib/Components/CardComponent.svelte';
	import face from '$lib/assets/profile.jpg';

	let Luis =
		"I'm a software engineer based in Santander, currently finishing my masters in computing engineering in the university of Cantabria. I sometimes do some side proyects and post blog entries, which you can see down below! Enjoy your stay😊";
</script>

<div class="mx-5 md:mx-20 lg:mx-40 xl:mx-80">
	<CardComponent titulo={'About Me'} desc={Luis} imgSrc={face} />
</div>

<UnderConstruction />
