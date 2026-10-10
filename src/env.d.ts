/// <reference types="astro/client" />

type LeadEmailBinding = import("@cloudflare/workers-types").SendEmail;

type CloudflareEnv = {
  LEAD_EMAIL: LeadEmailBinding;
};

type Runtime = import("@astrojs/cloudflare").Runtime<CloudflareEnv>;

declare namespace App {
  interface Locals extends Runtime {}
}
