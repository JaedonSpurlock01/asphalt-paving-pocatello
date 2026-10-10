/// <reference types="astro/client" />

type LeadEmailBinding = import("@cloudflare/workers-types").SendEmail;

type CloudflareEnv = {
  LEAD_EMAIL: LeadEmailBinding;
  /** Real business inbox — form leads are delivered here (not the public info@ address). */
  LEAD_DELIVERY_EMAIL: string;
  /** Optional BCC copy for you (set in Pages/Worker env, not public). */
  LEAD_NOTIFY_EMAIL?: string;
};

type Runtime = import("@astrojs/cloudflare").Runtime<CloudflareEnv>;

declare namespace App {
  interface Locals extends Runtime {}
}
