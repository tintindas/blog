import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		quotes: true,
		dashes: 'oldschool',
		ellipses: true,
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
