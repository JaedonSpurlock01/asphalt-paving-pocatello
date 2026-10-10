import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://pocatelloasphaltpaving.com",
  output: "static",
  adapter: cloudflare({
    imageService: "compile",
  }),
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
