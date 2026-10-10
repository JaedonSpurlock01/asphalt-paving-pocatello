export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ServicePage = {
  slug: string;
  nav: string;
  formValue: string;
  title: string;
  description: string;
  h1: string;
  sections: ServiceSection[];
};

export { services, getService } from "virtual:services";
