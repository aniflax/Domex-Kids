import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useAuth } from "@/lib/auth";

export function PortalHeader({
  title,
  subtitle,
  right,
  back,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  back?: string;
}) {
  const { logout } = useAuth();
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          {back && (
            <Link to={back} className="shrink-0 text-lg text-muted-foreground hover:text-foreground">
              ←
            </Link>
          )}
          <div className="min-w-0">
            <p className="truncate font-display text-xl leading-tight">{title}</p>
            {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {right}
          <button
            onClick={logout}
            className="text-xs text-muted-foreground underline underline-offset-2"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
