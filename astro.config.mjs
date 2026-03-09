import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://livearico.org',
  output: 'static',
  integrations: [sitemap()],
});
