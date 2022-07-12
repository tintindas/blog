/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

interface MetaData {
	path: string;
	metadata: {
		title: string;
		date: string;
		slug: string;
		hook: string;
	};
}
