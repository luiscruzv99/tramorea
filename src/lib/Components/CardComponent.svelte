<script lang="ts">
	export let titulo = '';
	export let desc = '';
	export let imgSrc = '';
	export let imgLink = '';
	export let bgcolor = 'bg-cpink';
</script>

<div class="flex flex-col lg:flex-row rounded-xl {bgcolor} my-10 drop-shadow-lg">
	<div class="flex p-5 items-center m-auto w-3/4 md:w-1/3">
		{#if imgLink.length > 1}
		<a href={imgLink} target="_blank" class="hover:scale-105 transition ease-in-out"
			><img src={imgSrc} alt="" class="rounded-full" />
		</a>
		{:else}
		<img src={imgSrc} alt="" class="rounded-full" />
		{/if}
		
	</div>

	<div class="block p-8 w-full">
		<h2 class="text-left">{titulo}</h2>
		<div class="font-dosis text-xl">
			{#each desc.split('\n') as line}
				<p class="p-2 md:text-justify">{line}</p>
			{/each}
		</div>
	</div>
</div>
