import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { loadSite, rootDir } from "./load-site.mjs";

const sitesDir = join(rootDir, "sites");

for (const id of readdirSync(sitesDir)) {
  if (id.startsWith("_") || id.startsWith(".")) continue;
  const site = loadSite(id);
  const info = site.business.email;
  const destinations = [...new Set([info, site.leadDeliveryEmail, site.leadNotifyEmail].filter(Boolean))];

  const wrangler = {
    name: site.cloudflareProject,
    compatibility_date: "2026-10-10",
    compatibility_flags: ["nodejs_compat"],
    workers_dev: false,
    preview_urls: false,
    main: "../../dist/_worker.js/index.js",
    assets: {
      directory: "../../dist",
      binding: "ASSETS",
    },
    vars: {
      LEAD_DELIVERY_EMAIL: site.leadDeliveryEmail,
      LEAD_NOTIFY_EMAIL: site.leadNotifyEmail,
    },
    send_email: [
      {
        name: "LEAD_EMAIL",
        allowed_sender_addresses: [info],
        allowed_destination_addresses: destinations,
      },
    ],
    observability: {
      logs: {
        enabled: true,
        invocation_logs: true,
      },
    },
  };

  writeFileSync(join(sitesDir, id, "wrangler.jsonc"), `${JSON.stringify(wrangler, null, 2)}\n`);
  console.log(`wrote sites/${id}/wrangler.jsonc`);
}
