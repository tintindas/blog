<script lang="ts">
	export let path: string;
	export let metadata: { title: string; date: string; slug: string; hook: string };
</script>

<div class="card">
	<a href={path.replace('.md', '')}><h2>{metadata.title}</h2></a>
	<p>{metadata.hook}</p>
	<div class="container">
		<a href={path.replace('.md', '')}>
			<div class="link-container">
				<p class="more">Read More</p>
				<img src="/arrow-right.svg" alt="go to post" />
			</div>
		</a>
	</div>
</div>

<style>
	.card {
		border: 1px solid hsla(var(--secondary) / 0.3);
		border-radius: 5px;
		padding: 1rem;
		box-shadow: 0 3px 10px hsla(var(--secondary) / 0.15);
	}

	h2 {
		font-size: 2.3rem;
		margin-top: 0.5rem;
		margin-bottom: 0;
	}

	.container {
		display: flex;
		width: 100%;
		justify-content: end;
	}

	.link-container {
		padding: 5px 10px;
		border: 1px solid hsla(var(--secondary) / 0.5);
		border-radius: 5px;
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: hsla(var(--primary));
		margin-right: 4px;
	}

	.more {
		margin: 0;
	}
	img {
		height: 15px;
		width: 20px;
	}
</style>
