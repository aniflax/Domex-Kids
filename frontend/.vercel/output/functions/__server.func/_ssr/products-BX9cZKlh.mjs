import { r as __toESM } from "../_runtime.mjs";
import { t as images } from "./site-config-D34R8I9m.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Css76e9Y.mjs";
import { t as SectionHeading } from "./SectionHeading-CwEHeCBk.mjs";
import { n as X } from "../_libs/lucide-react.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./products-DI5y9428.mjs";
import { t as hero_default } from "./hero-rtsKtfDj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-BX9cZKlh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Products() {
	const { category } = Route.useSearch();
	const { cats, allProducts } = Route.useLoaderData();
	const navigate = useNavigate();
	const [active, setActive] = (0, import_react.useState)(null);
	const [selectedImage, setSelectedImage] = (0, import_react.useState)(0);
	const filtered = category === 0 ? allProducts : allProducts.filter((p) => p.categoryId === category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-32 md:pt-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.28em] text-brand font-medium mb-6",
					children: "Collections"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-5xl md:text-7xl leading-[1.02]",
						children: "Kids fashion, wholesale first."
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-16 md:mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex items-center gap-1.5 rounded-xl bg-muted p-1.5",
					children: [{
						id: 0,
						name: "All"
					}, ...cats].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => navigate({
							to: "/products",
							search: { category: c.id }
						}),
						className: `rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${category === c.id ? "bg-background text-foreground shadow" : "text-muted-foreground hover:text-foreground"}`,
						children: c.name
					}, c.id))
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-10 md:mt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid md:grid-cols-2 gap-6",
				children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground col-span-2",
					children: "No products in this category yet."
				}) }) : filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `hover-lift rounded-3xl overflow-hidden bg-white border border-border ${filtered.length === 1 || i === 0 && filtered.length % 2 === 1 ? "md:col-span-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `zoom-img ${filtered.length === 1 || i === 0 && filtered.length % 2 === 1 ? "aspect-[16/9]" : "aspect-[5/4]"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								className: "w-full h-full object-cover",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-7 md:p-10 flex flex-wrap items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								p.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.2em] text-brand",
									children: p.description.split("\n")[0].replace(/^·\s*/, "")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-3xl md:text-4xl",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted-foreground max-w-md",
									children: p.subText
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setActive(p);
									setSelectedImage(0);
								},
								className: "group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-brand transition-colors",
								children: "Quick View"
							})]
						})]
					})
				}, p.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Editorial",
					title: "Photographed for the shop floor."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid md:grid-cols-3 gap-6",
					children: [
						hero_default,
						images.editorial2,
						images.editorial3
					].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "zoom-img rounded-3xl overflow-hidden aspect-[4/5]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "Editorial",
								className: "w-full h-full object-cover",
								loading: "lazy"
							})
						})
					}, src))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x rounded-3xl bg-white border border-border p-10 md:p-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-3xl md:text-4xl max-w-2xl mx-auto",
					children: "Wholesale only — pricing shared on inquiry."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Contact us for line sheets, MOQs and current stock."
					})
				})]
			})
		}),
		active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[70] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]",
			onClick: () => {
				setActive(null);
				setSelectedImage(0);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-background rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[fade-up_0.4s_ease-out]",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square md:aspect-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: active.gallery[selectedImage] || active.image,
							alt: active.name,
							className: "w-full h-full object-cover transition-opacity duration-300"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 md:p-10 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Close",
								onClick: () => {
									setActive(null);
									setSelectedImage(0);
								},
								className: "absolute top-5 right-5 p-2 rounded-full border hover:bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-brand",
								children: active.tagline || "Premium Quality"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-serif text-3xl md:text-4xl",
								children: active.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground leading-relaxed",
								children: active.subText
							}),
							active.gallery.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-3 gap-2",
								children: active.gallery.map((src, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSelectedImage(k),
									className: `aspect-square rounded-xl overflow-hidden bg-secondary transition-all duration-200 ${selectedImage === k ? "ring-2 ring-brand ring-offset-2" : "opacity-70 hover:opacity-100"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src,
										alt: "",
										className: "w-full h-full object-cover"
									})
								}, k))
							}),
							active.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 text-sm text-muted-foreground whitespace-pre-line",
								children: active.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/contact",
								className: "mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-brand transition-colors",
								children: "Request line sheet"
							})
						]
					})]
				})
			})
		})
	] });
}
//#endregion
export { Products as component };
