// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lp.agendeja.app.br',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Um CSS só e pequeno: embutido no HTML, não bloqueia a renderização.
    inlineStylesheets: 'always',
  },
});
