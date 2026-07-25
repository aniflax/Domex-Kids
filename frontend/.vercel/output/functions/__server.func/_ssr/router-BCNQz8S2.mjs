import { r as __toESM } from "../_runtime.mjs";
import { n as navLinks, r as site, t as images } from "./site-config-D34R8I9m.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { b as ArrowUp, d as MapPin, f as Mail, l as Phone, n as X, p as Instagram, t as Youtube, u as Menu } from "../_libs/lucide-react.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "./products-DI5y9428.mjs";
import { t as Route$8 } from "./routes-D77H7SQ3.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BCNQz8S2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BJOCeMZS.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-background/85 shadow-[0_1px_0_var(--border)] backdrop-blur-md" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto flex h-20 max-w-7xl items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-2xl font-semibold tracking-wider",
						children: "DOMEX"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.6rem] tracking-[0.35em] text-brand",
						children: "KIDS"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "link-underline text-[0.78rem] font-medium tracking-wider uppercase text-foreground/80 hover:text-foreground",
						activeOptions: { exact: l.to === "/" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn-outline hidden md:inline-flex",
						children: "Enquire"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Open menu",
						onClick: () => setOpen(true),
						className: "grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-foreground/20 backdrop-blur-sm",
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background p-8 shadow-2xl transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-xl",
							children: "DOMEX KIDS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close menu",
							onClick: () => setOpen(false),
							className: "grid h-10 w-10 place-items-center rounded-full border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-10 flex flex-col gap-5",
						children: navLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							onClick: () => setOpen(false),
							className: "font-serif text-2xl text-foreground/85 transition-colors hover:text-brand",
							style: { transitionDelay: `${i * 30}ms` },
							children: l.label
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "btn-solid mt-10 w-full",
						children: "Send Enquiry"
					})
				]
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 bg-white border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl",
						children: site.logoText
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs",
						children: [
							"Delhi-based wholesale manufacturer of premium kids wear. Serving retailers across India with trendy, comfortable and affordable garments since ",
							site.founded,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.social.instagram,
							target: "_blank",
							rel: "noreferrer",
							className: "p-2 rounded-full border hover:bg-foreground hover:text-background transition-colors",
							"aria-label": "Instagram",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 16 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.social.youtube,
							target: "_blank",
							rel: "noreferrer",
							className: "p-2 rounded-full border hover:bg-foreground hover:text-background transition-colors",
							"aria-label": "YouTube",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { size: 16 })
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							search: { category: "all" },
							className: "link-underline",
							children: "Products"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/wholesale",
							className: "link-underline",
							children: "Wholesale"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/infrastructure",
							className: "link-underline",
							children: "Infrastructure"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/founder",
							className: "link-underline",
							children: "Founder"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "link-underline",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Reach us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 16,
								className: "mt-0.5 shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								site.address.line1,
								", ",
								site.address.line2,
								", ",
								site.address.city,
								" –",
								" ",
								site.address.postal
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 16,
								className: "mt-0.5 shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.phones.join(" · ") })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 16,
								className: "mt-0.5 shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "link-underline",
								children: site.email
							})]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
						children: "Visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.mapLinkUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-5 block rounded-2xl overflow-hidden border border-border hover-lift",
						"aria-label": "Open Google Maps",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "DOMEX KIDS location",
							src: site.mapEmbedUrl,
							className: "w-full h-40 pointer-events-none",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: site.hours
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" DOMEX KIDS. All Rights Reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Crafted in Delhi, India." })]
			})
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/${site.whatsapp}`,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-20 right-6 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform",
		style: {
			height: 52,
			width: 52
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .02 5.38.02 12a11.9 11.9 0 0 0 1.64 6.02L0 24l6.16-1.61A11.94 11.94 0 0 0 12.02 24C18.63 24 24 18.63 24 12c0-3.2-1.25-6.21-3.48-8.52ZM12.02 21.9a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.66.96.98-3.56-.24-.37A9.9 9.9 0 1 1 12.02 21.9Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.34.22-.64.07a8.16 8.16 0 0 1-2.4-1.48 9.1 9.1 0 0 1-1.68-2.09c-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35Z" })
		})
	});
}
function BackToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShow(window.scrollY > 500);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Back to top",
		className: `fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-border bg-background shadow-lg transition-all duration-500 hover:bg-brand hover:text-white ${show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
	});
}
function SocialBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-full border border-border bg-background/80 p-2.5 shadow-sm backdrop-blur-md md:flex",
		children: [{
			href: site.social.youtube,
			icon: Youtube,
			label: "YouTube"
		}, {
			href: site.social.instagram,
			icon: Instagram,
			label: "Instagram"
		}].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: l.href,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": l.label,
			className: "flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-brand hover:text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { size: 16 })
		}, l.label))
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-8xl text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-medium",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-accent",
						children: "Back to home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please try again or return home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-accent transition",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "DOMEX KIDS — Premium Wholesale Kids Wear Manufacturer, Delhi" },
			{
				name: "description",
				content: "DOMEX KIDS is a trusted Delhi-based wholesale manufacturer of premium boys' shirts, t-shirts and jeans (ages 1–16). Nationwide delivery since 2014."
			},
			{
				name: "author",
				content: "DOMEX KIDS"
			},
			{
				name: "theme-color",
				content: "#F8F7F4"
			},
			{
				property: "og:site_name",
				content: "DOMEX KIDS"
			},
			{
				property: "og:title",
				content: "DOMEX KIDS — Premium Wholesale Kids Wear"
			},
			{
				property: "og:description",
				content: "Trusted wholesale manufacturer of premium boys' fashion for retailers across India since 2014."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "DOMEX KIDS",
				description: "Wholesale kids wear manufacturer based in Delhi, India.",
				address: {
					"@type": "PostalAddress",
					streetAddress: "9/7075, Guru Nanak Gali, Gandhi Nagar",
					addressLocality: "Delhi",
					postalCode: "110031",
					addressCountry: "IN"
				},
				telephone: [
					"+91-9899977787",
					"+91-9899977784",
					"+91-9625248588"
				],
				email: "creativebusinesstalk@gmail.com",
				foundingDate: "2014"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
		]
	});
}
var $$splitComponentImporter$4 = () => import("./about-CGtZoblr.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — DOMEX KIDS" },
			{
				name: "description",
				content: "DOMEX KIDS is a Delhi-based wholesale kids wear manufacturer serving 5,000+ retailers across India since 2014."
			},
			{
				property: "og:title",
				content: "About DOMEX KIDS"
			},
			{
				property: "og:description",
				content: "Delhi-based wholesale kids wear manufacturer since 2014."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-CwwuETLj.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — DOMEX KIDS" },
			{
				name: "description",
				content: "Contact DOMEX KIDS at Gandhi Nagar, Delhi. Reach out for wholesale enquiries, catalogues and dealer partnerships."
			},
			{
				property: "og:title",
				content: "Contact — DOMEX KIDS"
			},
			{
				property: "og:description",
				content: "Reach the DOMEX KIDS team for wholesale enquiries and partnerships."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./founder-4-ZjoKXL.mjs");
var Route$3 = createFileRoute("/founder")({
	head: () => ({
		meta: [
			{ title: "Founder — Himanshu Aggarwal · DOMEX KIDS" },
			{
				name: "description",
				content: "Meet Himanshu Aggarwal, founder of DOMEX KIDS — the software engineer turned entrepreneur behind India's trusted wholesale kids wear brand."
			},
			{
				property: "og:title",
				content: "Himanshu Aggarwal — Founder, DOMEX KIDS"
			},
			{
				property: "og:description",
				content: "The story behind DOMEX KIDS."
			},
			{
				property: "og:image",
				content: images.founder
			},
			{
				property: "og:url",
				content: "/founder"
			}
		],
		links: [{
			rel: "canonical",
			href: "/founder"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./infrastructure-Dx6zr5QZ.mjs");
var Route$2 = createFileRoute("/infrastructure")({
	head: () => ({
		meta: [
			{ title: "Infrastructure — DOMEX KIDS Manufacturing" },
			{
				name: "description",
				content: "Inside the DOMEX KIDS facility: production, quality checking, packaging, dispatch and pan-India transportation."
			},
			{
				property: "og:title",
				content: "Infrastructure — DOMEX KIDS"
			},
			{
				property: "og:description",
				content: "A closer look at our manufacturing and logistics operations."
			},
			{
				property: "og:image",
				content: images.factory1
			},
			{
				property: "og:url",
				content: "/infrastructure"
			}
		],
		links: [{
			rel: "canonical",
			href: "/infrastructure"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var BASE_URL = "";
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/products",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/founder",
				changefreq: "yearly",
				priority: "0.6"
			},
			{
				path: "/wholesale",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/infrastructure",
				changefreq: "yearly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "yearly",
				priority: "0.7"
			}
		].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("./wholesale-BbW2UEhU.mjs");
var Route = createFileRoute("/wholesale")({
	head: () => ({
		meta: [
			{ title: "Wholesale — DOMEX KIDS" },
			{
				name: "description",
				content: "Wholesale solutions for retailers: bulk orders, flexible MOQs, competitive pricing and pan-India delivery from DOMEX KIDS."
			},
			{
				property: "og:title",
				content: "Wholesale — DOMEX KIDS"
			},
			{
				property: "og:description",
				content: "Bulk manufacturing and wholesale supply of premium kids garments across India."
			},
			{
				property: "og:image",
				content: images.wholesale
			},
			{
				property: "og:url",
				content: "/wholesale"
			}
		],
		links: [{
			rel: "canonical",
			href: "/wholesale"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	FounderRoute: Route$3.update({
		id: "/founder",
		path: "/founder",
		getParentRoute: () => Route$6
	}),
	InfrastructureRoute: Route$2.update({
		id: "/infrastructure",
		path: "/infrastructure",
		getParentRoute: () => Route$6
	}),
	ProductsRoute: Route$7.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$6
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$6
	}),
	WholesaleRoute: Route.update({
		id: "/wholesale",
		path: "/wholesale",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient({ defaultOptions: { queries: {
			staleTime: 300 * 1e3,
			retry: 1
		} } }) },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
