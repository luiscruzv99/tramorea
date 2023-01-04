import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: "src/routes/blog/[slug]/blog.svelte"
			}
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		})
	}
};

export default config;
