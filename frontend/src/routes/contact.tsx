import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DOMEX KIDS" },
      { name: "description", content: "Contact DOMEX KIDS at Gandhi Nagar, Delhi. Reach out for wholesale enquiries, catalogues and dealer partnerships." },
      { property: "og:title", content: "Contact — DOMEX KIDS" },
      { property: "og:description", content: "Reach the DOMEX KIDS team for wholesale enquiries and partnerships." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(80),
  business: z.string().trim().min(1, "Business name required").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  message: z.string().trim().min(5, "Add a short message").max(1000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const [lastData, setLastData] = useState<Record<string, string> | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLastData(parsed.data);
    setSent(true);
  };

  const waMessage = lastData
    ? `*New Enquiry from DOMEX KIDS Website*%0A%0A*Name:* ${encodeURIComponent(lastData.name)}%0A*Business:* ${encodeURIComponent(lastData.business)}%0A*Phone:* ${encodeURIComponent(lastData.phone)}%0A*Email:* ${encodeURIComponent(lastData.email)}%0A*Message:* ${encodeURIComponent(lastData.message)}`
    : "";

  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="container-x">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-brand font-medium mb-6">Contact</div></Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-3xl">
              Let's dress the next season together.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-muted-foreground text-lg">
              Send a message or reach us directly — our team responds within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form ref={formRef} onSubmit={onSubmit} className="rounded-3xl bg-white border border-border p-8 md:p-10">
                {sent ? (
                  <div className="flex flex-col items-center text-center py-10">
                    <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center text-success">
                      <CheckCircle2 size={26} />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl">Details submitted</h3>
                    <p className="mt-2 text-muted-foreground max-w-md">
                      Send your enquiry directly to us on WhatsApp so we can respond right away.
                    </p>
                    <a
                      href={`https://wa.me/${site.whatsapp}?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3.5 text-sm font-medium hover:bg-[#20bd5a] transition-colors"
                    >
                      <MessageCircle size={18} /> Send via WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => { setSent(false); setLastData(null); }}
                      className="mt-4 text-xs text-muted-foreground link-underline cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <div className="grid gap-5">
                    <Field label="Name" name="name" error={errors.name} />
                    <Field label="Business Name" name="business" error={errors.business} />
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                      <Field label="Email" name="email" type="email" error={errors.email} />
                    </div>
                    <Field label="Message" name="message" as="textarea" error={errors.message} />
                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-brand transition-colors"
                    >
                      Send message <Send size={16} />
                    </button>
                  </div>
                )}
              </form>
            </Reveal>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={100}>
              <div className="rounded-3xl bg-white border border-border p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-brand">Business Details</div>
                <div className="mt-4 font-serif text-2xl">DOMEX KIDS WEAR</div>

                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                    <div>
                      <div>{site.address.line1}</div>
                      <div>{site.address.line2}</div>
                      <div>{site.address.city} – {site.address.postal}</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-brand" />
                    <div className="space-y-1">
                      {site.phones.map((p) => (
                        <a key={p} href={`tel:${p}`} className="block link-underline">{p}</a>
                      ))}
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-brand" />
                    <a href={`mailto:${site.email}`} className="link-underline break-all">{site.email}</a>
                  </li>
                  <li className="flex gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0 text-brand" />
                    <div>
                      <div>Tuesday – Sunday</div>
                      <div className="text-muted-foreground">9:00 AM – 6:00 PM</div>
                      <div className="text-muted-foreground">Monday Closed</div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <a
                href={site.mapLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-3xl overflow-hidden border border-border hover-lift"
                aria-label="Open location in Google Maps"
              >
                <iframe
                  title="DOMEX KIDS location"
                  src={site.mapEmbedUrl}
                  className="w-full h-64 pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", as, error,
}: { label: string; name: string; type?: string; as?: "textarea"; error?: string }) {
  const base = "w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={5} className={`mt-2 ${base}`} />
      ) : (
        <input name={name} type={type} className={`mt-2 ${base}`} />
      )}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
