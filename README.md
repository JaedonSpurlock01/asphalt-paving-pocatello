# asphalt-paving-sites

One Astro site, many cities. Shared pages live in `src/`. Each city is a folder under `sites/` with its own domain, phone, and Cloudflare project.

Long-form copy in `src/data/services.ts` and the FAQs in `src/data/site.ts` is still written for Pocatello. A new city needs its own copy pass, not only a metadata swap.

## Add a city

1. Copy `sites/_template` to `sites/<id>` (lowercase, hyphens). `_template` is not built.
2. Edit `sites/<id>/site.json`: `id` must match the folder name.
3. Set `SITE=<id>` and run `npm run build`.
4. In Cloudflare, create a **separate** Workers project for that domain. Point the build at this repo with environment variable `SITE=<id>` and Wrangler config `sites/<id>/wrangler.jsonc`. Attach that city’s domain to that project only.

`wrangler.jsonc` is generated from `site.json` (`npm run sync-config`, also runs on build). Put lead inboxes in `site.json`, not only in the dashboard — deploy overwrites dashboard vars.

## Commands

```bash
npm run dev                         # SITE defaults to pocatello
SITE=pocatello npm run build
npm run deploy -- pocatello         # build, then wrangler deploy
```

The Cloudflare adapter emits a Worker (`dist/_worker.js`) plus static assets. Each city is its own Cloudflare project and custom domain. Email sending uses the `LEAD_EMAIL` binding in that city’s Wrangler config.
