import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Cloudflare Pages configuration
      routes: {
        include: ['/*'],
        exclude: []
      }
    })
  },
  preprocess: vitePreprocess()
};

export default config;
