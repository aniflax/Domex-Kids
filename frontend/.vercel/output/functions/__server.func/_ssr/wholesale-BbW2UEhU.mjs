import { t as images } from "./site-config-D34R8I9m.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Css76e9Y.mjs";
import { t as SectionHeading } from "./SectionHeading-CwEHeCBk.mjs";
import { c as Scale, h as Clock, i as Truck, m as Handshake, r as Warehouse, y as Boxes } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wholesale-BbW2UEhU.js
var import_jsx_runtime = require_jsx_runtime();
var facilities = [
	{
		icon: Boxes,
		t: "Bulk Orders",
		d: "Volume production capacity for large retail networks."
	},
	{
		icon: Warehouse,
		t: "Wholesale Supply",
		d: "Ready-stock and made-to-order collections."
	},
	{
		icon: Clock,
		t: "Fast Dispatch",
		d: "Turnaround measured in days, not weeks."
	},
	{
		icon: Truck,
		t: "Pan India Delivery",
		d: "Trusted transport partners nationwide."
	},
	{
		icon: Handshake,
		t: "Retail Partner Support",
		d: "Dedicated team through every order."
	},
	{
		icon: Scale,
		t: "Flexible Quantities",
		d: "MOQs that work for growing retailers."
	}
];
function Wholesale() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-24 md:pt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl overflow-hidden relative aspect-[16/9] md:aspect-[21/9]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images.wholesale,
							alt: "Wholesale operations",
							className: "absolute inset-0 w-full h-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-foreground/55" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-full flex flex-col justify-end p-8 md:p-16 text-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.28em] text-background/80 mb-4",
								children: "Wholesale"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] max-w-3xl",
									children: "Wholesale Solutions for Retailers."
								})
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-16 md:mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid lg:grid-cols-12 gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Built for retail. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "Priced for growth."
						})] }),
						eyebrow: "Overview"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 space-y-5 text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "DOMEX KIDS specializes in wholesale manufacturing and bulk supply of premium kids garments across India. Whether you're a retail store, distributor or reseller, we offer competitive pricing, reliable production and timely delivery." }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From line sheets to logistics, our team makes it easy to stock your shop floor with modern, well-made pieces that sell." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "mt-4 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-brand transition-colors",
								children: "Become a dealer"
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Facilities",
					title: "Everything you need to stock with confidence."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
					children: facilities.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hover-lift h-full rounded-3xl bg-white border border-border p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-11 w-11 rounded-xl bg-secondary flex items-center justify-center text-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { size: 20 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 font-medium text-lg",
									children: f.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: f.d
								})
							]
						})
					}, f.t))
				})]
			})
		})
	] });
}
//#endregion
export { Wholesale as component };
