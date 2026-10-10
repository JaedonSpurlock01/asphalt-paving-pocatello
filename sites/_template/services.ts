import config from "virtual:site";
import type { ServicePage } from "../../src/data/services";

const { business } = config;

const service = (
  slug: string,
  nav: string,
  formValue: string,
  title: string,
  description: string,
  h1: string,
  headings: string[],
): ServicePage => ({
  slug,
  nav,
  formValue,
  title,
  description,
  h1,
  sections: headings.map((heading) => ({
    heading,
    paragraphs: [
      `Describe this part of the service for ${business.city}, including local conditions, customer concerns, and what the written estimate covers.`,
      "Replace this template paragraph with original market-specific copy before publishing.",
    ],
  })),
});

export const services: ServicePage[] = [
  service(
    "asphalt-driveway-paving",
    "Driveway Paving",
    "Asphalt Driveway Paving",
    `Driveway Paving & Blacktop in ${business.city}`,
    `Asphalt driveway paving, replacement, and resurfacing in ${business.serviceAreaLabel}.`,
    `Asphalt Driveway Paving in ${business.city}`,
    ["Driveway paving and replacement", "Base preparation and drainage", "Request a driveway estimate"],
  ),
  service(
    "asphalt-parking-lot",
    "Parking Lots",
    "Asphalt Parking Lot",
    `Commercial Parking Lot Paving in ${business.city}`,
    `Parking lot paving, resurfacing, and repair in ${business.serviceAreaLabel}.`,
    `Commercial Parking Lot Paving in ${business.city}`,
    ["Commercial paving scope", "Repairs, overlays, and replacement", "Plan a free walkthrough"],
  ),
  service(
    "asphalt-roads",
    "Asphalt Roads",
    "Asphalt Roads",
    `Private Road Paving in ${business.city}`,
    `Private asphalt roads, lanes, and approaches in ${business.serviceAreaLabel}.`,
    `Private Road Paving in ${business.city}`,
    ["Private roads and lanes", "Traffic, base, and drainage", "Request a road estimate"],
  ),
  service(
    "asphalt-repair",
    "Asphalt Repair",
    "Asphalt Repair",
    `Pothole Repair & Asphalt Patching in ${business.city}`,
    `Pothole repair, asphalt patching, and crack sealing in ${business.serviceAreaLabel}.`,
    `Asphalt Repair in ${business.city}`,
    ["Pothole and patch repair", "When repair makes sense", "Request an asphalt repair estimate"],
  ),
  service(
    "asphalt-sealcoating",
    "Sealcoating",
    "Asphalt Sealcoating",
    `Asphalt Sealcoating in ${business.city}`,
    `Driveway and parking lot sealcoating in ${business.serviceAreaLabel}.`,
    `Asphalt Sealcoating in ${business.city}`,
    ["Sealcoating cured asphalt", "Crack filling and surface preparation", "Request a sealcoat estimate"],
  ),
];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}
