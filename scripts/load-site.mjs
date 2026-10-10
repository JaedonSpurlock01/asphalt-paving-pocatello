import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");

export function siteId() {
  const id = process.env.SITE?.trim();
  if (!id) {
    throw new Error(
      "SITE is required. Run commands with SITE=<site-id>, for example: SITE=pocatello npm run build",
    );
  }
  if (!/^[a-z0-9-]+$/.test(id)) {
    throw new Error(`Invalid SITE id "${id}". Use lowercase letters, numbers, and hyphens.`);
  }
  return id;
}

export function loadSite(id = siteId()) {
  const path = join(rootDir, "sites", id, "site.json");
  if (!existsSync(path)) {
    throw new Error(`No site config at sites/${id}/site.json`);
  }
  const site = JSON.parse(readFileSync(path, "utf8"));
  if (site.id !== id) {
    throw new Error(`sites/${id}/site.json has id "${site.id}"`);
  }
  return site;
}
