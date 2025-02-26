import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  outDir: './dist',
  i18n: {
    locales: ['pl', 'en'],
    defaultLocale: 'pl',
  },
});