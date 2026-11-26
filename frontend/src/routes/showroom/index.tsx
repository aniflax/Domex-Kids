import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { RequireRole, useAuth } from "@/lib/auth";
import { portalGet, portalPost, mediaUrl, type AppRole, type PublicCategory } from "@/lib/portal";
import { PortalHeader } from "@/components/portal/PortalHeader";

const ROLES: AppRole[] = ["customer", "staff", "admin"];

type Home = {
  session: { id: number; status: string; masterPassActive: boolean; masterPassExpiresAt: string | null };
  masterPassActive: boolean;
  cartCount: number;
  categories: PublicCategory[];
};

export const Route = createFileRoute("/showroom/")({
  head: () => ({ meta: [{ title: "Showroom — DomexKids" }] }),
  component: () => (
    <RequireRole roles={ROLES} redirect="/login">
      <ShowroomHome />
    </RequireRole>
  ),
});

function ShowroomHome() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [unlocking, setUnlocking] = useState<PublicCategory | null>(null);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState<string | null>(null);

  const { data, isError } = useQuery({
    queryKey: ["showroom", "home"],
    queryFn: () => portalGet<Home>("/showroom/home"),
    refetchInterval: 5000,
  });

  const unlockMutation = useMutation({
    mutationFn: (vars: { documentId: string; code: string }) =>
      portalPost<{ ok: boolean; message?: string }>("/showroom/unlock/code", {
        categoryDocumentId: vars.documentId,
        code: vars.code,
      }),
    onSuccess: (res) => {
      if (res.ok) {
        setUnlocking(null);
        setCode("");
        setCodeError(null);
        queryClient.invalidateQueries({ queryKey: ["showroom", "home"] });
      } else {
        setCodeError(res.message ?? "Incorrect code");
      }
    },
    onError: (e) => setCodeError(e instanceof Error ? e.message : "Something went wrong"),
  });

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader
        title="Digital Showroom"
        subtitle={user?.fullName ?? user?.email ?? undefined}
        right={
          <Link
            to="/showroom/cart"
            className="relative rounded-full border border-border px-4 py-1.5 text-sm font-medium"
          >
            Cart
            {(data?.cartCount ?? 0) > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-[11px] text-background">
                {data?.cartCount}
              </span>
            )}
          </Link>
        }
      />

      <div className="mx-auto max-w-5xl px-4 py-6">
        {data?.masterPassActive && (
          <div className="mb-5 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            ✅ Master Pass active — all categories are unlocked for you.
          </div>
        )}
        {!data?.masterPassActive && (
          <p className="mb-5 text-sm text-muted-foreground">
            Categories are locked by default. Ask our staff to unlock a category — they'll give you a
            4-digit code or scan a QR.
          </p>
        )}

        {isError && (
          <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            Couldn't load the showroom. Please refresh.
          </p>
        )}

        {!data && !isError && (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] animate-pulse rounded-2xl bg-muted" />
            ))}
          </div>
        )}

        {data && data.categories.length === 0 && (
          <p className="rounded-xl border border-border px-4 py-6 text-center text-sm text-muted-foreground">
            No categories are available yet.
          </p>
        )}

        {data && data.categories.length > 0 && (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {data.categories.map((cat) => (
              <div
                key={cat.documentId}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/5] bg-muted">
                  {cat.image && (
                    <img
                      src={mediaUrl(cat.image)}
                      alt={cat.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                  {!cat.unlocked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/55 text-white backdrop-blur-[2px]">
                      <span className="text-2xl">🔒</span>
                      <span className="text-xs font-medium">Locked</span>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="truncate text-sm font-medium">{cat.title}</p>
                  {cat.unlocked ? (
                    <Link
                      to="/showroom/category/$documentId"
                      params={{ documentId: cat.documentId }}
                      className="mt-2 block rounded-full bg-foreground py-2 text-center text-xs font-medium text-background"
                    >
                      Browse
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        setUnlocking(cat);
                        setCode("");
                        setCodeError(null);
                      }}
                      className="mt-2 w-full rounded-full border border-border py-2 text-center text-xs font-medium hover:bg-accent"
                    >
                      Unlock
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {unlocking && (
        <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/40 p-4 sm:items-center">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-medium">Unlock “{unlocking.title}”</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter the 4-digit code shown on the staff screen.
            </p>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
              inputMode="numeric"
              autoFocus
              placeholder="0000"
              className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-center text-2xl tracking-[0.5em]"
            />
            {codeError && <p className="mt-2 text-sm text-destructive">{codeError}</p>}
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setUnlocking(null)}
                className="flex-1 rounded-full border border-border py-2.5 text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  unlockMutation.mutate({ documentId: unlocking.documentId, code })
                }
                disabled={code.length !== 4 || unlockMutation.isPending}
                className="flex-1 rounded-full bg-foreground py-2.5 text-sm font-medium text-background disabled:opacity-50"
              >
                {unlockMutation.isPending ? "Checking…" : "Unlock"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
