<script>
	import UnderConstruction from '$lib/Components/UnderConstruction.svelte';
	import CardComponent from '$lib/Components/CardComponent.svelte';
	import face from '$lib/assets/profile.jpg';
	import Luis from '$lib/assets/Luis.txt?raw';
</script>

<div class="mx-5 md:mx-20 lg:mx-40 xl:mx-80">
	<CardComponent titulo={'About Me'} desc={Luis} imgSrc={face} />
</div>

<UnderConstruction />
