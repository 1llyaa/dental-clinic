import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'de', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
