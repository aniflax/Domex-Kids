import { r as __toESM } from "../_runtime.mjs";
import { r as site } from "./site-config-D34R8I9m.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Css76e9Y.mjs";
import { d as MapPin, f as Mail, g as CircleCheck, h as Clock, l as Phone, s as Send } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CwwuETLj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(1, "Please enter your name").max(80),
	business: stringType().trim().min(1, "Business name required").max(120),
	phone: stringType().trim().min(7, "Enter a valid phone").max(20),
	email: stringType().trim().email("Enter a valid email").max(120),
	message: stringType().trim().min(5, "Add a short message").max(1e3)
});
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = Object.fromEntries(fd);
		const parsed = schema.safeParse(data);
		if (!parsed.success) {
			const errs = {};
			parsed.error.issues.forEach((i) => {
				errs[i.path[0]] = i.message;
			});
			setErrors(errs);
			return;
		}
		setErrors({});
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-32 md:pt-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.28em] text-brand font-medium mb-6",
					children: "Contact"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-5xl md:text-7xl leading-[1.02] max-w-3xl",
						children: "Let's dress the next season together."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 180,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-muted-foreground text-lg",
						children: "Send a message or reach us directly — our team responds within one business day."
					})
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-16 md:mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid lg:grid-cols-12 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit,
					className: "rounded-3xl bg-white border border-border p-8 md:p-10",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-14 w-14 rounded-full bg-secondary flex items-center justify-center text-success",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 26 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-serif text-2xl",
								children: "Message received."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground max-w-md",
								children: "Thank you. We'll get back to you within one business day at the email or phone you shared."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								error: errors.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Business Name",
								name: "business",
								error: errors.business
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid md:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									name: "phone",
									type: "tel",
									error: errors.phone
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									name: "email",
									type: "email",
									error: errors.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Message",
								name: "message",
								as: "textarea",
								error: errors.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-brand transition-colors",
								children: ["Send message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 })]
							})
						]
					})
				}) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-white border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-brand",
								children: "Business Details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 font-serif text-2xl",
								children: "DOMEX KIDS WEAR"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 space-y-5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											size: 18,
											className: "mt-0.5 shrink-0 text-brand"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: site.address.line1 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: site.address.line2 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												site.address.city,
												" – ",
												site.address.postal
											] })
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											size: 18,
											className: "mt-0.5 shrink-0 text-brand"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-1",
											children: site.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `tel:${p}`,
												className: "block link-underline",
												children: p
											}, p))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											size: 18,
											className: "mt-0.5 shrink-0 text-brand"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${site.email}`,
											className: "link-underline break-all",
											children: site.email
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
											size: 18,
											className: "mt-0.5 shrink-0 text-brand"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Tuesday – Sunday" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: "9:00 AM – 6:00 PM"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: "Monday Closed"
											})
										] })]
									})
								]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.mapLinkUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "block rounded-3xl overflow-hidden border border-border hover-lift",
						"aria-label": "Open location in Google Maps",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "DOMEX KIDS location",
							src: site.mapEmbedUrl,
							className: "w-full h-64 pointer-events-none",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})
				})]
			})]
		})
	})] });
}
function Field({ label, name, type = "text", as, error }) {
	const base = "w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
				children: label
			}),
			as === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				name,
				rows: 5,
				className: `mt-2 ${base}`
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name,
				type,
				className: `mt-2 ${base}`
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 block text-xs text-destructive",
				children: error
			})
		]
	});
}
//#endregion
export { Contact as component };
