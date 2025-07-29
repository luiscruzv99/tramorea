<script type="ts">
	import { onMount } from 'svelte';
	import '$lib/projects.css';
	import '$lib/components/cardComponent.svelte';
	import CardComponent from '$lib/components/cardComponent.svelte';

	//TODO: hacer que cuando clicko en un elemento, salga por pantalla su id
	onMount(() => {
		let test = document.getElementById('test');
	});
</script>

<svelte:head>
	<title>Projects - Luis' page</title>
	<html lang="en" />
</svelte:head>
<h1>My projects</h1>
<div class="flex justify-around p-4 md:p-8 lg:p-16">
	<p>BLA BLA BLA</p>
</div>

<!-- Aquí las tarjetas de los proyectos-->
<div id="projects-container">
	<div id="test" on:click={click('test')}>
		<CardComponent titulo={'Test project'} desc={'This is a test project'} />
	</div>

	<CardComponent titulo={'Test project'} desc={'This is a test project'} />

	<CardComponent titulo={'Test project'} desc={'This is a test project'} />

	<CardComponent titulo={'Test project'} desc={'This is a test project'} />
</div>
