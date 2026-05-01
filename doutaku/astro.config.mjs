// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Output build artifacts under dist/doutaku/ so the deployed URL is
  // /doutaku/ (and `/` returns 404 since no index.html lives at the
  // outputDirectory root).
  outDir: "./dist/doutaku",
  vite: {
    plugins: [tailwindcss()],
  },
});
