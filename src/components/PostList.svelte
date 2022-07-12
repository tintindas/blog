<script lang="ts">
	import PostCard from './PostCard.svelte';
	export let allMetadata: MetaData[];
</script>

<ul>
	{#each allMetadata as { path, metadata }}
		<li>
			<PostCard {path} {metadata} />
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}

	li {
		margin: 3vh 0;
	}
</style>
