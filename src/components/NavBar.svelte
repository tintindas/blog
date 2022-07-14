<script>
</script>

<!-- TODO: Tool tips -->

<nav>
	<a href="/" class="tooltip branding" data-text="Upamanyu Das"><h1>UD</h1></a>
	<ul>
		<li class="tooltip nav-link" data-text="Home">
			<a href="/"><img src="/home.svg" alt="Link to home page of the blog" /></a>
		</li>
		<li class="tooltip nav-link" data-text="About">
			<a href="/about"><img src="/info.svg" alt="Link to about page" /></a>
		</li>
		<li class="tooltip nav-link" data-text="Github">
			<a href="https://github.com/tintindas"><img src="/github.svg" alt="Github link" /> </a>
		</li>
		<li class="tooltip nav-link" data-text="LinkedIn">
			<a href="https://www.linkedin.com/in/upamanyu-das/">
				<img src="/linkedin.svg" alt="LinkedIn link" />
			</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		width: 100%;
		display: flex;
		align-items: center;
	}

	h1 {
		margin: 1rem 0;
		margin-left: 2vw;
		font-family: 'Parisienne', cursive;
	}

	ul {
		margin-left: auto;
		display: flex;
		list-style: none;
		align-items: center;
		font-size: 1.2rem;
		justify-content: end;
		color: hsla(var(--primary));
		margin-right: 1vw;
	}

	li {
		margin: 1vh 1vw;
	}

	a {
		text-decoration: none;
		color: hsla(var(--primary));
	}

	.tooltip {
		position: relative;
	}

	.tooltip:hover {
		border-bottom: 2px solid hsla(var(--primary));
	}

	.tooltip::before {
		font-size: 0.8rem;
		color: hsla(var(--secondary) / 0.8);
		content: attr(data-text);
		position: absolute;

		bottom: 0;
		right: 0;

		padding: 2px 5px;

		border-radius: 3px;
		background: hsla(0 0% 0% / 0.1);
		display: none;
	}

	.tooltip:hover::before {
		display: block;
	}

	.branding.tooltip::before {
		right: -50%;
	}

	.branding.tooltip:hover {
		border-bottom: unset;
	}

	.nav-link.tooltip::before {
		bottom: -100%;
		right: -50%;
	}
</style>
