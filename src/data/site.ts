export const business = {
  name: "Pocatello Asphalt Paving",
  phoneDisplay: "(208) 775-8900",
  phoneTel: "+12087758900",
  email: "info@pocatelloasphaltpaving.com",
  city: "Pocatello",
  region: "ID",
  regionName: "Idaho",
  country: "US",
  url: "https://pocatelloasphaltpaving.com",
  latitude: "42.8713",
  longitude: "-112.4455",
  priceRange: "$$",
  serviceAreaLabel: "Pocatello, Idaho",
};

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "YouTube", href: "https://www.youtube.com" },
] as const;

export const hours = [
  { days: "Monday–Friday", time: "9 AM–6 PM" },
  { days: "Saturday", time: "9 AM–4 PM" },
  { days: "Sunday", time: "Closed" },
];

export const serviceOptions = [
  "Asphalt Driveway Paving",
  "Asphalt Parking Lot",
  "Asphalt Roads",
  "Asphalt Repair",
  "Asphalt Sealcoating",
  "Other",
] as const;

export type ServiceOption = (typeof serviceOptions)[number];

export const values = [
  {
    title: "Integrity",
    text: "You get a written plan with a clear price and a schedule you can plan around. If the base needs more work than a photo showed, we stop and talk before we add cost.",
  },
  {
    title: "Quality",
    text: "Hot-mix asphalt, clean aggregate, and compaction while the mat is still hot. That is the craft. We do not stretch a thin lift over a soft base and call it finished.",
  },
  {
    title: "Excellence",
    text: "Drainage, edges, and joints get the same attention as the surface you see from the curb. The job is done when water leaves the pavement and the edges stay tied in.",
  },
  {
    title: "Safety",
    text: "Crews work with cones, clear staging, and a plan for how you and your neighbors get in and out. We leave the site swept, with no loose rock in the driving path.",
  },
];

export const reasons = [
  {
    title: "Licensed and Insured",
    text: "Paving equipment is heavy and the work sits on your property. We carry the coverage a homeowner or property manager should expect before a crew arrives.",
    icon: "shield",
  },
  {
    title: "Top-Tier Materials",
    text: "We pave with plant-mixed hot-mix asphalt and compacted base rock suited to southeast Idaho freeze-thaw, not a cold patch spread thin and left to ravel.",
    icon: "layers",
  },
  {
    title: "Free On-Site Consultations",
    text: "Square footage, access, drainage, and the condition of the soil decide the price. We look at the ground with you before you commit to a number — a free asphalt estimate for driveway paving, parking lot work, or repair.",
    icon: "pin",
  },
  {
    title: "Drainage-First Planning",
    text: "Water trapped against a garage, a storefront, or a building pad is how pavements fail here. Grade and slope are part of the estimate, not an afterthought.",
    icon: "drop",
  },
  {
    title: "Clear Timelines",
    text: "You hear when we can pave, how long the lane stays closed, and when passenger cars can return. Weather holds are explained before the truck is on the way.",
    icon: "clock",
  },
  {
    title: "Local Climate Experience",
    text: "Portneuf Valley winters, plow blades, and spring thaw punish thin pavement. We build sections that can live with that weather instead of fighting it for one season.",
    icon: "sun",
  },
];

