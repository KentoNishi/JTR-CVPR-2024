<script>
	import Banner from '$lib/components/Banner.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Summary from '$lib/components/Summary.svelte';
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => {
		document.body.style.overflow = 'hidden';
		setTimeout(() => {
			mounted = true;
			document.body.style.overflow = 'auto';
		}, 250);
	});
</script>

<svelte:head>
	<title>Joint-Task Regularization for Partially Labeled Multi-Task Learning</title>
</svelte:head>

{#if !mounted}
	<Loading />
{/if}
<Banner />
<div class="padded">
	<Summary />
</div>

<style>
	.padded {
		padding: 1rem;
		display: flex;
		justify-content: center;
	}
</style>
