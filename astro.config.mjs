// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Indirizzo canonico: il dominio senza www reindirizza qui.
  // Serve a canonical, og:url, og:image e sitemap.
  site: "https://www.michelecampanello.dev",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
