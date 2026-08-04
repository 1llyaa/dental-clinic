import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://dentiyak.cz',
  integrations: [sitemap()],
  image: {
    endpoint: {
      route: '/_image',
      entrypoint: './src/dev-image-endpoint.ts',
    },
  },
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'de', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
