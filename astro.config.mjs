// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import purgecss from 'astro-purgecss';
import playformInline from '@playform/inline';
import playformCompress from '@playform/compress';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://garrettw.github.io',
  integrations: [// icon(), // https://github.com/natemoo-re/astro-icon || https://icon-sets.iconify.design
  sitemap(), mdx(), purgecss(), playformInline(), playformCompress()],
});