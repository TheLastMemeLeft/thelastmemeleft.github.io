// @ts-check
import { defineConfig } from 'astro/config';

// User site repo (thelastmemeleft.github.io) is served at the domain root, so no `base`.
export default defineConfig({
  site: 'https://thelastmemeleft.github.io',
  trailingSlash: 'ignore',
});
