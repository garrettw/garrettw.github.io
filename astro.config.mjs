// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import purgecss from 'astro-purgecss';
import playformInline from '@playform/inline';
import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    // icon(), // https://github.com/natemoo-re/astro-icon || https://icon-sets.iconify.design
    purgecss(),
    playformInline(),
    playformCompress(),
  ],
});