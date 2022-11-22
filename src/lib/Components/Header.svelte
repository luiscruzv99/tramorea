<script>
	import { fly } from 'svelte/transition';
	import ham from '$lib/assets/ham.svg';
	import logo from '$lib/assets/logo.png'

	let links = [
		{ name: 'Home', link: '/' },
		{ name: 'Blog', link: '/blog' },
		{ name: 'Projects', link: '/projects' },
		{ name: 'Contact', link: '/contact' }
	];

	let open = false;

	function showMenu() {
		open = !open;
	}
</script>

<header>
	<div class="flex content-between">
		<img src={logo} class=" h-16 p-2" alt=""/>
		<h2>LuisC.dev</h2>
	</div>

	<div class="xl-nav">
		{#each links as route}
			<a href={route.link}>
				<h3>{route.name}</h3>
			</a>
		{/each}
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="mobile-nav z-20" on:click={showMenu}>
		<img src={ham} alt="" />
		{#if open}
			<div class="menu-display" transition:fly={{ duration: 200 }}>
				{#each links as route, i}
					<a href={route.link} in:fly={{ delay: 50 * i }}>
						<h3 class="menu-item">{route.name}</h3>
					</a>
				{/each}
			</div>
		{/if}
	</div>
    
</header>
