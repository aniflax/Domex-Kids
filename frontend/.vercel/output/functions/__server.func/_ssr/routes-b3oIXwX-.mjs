import { r as __toESM } from "../_runtime.mjs";
import { t as images } from "./site-config-D34R8I9m.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as facility_default } from "./facility-BhNsoHUL.mjs";
import { _ as ChevronDown, a as Star, d as MapPin, h as Clock, i as Truck, n as X, o as Sparkles, v as Check } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as hero_default } from "./hero-rtsKtfDj.mjs";
import { t as Route } from "./routes-D77H7SQ3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-b3oIXwX-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("is-visible");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .12 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => e.isIntersecting && setActive(true), { threshold: .3 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		let raf = 0;
		const start = performance.now();
		const duration = 1800;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setVal(Math.round(eased * to));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [to, active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [val, suffix]
	});
}
function Home() {
	useReveal();
	const { homeCategories, homeProducts, videos } = Route.useLoaderData();
	const [quickView, setQuickView] = (0, import_react.useState)(null);
	const [selectedImage, setSelectedImage] = (0, import_react.useState)(0);
	const [video, setVideo] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative isolate overflow-hidden pt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 pb-16 pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24 lg:pt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal lg:col-span-6 lg:pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-[0.7rem] tracking-[0.25em] text-brand uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Wholesale · Since 2014"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-serif text-[2.5rem] leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]",
								children: ["Premium Kids Fashion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block italic text-brand",
									children: "for Retailers Across India"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
								children: "Trusted wholesale manufacturer delivering trendy boys' shirts, t-shirts and jeans for ages 1–16 years. Crafted in Delhi, delivered nationwide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									search: { category: 0 },
									className: "btn-solid",
									children: "Explore Collection"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "btn-outline",
									children: "Become a Retail Partner"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal relative lg:col-span-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_default,
									alt: "Boys wearing premium DOMEX KIDS fashion",
									className: "h-full w-full object-cover",
									loading: "eager"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#8B6B47]/25 via-transparent to-white/10" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-floaty absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border border-brand/30 md:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-floaty absolute -bottom-8 -right-4 hidden h-32 w-32 rounded-3xl border border-brand/20 bg-white/40 backdrop-blur-sm md:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-6 left-6 hidden max-w-[220px] rounded-2xl border border-border bg-white/90 p-4 shadow-lg backdrop-blur md:block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs tracking-widest text-brand uppercase",
										children: "Trusted by"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-serif text-xl",
										children: "500+ Retailers"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "across India"
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4",
					children: [
						{
							n: 2014,
							label: "Established",
							suffix: ""
						},
						{
							n: 10,
							label: "Years Experience",
							suffix: "+"
						},
						{
							n: 28,
							label: "States Delivered",
							suffix: "+"
						},
						{
							n: 16,
							label: "Ages Covered (1–16)",
							suffix: ""
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-8 text-center md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-4xl text-foreground md:text-5xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.n,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs tracking-[0.2em] text-muted-foreground uppercase",
							children: s.label
						})]
					}, s.label))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x mx-auto max-w-7xl py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal mx-auto mb-14 max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs tracking-[0.3em] text-brand uppercase",
					children: "Our Story"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-4xl leading-tight md:text-5xl",
					children: "Crafted in Delhi. Worn across India."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal relative",
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-foreground/85",
							children: "DOMEX KIDS is one of Delhi's trusted wholesale manufacturers of premium kids garments. Established in 2014, we have grown into a reliable name among retailers across India by consistently delivering fashionable, high-quality children's clothing at competitive wholesale prices."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-relaxed text-muted-foreground",
							children: "Based in the renowned garment hub of Gandhi Nagar, Delhi, we specialize in stylish clothing for boys aged 1 to 16 years — trendy, durable, comfortable, and affordable."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-10 space-y-6 border-l border-border pl-6",
							children: [
								[
									"2014",
									"Company Founded",
									"DOMEX KIDS begins in Gandhi Nagar."
								],
								[
									"2016",
									"Growth",
									"First 100+ retail partners onboarded."
								],
								[
									"2019",
									"Retail Expansion",
									"Reach extended across North India."
								],
								[
									"2022",
									"Pan India Distribution",
									"Delivering to 28+ states."
								],
								[
									"Today",
									"Manufacturing Excellence",
									"Trend, quality, scale — together."
								]
							].map(([year, title, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-brand bg-background" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs tracking-[0.25em] text-brand uppercase",
										children: year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-serif text-xl",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: desc
									})
								]
							}, title))
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x mx-auto max-w-7xl pb-24 lg:pb-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mx-auto mb-14 max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs tracking-[0.3em] text-brand uppercase",
						children: "The Collection"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-4xl leading-tight md:text-5xl",
						children: "Fashion built for every age."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: homeCategories.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						search: { category: cat.id },
						className: "reveal card-soft group overflow-hidden block",
						style: { transitionDelay: `${i * 90}ms` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] overflow-hidden bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cat.image || "/assets/hero-WlTquNs0.jpg",
								alt: cat.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl",
									children: cat.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: cat.description || "Explore our collection."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand link-underline",
									children: "View Collection"
								})
							]
						})] })
					}, cat.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-white p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs tracking-[0.25em] text-brand uppercase",
						children: "Age Groups"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 font-serif text-2xl",
						children: "1–4 · 5–8 · 9–12 · 13–16 Years"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn-outline",
						children: "Request Catalogue"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x mx-auto max-w-7xl py-24 lg:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mb-14 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs tracking-[0.3em] text-brand uppercase",
							children: "Handpicked"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-serif text-4xl leading-tight md:text-5xl",
							children: "Featured Products"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						search: { category: 0 },
						className: "btn-outline shrink-0",
						children: "View All"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 lg:grid-cols-3",
					children: homeProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "reveal group rounded-2xl border border-border bg-white p-6 transition-shadow duration-500 hover:shadow-xl",
						style: { transitionDelay: `${i * 100}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] overflow-hidden rounded-xl bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs tracking-[0.2em] text-brand uppercase",
									children: p.price ? `From ₹${p.price}` : "Ages 1–16"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-serif text-2xl",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: p.subText
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setQuickView(p);
										setSelectedImage(0);
									},
									className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand link-underline cursor-pointer",
									children: "Shop Now"
								})
							]
						})]
					}, p.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x mx-auto max-w-7xl py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal mx-auto mb-14 max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs tracking-[0.3em] text-brand uppercase",
					children: "Featured Videos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-4xl leading-tight md:text-5xl",
					children: "See our collection in motion."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: videos.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setVideo(v.videoId),
					className: "reveal group relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black text-left",
					style: { transitionDelay: `${i * 120}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `https://img.youtube.com/vi/${v.videoId}/maxresdefault.jpg`,
							alt: v.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-foreground/20 transition-opacity duration-500 group-hover:bg-foreground/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									fill: "currentColor",
									className: "ml-0.5 h-6 w-6 md:h-8 md:w-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l11-7z" })
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 pt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg text-background md:text-xl",
								children: v.title
							})
						})
					]
				}, v.title))
			})]
		}),
		video && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[80] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]",
			onClick: () => setVideo(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl animate-[fade-up_0.4s_ease-out]",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: `https://www.youtube.com/embed/${video}?autoplay=1`,
					title: "YouTube video",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: true,
					className: "h-full w-full"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x mx-auto max-w-7xl py-24 lg:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mx-auto mb-14 max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs tracking-[0.3em] text-brand uppercase",
						children: "Our Facilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-3xl leading-tight md:text-4xl",
						children: "Manufacturing excellence, end to end."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reveal grid grid-cols-2 gap-4",
						children: [
							["Wholesale Orders", Truck],
							["Bulk Manufacturing", Sparkles],
							["Pan India Delivery", MapPin],
							["Retail Partnerships", Check],
							["Fast Dispatch", Clock],
							["Quality Assurance", Star]
						].map(([label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-soft flex flex-col gap-3 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-lg",
								children: label
							})]
						}, label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal rounded-3xl border border-border bg-white p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs tracking-[0.25em] text-brand uppercase",
								children: "Business Process"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-serif text-3xl",
								children: "How an order flows"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 space-y-5",
								children: [
									"Enquiry",
									"Order Confirmation",
									"Manufacturing",
									"Quality Check",
									"Packaging",
									"Dispatch",
									"Doorstep Delivery"
								].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand font-serif text-sm text-brand",
											children: i + 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-foreground/90",
											children: step
										}),
										i < 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-auto text-muted-foreground",
											children: "→"
										})
									]
								}, step))
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-28 md:mt-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl overflow-hidden relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images.wholesale,
							alt: "",
							className: "absolute inset-0 w-full h-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-foreground/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative p-10 md:p-20 text-background",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "reveal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl",
										children: "Ready to grow your retail with premium kids wear?"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "reveal",
									style: { transitionDelay: "120ms" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-xl text-background/80",
										children: "Partner with DOMEX KIDS for reliable wholesale supply, competitive pricing and nationwide delivery."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "reveal",
									style: { transitionDelay: "220ms" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											className: "inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:bg-brand hover:text-white transition-colors",
											children: "Contact Us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/wholesale",
											className: "inline-flex items-center gap-2 rounded-full border border-background/40 text-background px-6 py-3.5 text-sm font-medium hover:bg-background/10 transition",
											children: "Wholesale details"
										})]
									})
								})
							]
						})
					]
				})
			})
		}),
		quickView && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[70] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]",
			onClick: () => {
				setQuickView(null);
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
							src: quickView.gallery[selectedImage] || quickView.image,
							alt: quickView.name,
							className: "w-full h-full object-cover transition-opacity duration-300"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 md:p-10 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Close",
								onClick: () => {
									setQuickView(null);
									setSelectedImage(0);
								},
								className: "absolute top-5 right-5 p-2 rounded-full border hover:bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-brand",
								children: quickView.tagline || "Premium Quality"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-serif text-3xl md:text-4xl",
								children: quickView.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground leading-relaxed",
								children: quickView.subText
							}),
							quickView.gallery.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-3 gap-2",
								children: quickView.gallery.map((src, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSelectedImage(k),
									className: `aspect-square rounded-xl overflow-hidden bg-secondary transition-all duration-200 ${selectedImage === k ? "ring-2 ring-brand ring-offset-2" : "opacity-70 hover:opacity-100"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src,
										alt: "",
										className: "w-full h-full object-cover"
									})
								}, k))
							}),
							quickView.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 text-sm text-muted-foreground whitespace-pre-line",
								children: quickView.description
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
function Testimonials() {
	const items = [
		{
			q: "The quality and consistency has helped us grow our kids section every season.",
			a: "R. Sharma",
			r: "Retailer, Jaipur"
		},
		{
			q: "On-time dispatch, fair pricing, and designs our customers love.",
			a: "A. Verma",
			r: "Retailer, Lucknow"
		},
		{
			q: "A partnership we've trusted for years. Highly professional team.",
			a: "S. Menon",
			r: "Distributor, Kochi"
		},
		{
			q: "Fabrics feel premium and the fits are spot on for kids.",
			a: "P. Singh",
			r: "Retailer, Amritsar"
		}
	];
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((p) => (p + 1) % items.length), 5e3);
		return () => clearInterval(t);
	}, [items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x mx-auto max-w-7xl py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reveal mx-auto mb-14 max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs tracking-[0.3em] text-brand uppercase",
				children: "Retail Partners"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-serif text-4xl leading-tight md:text-5xl",
				children: "Trusted by retailers nationwide."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "reveal mx-auto max-w-4xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] border border-border bg-white p-10 md:p-14",
				children: [items.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `transition-all duration-700 ${idx === i ? "relative opacity-100" : "pointer-events-none absolute inset-10 opacity-0"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 text-brand",
							children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-6 font-serif text-2xl leading-snug text-foreground md:text-3xl",
							children: [
								"\"",
								t.q,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium",
								children: t.a
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: t.r
							})]
						})
					]
				}, t.a)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex gap-2",
					children: items.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Show testimonial ${idx + 1}`,
						onClick: () => setI(idx),
						className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-brand" : "w-2 bg-border"}`
					}, idx))
				})]
			})
		})]
	});
}
function FAQ() {
	const faqs = [
		{
			q: "What products do you manufacture?",
			a: "Shirts, T-shirts, jeans and full seasonal collections for boys aged 1–16 years."
		},
		{
			q: "Do you accept bulk orders?",
			a: "Yes. Bulk manufacturing and wholesale supply is our core business, with flexible quantity options."
		},
		{
			q: "What is your delivery network?",
			a: "Pan India delivery through partnerships with leading transport companies."
		},
		{
			q: "What age groups do you manufacture?",
			a: "We manufacture garments for children aged 1 to 16 years."
		},
		{
			q: "Where are you located?",
			a: "9/7075, Guru Nanak Gali, Gandhi Nagar, Delhi – 110031."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x mx-auto max-w-7xl py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reveal mx-auto mb-14 max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs tracking-[0.3em] text-brand uppercase",
				children: "Frequently Asked"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-serif text-4xl leading-tight md:text-5xl",
				children: "Everything you need to know."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border rounded-2xl border border-border bg-white",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal px-6 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(open === i ? null : i),
						className: "flex w-full items-center justify-between gap-6 py-6 text-left",
						"aria-expanded": open === i,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-lg md:text-xl",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-brand transition-transform duration-500 ${open === i ? "rotate-180" : ""}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid overflow-hidden transition-all duration-500 ${open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-0 text-muted-foreground",
							children: f.a
						})
					})]
				}, f.q))
			})
		})]
	});
}
//#endregion
export { Home as component };
