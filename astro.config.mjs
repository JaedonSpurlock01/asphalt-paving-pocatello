import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { loadSite, siteId } from "./scripts/load-site.mjs";

const id = siteId();
const site = loadSite(id);

function siteConfigPlugin() {
  const resolved = "\0virtual:site";
  return {
    name: "site-config",
    resolveId(source) {
      if (source === "virtual:site") return resolved;
    },
    load(source) {
      if (source === resolved) return `export default ${JSON.stringify(site)}`;
    },
  };
}

export default defineConfig({
  site: site.business.url,
  output: "static",
  adapter: cloudflare({
    imageService: "compile",
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/robots.txt"),
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [siteConfigPlugin(), tailwindcss()],
  },
});
