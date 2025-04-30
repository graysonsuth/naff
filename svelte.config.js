import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // If you want to prerender all pages at build time
      fallback: '/src/app.html',
      // Output directory for the static build
      pages: 'build'
    })
  },
  preprocess: vitePreprocess()
};

export default config;
