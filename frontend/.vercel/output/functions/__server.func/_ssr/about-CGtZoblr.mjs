import { r as __toESM } from "../_runtime.mjs";
import { r as site } from "./site-config-D34R8I9m.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Css76e9Y.mjs";
import { t as SectionHeading } from "./SectionHeading-CwEHeCBk.mjs";
import { t as facility_default } from "./facility-BhNsoHUL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CGtZoblr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ to, suffix = "", duration = 1600 }) {
	const ref = (0, import_react.useRef)(null);
	const [val, setVal] = (0, import_react.useState)(0);
	const [started, setStarted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting && !started) {
				setStarted(true);
				const t0 = performance.now();
				const step = (now) => {
					const p = Math.min(1, (now - t0) / duration);
					const eased = 1 - Math.pow(1 - p, 3);
					setVal(Math.round(eased * to));
					if (p < 1) requestAnimationFrame(step);
				};
				requestAnimationFrame(step);
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [
		to,
		duration,
		started
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [val.toLocaleString(), suffix]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x mx-auto max-w-7xl pt-32 md:pt-40 pb-24 lg:pb-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-14 max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs tracking-[0.3em] text-brand uppercase",
					children: "Our Story"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-4xl leading-tight md:text-5xl",
					children: "Crafted in Delhi. Worn across India."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] w-full overflow-hidden rounded-[2rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: facility_default,
							alt: "DOMEX KIDS manufacturing facility",
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -right-4 -top-4 hidden rounded-2xl border border-border bg-white p-5 shadow-lg md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-3xl text-brand",
							children: "2014"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs tracking-widest text-muted-foreground uppercase",
							children: "Founded"
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed text-foreground/85",
							children: [
								"Established in ",
								site.founded,
								", ",
								site.name,
								" has grown into one of Delhi's most trusted wholesale manufacturers of premium kids wear. From our workshop in Gandhi Nagar — India's largest textile market — we design and manufacture stylish, comfortable and affordable garments for children aged 1 to 16 years."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-relaxed text-muted-foreground",
							children: "Our collections combine modern fashion trends with durable fabrics, ensuring every piece offers comfort, quality and value. With an efficient nationwide logistics network and partnerships with leading transport companies, we deliver reliably to retailers across the country."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground font-medium",
							children: "At DOMEX KIDS, we believe every retailer deserves access to premium-quality kids fashion at competitive wholesale prices."
						})
					]
				}) })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl bg-white border border-border p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-10",
					children: [
						{
							l: "Years of craft",
							v: 11,
							s: "+"
						},
						{
							l: "Retail partners",
							v: 5e3,
							s: "+"
						},
						{
							l: "Bulk orders",
							v: 1e4,
							s: "+"
						},
						{
							l: "Cities served",
							v: 200,
							s: "+"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-4xl md:text-5xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.v,
								suffix: s.s
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: s.l
						})] })
					}, s.l))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid lg:grid-cols-2 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-white border border-border p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.2em] text-brand",
							children: "Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-serif text-3xl",
							children: "Fashion that fits every childhood."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: "Manufacture premium-quality kids garments at wholesale prices that empower retailers everywhere to serve their communities better."
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-white border border-border p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-brand",
								children: "Vision"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-serif text-3xl",
								children: "India's most trusted wholesale partner."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground leading-relaxed",
								children: "Build long-term partnerships with retailers while consistently raising the bar for design, comfort and value in kids fashion."
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "What we stand for",
					title: "Values that shape every stitch."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid md:grid-cols-3 gap-6",
					children: [
						{
							t: "Craft",
							d: "Detail and finish that reflect a decade of experience."
						},
						{
							t: "Care",
							d: "For the children who wear us and the retailers who trust us."
						},
						{
							t: "Consistency",
							d: "Reliable quality, pricing and delivery — every season."
						}
					].map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hover-lift rounded-3xl bg-white border border-border p-8 h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-2xl",
								children: v.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground leading-relaxed",
								children: v.d
							})]
						})
					}, v.t))
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
