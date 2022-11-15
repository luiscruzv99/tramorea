<script lang="ts">
	import { fade } from 'svelte/transition';

	// De momento usamos una lista estática
	// lo ideal sería pasar un directorio y poder coger todas las de un repo

	export let files: string[];

	let visElems = [files[files.length - 1], files[0], files[1]];
	let centerElem = 0;

	async function moveRight() {
		centerElem = (centerElem + 1) % files.length;

		visElems = [
			files[(((centerElem - 1) % files.length) + files.length) % files.length],
			files[centerElem % files.length],
			files[(centerElem + 1) % files.length]
		];
	}

	function moveLeft() {
		centerElem = (((centerElem - 1) % files.length) + files.length) % files.length;

		visElems = [
			files[(((centerElem - 1) % files.length) + files.length) % files.length],
			files[centerElem % files.length],
			files[(centerElem + 1) % files.length]
		];
	}

	setInterval(() => {
		moveRight();
	}, 5000);
</script>

<div class="w-full flex overflow-x-hidden self-center">

	<button on:click={moveLeft} class="hidden md:block">
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			width="3em"
			height="3em"
			viewBox="0 0 11 18"
			enable-background="new 0 0 11 18"
			xml:space="preserve"
		>
			<rect
				fill="#F15946"
				x="4"
				y="-0.5"
				transform="matrix(0.7072 0.707 -0.707 0.7072 5.4989 -2.2781)"
				width="2.999"
				height="12"
			/>
			<rect
				fill="#F15946"
				x="4"
				y="5.864"
				transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 17.7781 16.3651)"
				width="3"
				height="12"
			/>
		</svg>
	</button>
	<div class="flex justify-center lg:h-96">
		{#each visElems as f, i (f)}
			{#if i == 1}
				<img src={f} alt="" class="px-4" in:fade={{ duration: 400 }} />
			{:else}
				<img src={f} alt="" class="px-4 w-1/6 my-auto hidden lg:block" in:fade={{ duration: 400 }} />
			{/if}
		{/each}
	</div>
	<button on:click={moveRight} class="hidden md:block"> 
		<svg
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		width="3em"
		height="3em"
		viewBox="0 0 11 18"
		enable-background="new 0 0 11 18"
		xml:space="preserve"
		class=" rotate-180"
	>
		<rect
			fill="#F15946"
			x="4"
			y="-0.5"
			transform="matrix(0.7072 0.707 -0.707 0.7072 5.4989 -2.2781)"
			width="2.999"
			height="12"
		/>
		<rect
			fill="#F15946"
			x="4"
			y="5.864"
			transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 17.7781 16.3651)"
			width="3"
			height="12"
		/>
	</svg> </button>
</div>
