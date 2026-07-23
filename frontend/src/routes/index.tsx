import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Clock, MapPin, Sparkles, Star, Truck, X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { images, site } from "@/lib/site-config";
import { fetchHomeCategories, fetchHomeProducts, fetchVideos } from "@/lib/strapi";
import type { Product, Category, Video } from "@/lib/strapi-types";

import heroImg from "../assets/hero-new.jpg";
import facilityImg from "../assets/facility.jpg";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [homeCategories, homeProducts, videos] = await Promise.all([
      fetchHomeCategories().catch(() => [] as Category[]),
      fetchHomeProducts().catch(() => [] as Product[]),
      fetchVideos().catch(() => [] as Video[]),
    ]);
    return { homeCategories, homeProducts, videos };
  },
  head: () => ({
    meta: [
      { title: "DOMEX KIDS — Premium Wholesale Kids Wear Manufacturer" },
      {
        name: "description",
        content:
          "Premium kids wear manufacturer delivering trendy, comfortable and affordable garments to retailers across India since 2014.",
      },
      { property: "og:title", content: "DOMEX KIDS — Premium Wholesale Kids Wear" },
      {
        property: "og:description",
        content:
          "Style that grows with every childhood. Wholesale kids garments from Delhi's Gandhi Nagar.",
      },
      { property: "og:image", content: images.hero },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trust = [
  { label: "Established", value: "2014" },
  { label: "Age Groups", value: "1–16 Yrs" },
  { label: "Happy Retailers", value: 5000, suffix: "+" },
  { label: "Cities Served", value: "Pan India" },
  { label: "Bulk Orders Delivered", value: 10000, suffix: "+" },
] as const;

const whyChoose = [
  {
    icon: Sparkles,
    title: "Latest Fashion Designs",
    body: "Trend-led collections refreshed each season.",
  },
  { icon: Check, title: "Premium Fabrics", body: "Soft, breathable, and built to last." },
  { icon: Check, title: "Affordable Wholesale Pricing", body: "Direct-from-manufacturer margins." },
  { icon: Truck, title: "Pan India Delivery", body: "Trusted transport partners nationwide." },
  { icon: Clock, title: "Fast Dispatch", body: "Ready-stock and on-time production." },
  { icon: Star, title: "Reliable Support", body: "Retail partners come first, always." },
  { icon: Check, title: "Bulk Manufacturing", body: "Flexible quantities for every retailer." },
  { icon: Check, title: "Trusted Since 2014", body: "A decade of consistent quality." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setActive(true), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, active]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function Home() {
  useReveal();
  const { homeCategories, homeProducts, videos } = Route.useLoaderData();
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [video, setVideo] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-20">
        <div className="container-x mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 pb-16 pt-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:pb-24 lg:pt-20">
            <div className="reveal order-1 lg:col-span-6 lg:self-start lg:pt-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-[0.7rem] tracking-[0.25em] text-brand uppercase">
                <Sparkles className="h-3.5 w-3.5" /> Wholesale · Since 2014
              </div>
              <h1 className="font-serif text-[2.5rem] leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">
                Premium Kids Fashion
                <span className="block whitespace-nowrap text-xl italic text-brand sm:whitespace-normal sm:text-5xl lg:text-[4rem]">for Retailers Across India</span>
              </h1>
              <p className="mt-6 hidden max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:block">
                Trusted wholesale manufacturer delivering trendy boys' shirts, t-shirts and jeans
                for ages 1–16 years. Crafted in Delhi, delivered nationwide.
              </p>
              <div className="mt-9 hidden flex-wrap gap-3 lg:flex">
                <Link to="/products" search={{ category: "" }} className="btn-solid">
                  Explore Collection
                </Link>
                <Link to="/contact" className="btn-outline">
                  Become a Retail Partner
                </Link>
              </div>
            </div>
            <div className="reveal relative order-2 lg:col-span-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-secondary">
                <img
                  src={heroImg}
                  alt="Boys wearing premium DOMEX KIDS fashion"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#8B6B47]/25 via-transparent to-white/10" />
              </div>
              <div className="animate-floaty absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border border-brand/30 md:block" />
              <div className="animate-floaty absolute -bottom-8 -right-4 hidden h-32 w-32 rounded-3xl border border-brand/20 bg-white/40 backdrop-blur-sm md:block" />
              <div className="absolute -bottom-6 left-6 hidden max-w-[220px] rounded-2xl border border-border bg-white/90 p-4 shadow-lg backdrop-blur md:block">
                <div className="text-xs tracking-widest text-brand uppercase">Trusted by</div>
                <div className="mt-1 font-serif text-xl">500+ Retailers</div>
                <div className="text-xs text-muted-foreground">across India</div>
              </div>
            </div>
            <div className="order-3 flex flex-wrap gap-3 lg:hidden">
              <Link to="/products" search={{ category: "" }} className="btn-solid">
                Explore Collection
              </Link>
              <Link to="/contact" className="btn-outline">
                Become a Retail Partner
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-4 gap-px overflow-hidden rounded-3xl border border-border bg-border">
            {[
              { n: 2014, label: "Established", suffix: "" },
              { n: 10, label: "Years Experience", suffix: "+" },
              { n: 28, label: "States Delivered", suffix: "+" },
              { n: 16, label: "Ages Covered (1–16)", suffix: "" },
            ].map((s) => (
              <div key={s.label} className="bg-background p-2 text-center md:p-10">
                <div className="font-serif text-xl text-foreground md:text-5xl">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[0.6rem] tracking-[0.15em] text-muted-foreground uppercase md:text-xs md:tracking-[0.2em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-x mx-auto max-w-7xl py-24 lg:py-32">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <div className="text-xs tracking-[0.3em] text-brand uppercase">Our Story</div>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Crafted in Delhi. Worn across India.
          </h2>
        </div>

        {/* Mobile: image left, timeline right */}
        <div className="flex flex-row gap-4 items-start lg:hidden">
          <div className="w-2/5 shrink-0">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={facilityImg}
                alt="DOMEX KIDS manufacturing facility"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <ol className="space-y-3 border-l border-border pl-3">
              {[
                ["2014", "Company Founded", "DOMEX KIDS begins in Gandhi Nagar."],
                ["2016", "Growth", "First 100+ retail partners onboarded."],
                ["2019", "Retail Expansion", "Reach extended across North India."],
                ["2022", "Pan India Distribution", "Delivering to 28+ states."],
                ["Today", "Manufacturing Excellence", "Trend, quality, scale — together."],
              ].map(([year, title, desc]) => (
                <li key={title} className="relative">
                  <span className="absolute -left-[17px] top-1 h-2 w-2 rounded-full border-2 border-brand bg-background" />
                  <div className="text-[0.55rem] tracking-[0.2em] text-brand uppercase">{year}</div>
                  <div className="font-serif text-sm">{title}</div>
                  <div className="text-[0.6rem] text-muted-foreground">{desc}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <img
                src={facilityImg}
                alt="DOMEX KIDS manufacturing facility"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              />
            </div>
            <div className="absolute -right-4 -top-4 rounded-2xl border border-border bg-white p-5 shadow-lg">
              <div className="font-serif text-3xl text-brand">2014</div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase">Founded</div>
            </div>
          </div>
          <div className="reveal">
            <p className="text-lg leading-relaxed text-foreground/85">
              DOMEX KIDS is one of Delhi's trusted wholesale manufacturers of premium kids garments.
              Established in 2014, we have grown into a reliable name among retailers across India
              by consistently delivering fashionable, high-quality children's clothing at
              competitive wholesale prices.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Based in the renowned garment hub of Gandhi Nagar, Delhi, we specialize in stylish
              clothing for boys aged 1 to 16 years — trendy, durable, comfortable, and affordable.
            </p>

            <ol className="mt-10 space-y-6 border-l border-border pl-6">
              {[
                ["2014", "Company Founded", "DOMEX KIDS begins in Gandhi Nagar."],
                ["2016", "Growth", "First 100+ retail partners onboarded."],
                ["2019", "Retail Expansion", "Reach extended across North India."],
                ["2022", "Pan India Distribution", "Delivering to 28+ states."],
                ["Today", "Manufacturing Excellence", "Trend, quality, scale — together."],
              ].map(([year, title, desc]) => (
                <li key={title} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-brand bg-background" />
                  <div className="text-xs tracking-[0.25em] text-brand uppercase">{year}</div>
                  <div className="font-serif text-xl">{title}</div>
                  <div className="text-sm text-muted-foreground">{desc}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Products / Collection */}
      <section className="container-x mx-auto max-w-7xl pb-24 lg:pb-32">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <div className="text-xs tracking-[0.3em] text-brand uppercase">The Collection</div>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Fashion built for every age.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {homeCategories.map((cat, i) => (
            <Link
              key={cat.id}
              to="/products"
              search={{ category: cat.documentId }}
              className="reveal card-soft group overflow-hidden block"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <article>
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={cat.image || heroImg}
                    alt={cat.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-7">
                  <h3 className="font-serif text-sm md:text-2xl">{cat.name}</h3>
                  <p className="mt-1 hidden text-xs text-muted-foreground md:block md:text-sm">
                    {cat.description || "Explore our collection."}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand link-underline md:mt-5 md:text-sm md:gap-2">
                    View Collection
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="reveal mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-white p-8">
          <div>
            <div className="text-xs tracking-[0.25em] text-brand uppercase">Age Groups</div>
            <div className="mt-2 font-serif text-2xl">1–4 · 5–8 · 9–12 · 13–16 Years</div>
          </div>
          <Link to="/contact" className="btn-outline">
            Request Catalogue
          </Link>
        </div>
      </section>

      {/* Handpicked Featured Products */}
      <section className="bg-cream/50">
        <div className="container-x mx-auto max-w-7xl pb-24 lg:pb-32">
          <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="text-xs tracking-[0.3em] text-brand uppercase">Handpicked</div>
              <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
                Featured Products
              </h2>
            </div>
            <Link to="/products" search={{ category: "" }} className="btn-outline shrink-0">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {homeProducts.map((p, i) => (
              <article
                key={p.id}
                className="reveal group rounded-2xl border border-border bg-white p-3 transition-shadow duration-500 hover:shadow-xl md:p-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-secondary">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 md:mt-6">
                  <div className="text-[0.6rem] tracking-[0.2em] text-brand uppercase md:text-xs">
                    {p.price ? `From ₹${p.price}` : "Ages 1–16"}
                  </div>
                  <h3 className="mt-1 font-serif text-sm md:text-2xl">{p.name}</h3>
                  <p className="mt-1 hidden text-xs text-muted-foreground leading-relaxed md:mt-2 md:block md:text-sm">{p.subText}</p>
                  <button
                    onClick={() => {
                      setQuickView(p);
                      setSelectedImage(0);
                    }}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand link-underline cursor-pointer md:mt-5 md:text-sm md:gap-2"
                  >
                    Shop Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="container-x mx-auto max-w-7xl pb-24 lg:pb-32">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <div className="text-xs tracking-[0.3em] text-brand uppercase">Featured Videos</div>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            See our collection in motion.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {videos.map((v, i) => (
            <button
              key={v.title}
              onClick={() => setVideo(v.videoId)}
              className="reveal group relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black text-left"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <img
                src={`https://img.youtube.com/vi/${v.videoId}/maxresdefault.jpg`}
                alt={v.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-opacity duration-500 group-hover:bg-foreground/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-0.5 h-6 w-6 md:h-8 md:w-8"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 pt-12">
                <h3 className="font-serif text-lg text-background md:text-xl">{v.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Video modal */}
      {video && (
        <div
          className="fixed inset-0 z-[80] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]"
          onClick={() => setVideo(null)}
        >
          <div
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl animate-[fade-up_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video}?autoplay=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      )}

      {/* Facilities */}
      <section className="bg-cream">
        <div className="container-x mx-auto max-w-7xl pb-24 lg:pb-32">
          <div className="reveal mx-auto mb-14 max-w-2xl text-center">
            <div className="text-xs tracking-[0.3em] text-brand uppercase">Our Facilities</div>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              Manufacturing excellence, end to end.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
          <div className="reveal grid grid-cols-3 gap-3 md:gap-4">
            {[
              ["Wholesale Orders", Truck],
              ["Bulk Manufacturing", Sparkles],
              ["Pan India Delivery", MapPin],
              ["Retail Partnerships", Check],
              ["Fast Dispatch", Clock],
              ["Quality Assurance", Star],
            ].map(([label, Icon]) => (
              <div key={label as string} className="card-soft flex flex-col gap-2 p-3 md:gap-3 md:p-6">
                <Icon className="h-4 w-4 text-brand md:h-6 md:w-6" />
                <div className="font-serif text-xs md:text-lg">{label as string}</div>
              </div>
            ))}
          </div>
            <div className="reveal hidden rounded-3xl border border-border bg-white p-8 md:p-10 lg:block">
              <div className="text-xs tracking-[0.25em] text-brand uppercase">Business Process</div>
              <h3 className="mt-2 font-serif text-3xl">How an order flows</h3>
              <ol className="mt-8 space-y-5">
                {[
                  "Enquiry",
                  "Order Confirmation",
                  "Manufacturing",
                  "Quality Check",
                  "Packaging",
                  "Dispatch",
                  "Doorstep Delivery",
                ].map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand font-serif text-sm text-brand">
                      {i + 1}
                    </span>
                    <span className="font-medium text-foreground/90">{step}</span>
                    {i < 6 && <span className="ml-auto text-muted-foreground">→</span>}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="mt-24 md:mt-32">
        <div className="container-x">
          <div className="rounded-3xl overflow-hidden relative">
            <img
              src={images.wholesale}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60" />
            <div className="relative p-10 md:p-20 text-background">
              <div className="reveal">
                <h3 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
                  Ready to grow your retail with premium kids wear?
                </h3>
              </div>
              <div className="reveal" style={{ transitionDelay: "120ms" }}>
                <p className="mt-5 max-w-xl text-background/80">
                  Partner with DOMEX KIDS for reliable wholesale supply, competitive pricing and
                  nationwide delivery.
                </p>
              </div>
              <div className="reveal" style={{ transitionDelay: "220ms" }}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:bg-brand hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/wholesale"
                    className="inline-flex items-center gap-2 rounded-full border border-background/40 text-background px-6 py-3.5 text-sm font-medium hover:bg-background/10 transition"
                  >
                    Wholesale details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick view modal */}
      {quickView && (
        <div
          className="fixed inset-0 z-[70] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]"
          onClick={() => {
            setQuickView(null);
            setSelectedImage(0);
          }}
        >
          <div
            className="bg-background rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[fade-up_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={quickView.gallery[selectedImage] || quickView.image}
                  alt={quickView.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              <div className="p-8 md:p-10 relative">
                <button
                  aria-label="Close"
                  onClick={() => {
                    setQuickView(null);
                    setSelectedImage(0);
                  }}
                  className="absolute top-5 right-5 p-2 rounded-full border hover:bg-secondary"
                >
                  <X size={16} />
                </button>
                <div className="text-xs uppercase tracking-[0.2em] text-brand">
                  {quickView.tagline || "Premium Quality"}
                </div>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl">{quickView.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{quickView.subText}</p>
                {quickView.gallery.length > 0 && (
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {quickView.gallery.map((src, k) => (
                      <button
                        key={k}
                        onClick={() => setSelectedImage(k)}
                        className={`aspect-square rounded-xl overflow-hidden bg-secondary transition-all duration-200 ${
                          selectedImage === k
                            ? "ring-2 ring-brand ring-offset-2"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
                {quickView.description && (
                  <div className="mt-6 text-sm text-muted-foreground whitespace-pre-line">
                    {quickView.description}
                  </div>
                )}
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hii, I am Interested in ${quickView.tagline || "Premium Quality"} ${quickView.name} share more details`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-brand transition-colors"
                >
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Testimonials() {
  const items = [
    {
      q: "The quality and consistency has helped us grow our kids section every season.",
      a: "R. Sharma",
      r: "Retailer, Jaipur",
    },
    {
      q: "On-time dispatch, fair pricing, and designs our customers love.",
      a: "A. Verma",
      r: "Retailer, Lucknow",
    },
    {
      q: "A partnership we've trusted for years. Highly professional team.",
      a: "S. Menon",
      r: "Distributor, Kochi",
    },
    {
      q: "Fabrics feel premium and the fits are spot on for kids.",
      a: "P. Singh",
      r: "Retailer, Amritsar",
    },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section className="container-x mx-auto max-w-7xl pb-24 lg:pb-32">
      <div className="reveal mx-auto mb-14 max-w-2xl text-center">
        <div className="text-xs tracking-[0.3em] text-brand uppercase">Retail Partners</div>
        <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
          Trusted by retailers nationwide.
        </h2>
      </div>
      <div className="reveal mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-10 md:p-14">
          {items.map((t, idx) => (
            <div
              key={t.a}
              className={`transition-all duration-700 ${
                idx === i
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-10 opacity-0"
              }`}
            >
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-snug text-foreground md:text-3xl">
                "{t.q}"
              </blockquote>
              <div className="mt-6">
                <div className="font-medium">{t.a}</div>
                <div className="text-sm text-muted-foreground">{t.r}</div>
              </div>
            </div>
          ))}
          <div className="mt-8 flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-brand" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What products do you manufacture?",
      a: "Shirts, T-shirts, jeans and full seasonal collections for boys aged 1–16 years.",
    },
    {
      q: "Do you accept bulk orders?",
      a: "Yes. Bulk manufacturing and wholesale supply is our core business, with flexible quantity options.",
    },
    {
      q: "What is your delivery network?",
      a: "Pan India delivery through partnerships with leading transport companies.",
    },
    {
      q: "What age groups do you manufacture?",
      a: "We manufacture garments for children aged 1 to 16 years.",
    },
    { q: "Where are you located?", a: "9/7075, Guru Nanak Gali, Gandhi Nagar, Delhi – 110031." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-x mx-auto max-w-7xl pb-24 lg:pb-32">
      <div className="reveal mx-auto mb-14 max-w-2xl text-center">
        <div className="text-xs tracking-[0.3em] text-brand uppercase">Frequently Asked</div>
        <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
          Everything you need to know.
        </h2>
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="divide-y divide-border rounded-2xl border border-border bg-white">
          {faqs.map((f, i) => (
            <div key={f.q} className="reveal px-6 md:px-8">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={open === i}
              >
                <span className="font-serif text-lg md:text-xl">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand transition-transform duration-500 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-500 ${
                  open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 text-muted-foreground">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
