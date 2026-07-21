import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-24 bg-white border-t border-border">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl">{site.logoText}</div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Delhi-based wholesale manufacturer of premium kids wear. Serving retailers
            across India with trendy, comfortable and affordable garments since {site.founded}.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.social.instagram} target="_blank" rel="noreferrer"
              className="p-2 rounded-full border hover:bg-foreground hover:text-background transition-colors"
              aria-label="Instagram"><Instagram size={16} /></a>
            <a href={site.social.youtube} target="_blank" rel="noreferrer"
              className="p-2 rounded-full border hover:bg-foreground hover:text-background transition-colors"
              aria-label="YouTube"><Youtube size={16} /></a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/products" search={{ category: "all" }} className="link-underline">Products</Link></li>
            <li><Link to="/wholesale" className="link-underline">Wholesale</Link></li>
            <li><Link to="/infrastructure" className="link-underline">Infrastructure</Link></li>
            <li><Link to="/founder" className="link-underline">Founder</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Reach us</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{site.address.line1}, {site.address.line2}, {site.address.city} – {site.address.postal}</span>
            </li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" />
              <span>{site.phones.join(" · ")}</span>
            </li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" />
              <a href={`mailto:${site.email}`} className="link-underline">{site.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Visit</div>
          <a
            href={site.mapLinkUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 block rounded-2xl overflow-hidden border border-border hover-lift"
            aria-label="Open Google Maps"
          >
            <iframe
              title="DOMEX KIDS location"
              src={site.mapEmbedUrl}
              className="w-full h-40 pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
          <p className="mt-2 text-xs text-muted-foreground">{site.hours}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} DOMEX KIDS. All Rights Reserved.</div>
          <div>Crafted in Delhi, India.</div>
        </div>
      </div>
    </footer>
  );
}
