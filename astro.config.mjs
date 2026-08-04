import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://dentiyak.cz',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'de', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