export const steps = [
  {
    title: "Free Estimate",
    text: "Tell us the approximate size in square feet and the service you need. We schedule a look at the site, confirm access for trucks, and send a written scope with the price.",
  },
  {
    title: "Site Prep",
    text: "We mark limits, protect edges you want to keep, and remove failed asphalt, vegetation, or soft spots. The aggregate base is placed and compacted so the mat has something solid under it.",
  },
  {
    title: "Asphalt Paving",
    text: "Hot-mix arrives and is placed in a continuous operation, then rolled while it is still workable. Joints, edges, and drainage paths are checked before we call the surface complete.",
  },
  {
    title: "Cleanup and Care",
    text: "We clear debris, walk the finished pavement with you, and tell you when to drive on it. New asphalt usually needs a full cure before sealcoating, and we put that timing in writing.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "How much does asphalt paving cost in Pocatello?",
    answer:
      "Price follows square footage, thickness, access, and how much old pavement or soft soil has to come out. A simple overlay on a sound base costs less than a full-depth driveway on a steep Pocatello lot. Send the approximate size with your request and we will price the work after we see the ground. The visit and the written estimate are free.",
  },
  {
    question: "When is the best time to pave in southeast Idaho?",
    answer:
      "Hot-mix needs a dry, firm base and air temperatures that let the mat compact before it cools. In the Portneuf Valley that window is typically late spring through early fall. We do not pave over frozen ground or during a soaking rain. If a cold snap is forecast, we move the pour rather than place a mat that cannot be rolled properly.",
  },
  {
    question: "Is asphalt cheaper than concrete for a Pocatello driveway?",
    answer:
      "Asphalt usually costs less to install than a concrete driveway of the same size, and it can be milled and resurfaced later without replacing the whole section. Concrete can need fewer seal cycles, but it cracks in freeze-thaw too. We will tell you which surface fits the way you use the pavement, including plow traffic and parked vehicles.",
  },
  {
    question: "How long does an asphalt driveway last in Pocatello?",
    answer:
      "A well-built driveway, with a compacted base and timely crack care, commonly serves 15 to 25 years in this climate. Plow blades, magnesium chloride, irrigation overspray, and standing water shorten that life. Sealcoating after the new mat has cured, plus crack fill before winter, is what keeps a good driveway from becoming a patchwork of potholes.",
  },
  {
    question: "How soon can we drive on new asphalt?",
    answer:
      "Passenger cars often return after the mat has cooled, commonly the next day in mild weather. Heavy trucks, trailers on jacks, and sharp turns from power steering while the surface is still tender can scar it. We give you a return-to-traffic time for your specific mix and the day’s temperature before we leave.",
  },
  {
    question: "Do you sealcoat new asphalt the same week?",
    answer:
      "No. Fresh asphalt needs time to cure and release light oils. Sealcoating too soon can trap those oils and leave a surface that tracks and wears off. We typically wait through a full season, often about 6 to 12 months, then sealcoat. Older pavement that is already cured can be sealed once cracks are filled and the surface is clean.",
  },
  {
    question: "Where do you provide asphalt paving?",
    answer:
      "We build and repair pavement in Pocatello, Idaho. Share the project address when you call or write so we can confirm the job fits our schedule and include any site access details in the written estimate.",
  },
  {
    question: "Do you repair potholes and seal cracks in Pocatello?",
    answer:
      "Yes. We saw-cut patches for potholes, utility cuts, and plow damage, rebuild the base when it is soft, and roll hot-mix so the repair meets the surrounding pavement. Open cracks on sound asphalt can be routed and filled before sealcoating. If the surface is mapped with alligator cracking, we will quote replacement instead of patching.",
  },
  {
    question: "Can you repave an old blacktop driveway or pave over gravel?",
    answer:
      "Often, yes. A mill-and-overlay or new mat over gravel works when drainage is good and the base compacts. We remove failed blacktop, soft soil, and vegetation first when the edges or subgrade will not support another lift. The free site visit decides whether you need overlay, full-depth paving, or repair only.",
  },
  {
    question: "What should I look for in a Pocatello paving contractor?",
    answer:
      "Look for a written scope that lists square footage, base prep, thickness, and drainage — not just a single price per square foot. The crew should explain when an overlay is a mistake, carry insurance, and give a return-to-traffic time after paving. We provide free on-site estimates so you can compare those details before you hire.",
  },
  {
    question: "Do you handle both residential and commercial paving in Pocatello?",
    answer:
      "Yes. Residential paving covers asphalt driveways, blacktop replacement, and long approaches. Commercial paving covers parking lot paving, parking lot repair, and private lanes at shops, churches, apartments, and small yards. The prep and thickness change with traffic; the free site visit sets that before we quote.",
  },
  {
    question: "What is the difference between sealcoating and asphalt paving?",
    answer:
      "Asphalt paving and hot-mix placement build or replace the structural mat. Sealcoating — also called a seal coat — is a maintenance layer on cured pavement after crack sealing and patching. New asphalt needs months to cure before sealcoating; tired pavement may need pothole repair or replacement instead of sealer alone.",
  },
];
