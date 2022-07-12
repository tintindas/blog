<script context="module">
	const data = import.meta.glob('./posts/*/*/*.md');

	export const load = async () => {
		const allMetadata = [];
		for (let path in data) {
			const { metadata } = await data[path]();
			allMetadata.push({ path, metadata });
		}

		return {
			props: { allMetadata }
		};
	};
</script>

<script lang="ts">
	export let allMetadata: MetaData[];
	import NavBar from '../components/NavBar.svelte';
	import PostList from '../components/PostList.svelte';
</script>

<div>
	<NavBar />
	<main>
		<PostList {allMetadata} />
	</main>
</div>

<!-- TODO: About Page -->

<!-- TODO: Footer -->
<style>
	main {
		width: 70vw;
		padding-top: 2vh;
		margin: 0 auto;
	}
</style>
