<script lang="ts">
	import funk from '$lib/assets/funkeToun.mp3';
	import fishe from '$lib/assets/fish-spinning.gif';
	import { onMount } from 'svelte';

	let tune: HTMLAudioElement;

	onMount(() => {
		tune.loop = true;
		tune.play();
	});
</script>

<audio src={funk} preload="auto" bind:this={tune} />

<svelte:head>
	<title>Feliz Cumple, Natalia</title>
	<html lang="en" />
</svelte:head>

<div
	id="container"
	style="height: 50vh; display:flex; justify-content: center; align-content:center"
>
	<div class="movimiento" style="padding: 25vh 5vh; display:flex">
		<img src={fishe} alt="" style="height: 8rem; display:inline" />
		<h1>🎉🎊🎉🎊Feliz cumpleaños natalia 🎊🎉🎊🎉</h1>
		<img src={fishe} alt="" style="height: 8rem; display:inline" />
	</div>
</div>
<h2>
	&gt&gt Pulsa <a
		class="page_link"
		href="https://www.youtube.com/shorts/US3T-PPr_pA"
		target="_blank">aquí</a
	> &lt&lt
</h2>

<style>
	#container {
		height: 100%;
		overflow: hidden;
	}
	.movimiento {
		white-space: nowrap;

		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);

		-moz-animation: moverse 10s linear infinite;
		-webkit-animation: moverse 10s linear infinite;
		animation: moverse 10s linear infinite;
	}

	@-moz-keyframes moverse {
		from {
			-moz-transform: translateX(100%);
		}
		to {
			-moz-transform: translateX(-100%);
		}
	}

	@-webkit-keyframes moverse {
		from {
			-webkit-transform: translateX(100%);
		}
		to {
			-webkit-transform: translateX(-100%);
		}
	}

	@keyframes moverse {
		from {
			-moz-transform: translateX(100%);
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
		to {
			-moz-transform: translateX(-100%);
			webkit-transform: translateX(-100%);
			transform: translateX(-100%);
		}
	}
</style>
