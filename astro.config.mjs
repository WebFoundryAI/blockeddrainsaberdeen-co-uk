import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blockeddrainsaberdeen.co.uk',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString().split('T')[0];
        return item;
      },
    }),
    tailwind(),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'never',
});
