<script>
	import Footer from '../../components/Footer.svelte';
	import NavBar from '../../components/NavBar.svelte';
	import './post.css';
</script>

<div class="app">
	<NavBar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
