// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? 'http://localhost:4321',

	vite: {
		// @ts-ignore
		plugins: [tailwindcss()],
	},

	integrations: [icon(), sitemap()],
});
