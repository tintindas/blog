<script lang="ts">
	import type { MetaData } from 'src/app';
	export let data: { allMetadata: MetaData[] };

	const allMetadata: MetaData[] = data.allMetadata;

	import Footer from '../components/Footer.svelte';
	import NavBar from '../components/NavBar.svelte';
	import PostList from '../components/PostList.svelte';
</script>

<div class="app">
	<NavBar />
	<main>
		<PostList {allMetadata} />
	</main>
	<Footer />
</div>

<!-- TODO: About Page -->
<style>
	main {
		width: 70vw;
		padding-top: 2vh;
		margin: 0 auto;
	}
</style>
