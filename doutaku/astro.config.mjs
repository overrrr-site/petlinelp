// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The GitHub/Vercel repo publishes this app from the /doutaku path.
  outDir: "./dist/doutaku",
  vite: {
    plugins: [tailwindcss()]
  }
});
