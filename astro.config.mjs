import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { join } from "node:path";
import { loadSite, siteId } from "./scripts/load-site.mjs";

const id = siteId();
const site = loadSite(id);

function siteConfigPlugin() {
  const resolved = "\0virtual:site";
  const services = "\0virtual:services";
  const assets = "\0virtual:site-assets";
  return {
    name: "site-config",
    resolveId(source) {
      if (source === "virtual:site") return resolved;
      if (source === "virtual:services") return services;
      if (source === "virtual:site-assets") return assets;
    },
    load(source) {
      if (source === resolved) return `export default ${JSON.stringify(site)}`;
      if (source === services) {
        return `export { services, getService } from ${JSON.stringify(join(process.cwd(), "sites", id, "services.ts"))}`;
      }
      if (source === assets) {
        const asset = (name) => join(process.cwd(), site.assets[name]);
        const faviconImport = site.assets.favicon
          ? [`import favicon from ${JSON.stringify(asset("favicon"))};`, "favicon,"]
          : ["", ""];
        return [
          `import logoLight from ${JSON.stringify(asset("logoLight"))};`,
          `import logoDark from ${JSON.stringify(asset("logoDark"))};`,
          faviconImport[0],
          `import hero from ${JSON.stringify(asset("hero"))};`,
          `import driveway from ${JSON.stringify(asset("driveway"))};`,
          `import lot from ${JSON.stringify(asset("lot"))};`,
          `import road from ${JSON.stringify(asset("road"))};`,
          `import repair from ${JSON.stringify(asset("repair"))};`,
          `import seal from ${JSON.stringify(asset("seal"))};`,
          `import process from ${JSON.stringify(asset("process"))};`,
          `export default { logoLight, logoDark, ${faviconImport[1]} hero, driveway, lot, road, repair, seal, process };`,
        ].join("\n");
      }
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
