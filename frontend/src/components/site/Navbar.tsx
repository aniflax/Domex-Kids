import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 shadow-[0_1px_0_var(--border)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold tracking-wider">
            DOMEX
          </span>
          <span className="text-[0.6rem] tracking-[0.35em] text-brand">
            KIDS
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-[0.78rem] font-medium tracking-wider uppercase text-foreground/80 hover:text-foreground"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-outline hidden md:inline-flex">
            Enquire
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#ffffff" }}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute inset-0 h-full w-full p-8 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl">DOMEX KIDS</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-5">
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-foreground/85 transition-colors hover:text-brand"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-solid mt-10 w-full"
          >
            Send Enquiry
          </Link>
        </aside>
      </div>
    </header>
  );
}
