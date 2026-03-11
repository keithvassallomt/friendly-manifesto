import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import { remarkAlert } from 'remark-github-blockquote-alert';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkAlert],
  },
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB', 'en-US'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
