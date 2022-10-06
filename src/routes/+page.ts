import type { MetaData } from 'src/app';

export const load = async () => {
	const data = import.meta.glob('./posts/*/*.md');

	const allMetadata = [];
	for (let path in data) {
		const { metadata } = (await data[path]()) as MetaData;
		allMetadata.push({ path, metadata });
	}

	return {
		allMetadata
	};
};
