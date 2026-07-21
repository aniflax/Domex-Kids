import { Youtube, Instagram } from "lucide-react";
import { site } from "@/lib/site-config";

export function SocialBar() {
  const links = [
    { href: site.social.youtube, icon: Youtube, label: "YouTube" },
    { href: site.social.instagram, icon: Instagram, label: "Instagram" },
  ];

  return (
    <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-full border border-border bg-background/80 p-2.5 shadow-sm backdrop-blur-md md:flex">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-brand hover:text-white"
        >
          <l.icon size={16} />
        </a>
      ))}
    </div>
  );
}
