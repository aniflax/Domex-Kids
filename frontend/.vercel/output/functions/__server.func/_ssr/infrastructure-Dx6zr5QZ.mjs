import { t as images } from "./site-config-D34R8I9m.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Css76e9Y.mjs";
import { t as SectionHeading } from "./SectionHeading-CwEHeCBk.mjs";
import { t as facility_default } from "./facility-BhNsoHUL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/infrastructure-Dx6zr5QZ.js
var import_jsx_runtime = require_jsx_runtime();
var stages = [
	{
		n: "01",
		t: "Production",
		d: "Cutting, stitching and finishing at scale — with the finish of premium retail.",
		img: facility_default
	},
	{
		n: "02",
		t: "Quality Checking",
		d: "Every piece inspected for fabric, fit and finish before it moves on.",
		img: images.factory2
	},
	{
		n: "03",
		t: "Packaging",
		d: "Retail-ready packaging that protects garments through long journeys.",
		img: images.factory3
	},
	{
		n: "04",
		t: "Dispatch",
		d: "Batched, labelled and prepared for onward transport within hours.",
		img: images.factory4
	},
	{
		n: "05",
		t: "Transportation",
		d: "Pan India delivery via trusted transport partners.",
		img: images.factory5
	}
];
function Infrastructure() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-32 md:pt-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.28em] text-brand font-medium mb-6",
						children: "Infrastructure"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-5xl md:text-7xl leading-[1.02] max-w-3xl",
							children: "Where craft meets scale."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 180,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-muted-foreground text-lg",
							children: "A closer look at the facility, people and systems behind every DOMEX KIDS garment."
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-16 md:mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x space-y-8 md:space-y-14",
				children: stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `grid md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "zoom-img rounded-3xl overflow-hidden aspect-[16/10]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.img,
									alt: s.t,
									className: "w-full h-full object-cover",
									loading: "lazy"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-brand font-serif text-xl",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-3xl md:text-4xl",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted-foreground leading-relaxed",
									children: s.d
								})
							]
						})]
					})
				}, s.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "At a glance",
					title: "A facility built for consistency.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-5",
					children: [
						{
							l: "In-house production",
							v: "Yes"
						},
						{
							l: "Quality checks",
							v: "100%"
						},
						{
							l: "Dispatch time",
							v: "24–72h"
						},
						{
							l: "Reach",
							v: "Pan India"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-white border border-border p-7 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-3xl",
								children: s.v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground",
								children: s.l
							})]
						})
					}, s.l))
				})]
			})
		})
	] });
}
//#endregion
export { Infrastructure as component };
