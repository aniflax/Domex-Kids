import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Boxes, Truck, Warehouse, Handshake, Clock, Scale } from "lucide-react";
import { images } from "@/lib/site-config";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale — DOMEX KIDS" },
      { name: "description", content: "Wholesale solutions for retailers: bulk orders, flexible MOQs, competitive pricing and pan-India delivery from DOMEX KIDS." },
      { property: "og:title", content: "Wholesale — DOMEX KIDS" },
      { property: "og:description", content: "Bulk manufacturing and wholesale supply of premium kids garments across India." },
      { property: "og:image", content: images.wholesale },
      { property: "og:url", content: "/wholesale" },
    ],
    links: [{ rel: "canonical", href: "/wholesale" }],
  }),
  component: Wholesale,
});

const facilities = [
  { icon: Boxes, t: "Bulk Orders", d: "Volume production capacity for large retail networks." },
  { icon: Warehouse, t: "Wholesale Supply", d: "Ready-stock and made-to-order collections." },
  { icon: Clock, t: "Fast Dispatch", d: "Turnaround measured in days, not weeks." },
  { icon: Truck, t: "Pan India Delivery", d: "Trusted transport partners nationwide." },
  { icon: Handshake, t: "Retail Partner Support", d: "Dedicated team through every order." },
  { icon: Scale, t: "Flexible Quantities", d: "MOQs that work for growing retailers." },
];

function Wholesale() {
  return (
    <>
      <section className="pt-24 md:pt-28">
        <div className="container-x">
          <div className="rounded-3xl overflow-hidden relative aspect-[16/9] md:aspect-[21/9]">
            <img src={images.wholesale} alt="Wholesale operations" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/55" />
            <div className="relative h-full flex flex-col justify-end p-8 md:p-16 text-background">
              <Reveal><div className="text-xs uppercase tracking-[0.28em] text-background/80 mb-4">Wholesale</div></Reveal>
              <Reveal delay={100}>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] max-w-3xl">
                  Wholesale Solutions for Retailers.
                </h1>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <SectionHeading title={<>Built for retail. <span className="italic">Priced for growth.</span></>} eyebrow="Overview" />
          </div>
          <div className="lg:col-span-6 space-y-5 text-muted-foreground leading-relaxed">
            <Reveal><p>
              DOMEX KIDS specializes in wholesale manufacturing and bulk supply of premium kids
              garments across India. Whether you're a retail store, distributor or reseller, we
              offer competitive pricing, reliable production and timely delivery.
            </p></Reveal>
            <Reveal delay={100}><p>
              From line sheets to logistics, our team makes it easy to stock your shop floor with
              modern, well-made pieces that sell.
            </p></Reveal>
            <Reveal delay={200}>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-brand transition-colors">
                Become a dealer
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="container-x">
          <SectionHeading eyebrow="Facilities" title="Everything you need to stock with confidence." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f, i) => (
              <Reveal key={f.t} delay={(i % 3) * 100}>
                <div className="hover-lift h-full rounded-3xl bg-white border border-border p-8">
                  <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center text-brand">
                    <f.icon size={20} />
                  </div>
                  <div className="mt-6 font-medium text-lg">{f.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
