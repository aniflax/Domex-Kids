import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images, site } from "@/lib/site-config";
import { fetchAllCategories, fetchAllProducts } from "@/lib/strapi";
import type { Product, Category } from "@/lib/strapi-types";
import heroImg from "../assets/hero.jpg";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: String(search.category || ""),
  }),
  loader: async () => {
    const [cats, allProducts] = await Promise.all([
      fetchAllCategories().catch(() => [] as Category[]),
      fetchAllProducts().catch(() => [] as Product[]),
    ]);
    return { cats, allProducts };
  },
  head: () => ({
    meta: [
      { title: "Products — DOMEX KIDS Wholesale Kids Wear" },
      {
        name: "description",
        content:
          "Explore boys shirts, t-shirts and jeans — wholesale kids wear collections for ages 1–16 years.",
      },
      { property: "og:title", content: "DOMEX KIDS Products" },
      {
        property: "og:description",
        content: "Wholesale kids wear collections — shirts, t-shirts, jeans.",
      },
      { property: "og:image", content: images.editorial1 },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const { category } = Route.useSearch();
  const { cats, allProducts } = Route.useLoaderData();
  const navigate = useNavigate();
  const [active, setActive] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const filtered = !category
    ? allProducts
    : allProducts.filter((p) => p.categoryDocumentId === category);

  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.28em] text-brand font-medium mb-6">
              Collections
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">
              Kids fashion, wholesale first.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Segmented control */}
      <section className="mt-16 md:mt-10">
        <div className="container-x">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-xl bg-muted p-1.5">
              {[{ documentId: "", name: "All" }, ...cats].map((c) => (
                <button
                  key={c.documentId}
                  onClick={() => navigate({ to: "/products", search: { category: c.documentId } })}
                  className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    category === c.documentId
                      ? "bg-background text-foreground shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {filtered.length === 0 ? (
            <Reveal>
              <p className="text-muted-foreground col-span-2">No products in this category yet.</p>
            </Reveal>
          ) : (
            filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <article
                  className={`hover-lift rounded-3xl overflow-hidden bg-white border border-border ${filtered.length === 1 || (i === 0 && filtered.length % 2 === 1) ? "md:col-span-2" : ""}`}
                >
                  <div
                    className={`zoom-img ${filtered.length === 1 || (i === 0 && filtered.length % 2 === 1) ? "aspect-[16/9]" : "aspect-[5/4]"}`}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7 md:p-10 flex flex-wrap items-end justify-between gap-6">
                    <div>
                      {p.description && (
                        <div className="text-xs uppercase tracking-[0.2em] text-brand">
                          {p.description.split("\n")[0].replace(/^·\s*/, "")}
                        </div>
                      )}
                      <h3 className="mt-2 font-serif text-3xl md:text-4xl">{p.name}</h3>
                      <p className="mt-2 text-muted-foreground max-w-md">{p.subText}</p>
                    </div>
                    <button
                      onClick={() => {
                        setActive(p);
                        setSelectedImage(0);
                      }}
                      className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-brand transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </article>
              </Reveal>
            ))
          )}
        </div>
      </section>

      <section className="mt-28">
        <div className="container-x">
          <SectionHeading eyebrow="Editorial" title="Photographed for the shop floor." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[heroImg, images.editorial2, images.editorial3].map((src, i) => (
              <Reveal key={src} delay={i * 120}>
                <div className="zoom-img rounded-3xl overflow-hidden aspect-[4/5]">
                  <img
                    src={src}
                    alt="Editorial"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-28">
        <div className="container-x rounded-3xl bg-white border border-border p-10 md:p-14 text-center">
          <Reveal>
            <p className="font-serif text-3xl md:text-4xl max-w-2xl mx-auto">
              Wholesale only — pricing shared on inquiry.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-muted-foreground">
              Contact us for line sheets, MOQs and current stock.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick view */}
      {active && (
        <div
          className="fixed inset-0 z-[70] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]"
          onClick={() => {
            setActive(null);
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
                  src={active.gallery[selectedImage] || active.image}
                  alt={active.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              <div className="p-8 md:p-10 relative">
                <button
                  aria-label="Close"
                  onClick={() => {
                    setActive(null);
                    setSelectedImage(0);
                  }}
                  className="absolute top-5 right-5 p-2 rounded-full border hover:bg-secondary"
                >
                  <X size={16} />
                </button>
                <div className="text-xs uppercase tracking-[0.2em] text-brand">
                  {active.tagline || "Premium Quality"}
                </div>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl">{active.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{active.subText}</p>
                {active.gallery.length > 0 && (
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {active.gallery.map((src, k) => (
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
                {active.description && (
                  <div className="mt-6 text-sm text-muted-foreground whitespace-pre-line">
                    {active.description}
                  </div>
                )}
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hii, I am Interested in ${active.tagline || "Premium Quality"} ${active.name} share more details`)}`}
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
