/// <reference types="astro/client" />

declare module "virtual:site" {
  export interface SiteBusiness {
    name: string;
    phoneDisplay: string;
    phoneTel: string;
    email: string;
    city: string;
    region: string;
    regionName: string;
    country: string;
    url: string;
    latitude: string;
    longitude: string;
    priceRange: string;
    serviceAreaLabel: string;
  }

  export interface SiteConfig {
    id: string;
    cloudflareProject: string;
    leadDeliveryEmail: string;
    leadNotifyEmail: string;
    business: SiteBusiness;
    socials: { name: string; href: string }[];
    hours: { days: string; time: string }[];
    serviceOptions: string[];
  }

  const config: SiteConfig;
  export default config;
}

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
