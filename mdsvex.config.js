import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import relativeImages from "mdsvex-relative-images";

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		quotes: true,
		dashes: 'oldschool',
		ellipses: true,
	},

	remarkPlugins: [relativeImages],
	rehypePlugins: []
});

export default config;
