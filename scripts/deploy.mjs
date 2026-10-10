import { spawnSync } from "node:child_process";
import { loadSite } from "./load-site.mjs";

const id = process.argv[2];
if (!id) {
  console.error("Usage: npm run deploy -- <site-id>");
  process.exit(1);
}

process.env.SITE = id;
loadSite(id);

const build = spawnSync("npm", ["run", "build"], { env: process.env, stdio: "inherit" });
if (build.status) process.exit(build.status ?? 1);

const deploy = spawnSync("npx", ["wrangler", "deploy", "-c", `sites/${id}/wrangler.jsonc`], {
  env: process.env,
  stdio: "inherit",
});
process.exit(deploy.status ?? 1);
