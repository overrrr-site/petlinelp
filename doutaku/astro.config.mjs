// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://lp.petline.co.jp',
  base: process.env.PUBLIC_BASE_PATH ?? '/doutaku',
  // The GitHub/Vercel repo publishes this app from the /doutaku path.
  outDir: "./dist/doutaku",
  vite: {
    plugins: [tailwindcss()]
  }
});
