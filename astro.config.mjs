import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shveddmutro.github.io',
  integrations: [sitemap({ filter: (page) => !page.includes('/cv') })],
});
