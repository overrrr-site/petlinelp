/** Resolve public assets for both the root and the configured Astro base path. */
export const assetPath = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
