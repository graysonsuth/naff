import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Fallback file for non-existent pages
      fallback: '200.html',
      // Output directory for the static build
      pages: 'build',
      assets: 'build' // Ensure assets are also output correctly
    }),
    paths: {
      // Ensure correct base path if needed
      base: '',
    }
  },
  preprocess: vitePreprocess()
};

export default config;

