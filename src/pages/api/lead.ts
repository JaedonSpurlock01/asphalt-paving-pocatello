import type { APIRoute } from "astro";
import { business, serviceOptions } from "../../data/site";

export const prerender = false;

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "")
    .replace(/[\r\n\t]+/g, " ")
    .trim()
    .slice(0, max);
}

function digits(value: string) {
  return value.replace(/\D/g, "");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const POST: APIRoute = async ({ request, redirect, locals }) => {
  const form = await request.formData();

  if (clean(form.get("company_website"), 200)) {
    return redirect("/thank-you", 303);
  }

  const name = clean(form.get("name"), 80);
  const phone = clean(form.get("phone"), 30);
  const email = clean(form.get("email"), 120);
  const size = clean(form.get("size"), 12);
  const service = clean(form.get("service"), 80);

  const sizeNumber = Number(size);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const serviceOk = serviceOptions.includes(service as (typeof serviceOptions)[number]);
  const valid =
    name.length > 1 &&
    digits(phone).length >= 10 &&
    emailOk &&
    serviceOk &&
    Number.isFinite(sizeNumber) &&
    sizeNumber > 0 &&
    sizeNumber < 10000000;

  if (!valid) {
    return redirect("/contact/?error=1", 303);
  }

  const mail = locals.runtime?.env?.LEAD_EMAIL as
    | {
        send: (message: {
          from: string | { name: string; email: string };
          to?: string | { name: string; email: string };
          subject: string;
          replyTo?: string | { name: string; email: string };
          text?: string;
          html?: string;
        }) => Promise<unknown>;
      }
    | undefined;

  if (!mail?.send) {
    return redirect("/contact/?error=send", 303);
  }

  const subject = `New paving lead: ${service}`;

  const text = [
    "New estimate request from the website",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Approx. size: ${sizeNumber.toLocaleString("en-US")} sq ft`,
  ].join("\n");

  const html = [
    "<p>New estimate request from the website.</p>",
    "<ul>",
    `<li><strong>Name:</strong> ${escapeHtml(name)}</li>`,
    `<li><strong>Phone:</strong> ${escapeHtml(phone)}</li>`,
    `<li><strong>Email:</strong> ${escapeHtml(email)}</li>`,
    `<li><strong>Service:</strong> ${escapeHtml(service)}</li>`,
    `<li><strong>Approx. size:</strong> ${escapeHtml(sizeNumber.toLocaleString("en-US"))} sq ft</li>`,
    "</ul>",
  ].join("");

  try {
    await mail.send({
      from: { name: business.name, email: business.email },
      to: business.email,
      replyTo: { name, email },
      subject,
      text,
      html,
    });
  } catch {
    return redirect("/contact/?error=send", 303);
  }

  return redirect("/thank-you", 303);
};

export const GET: APIRoute = () => new Response("Method not allowed", { status: 405 });
