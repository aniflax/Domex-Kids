import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { RequireRole } from "@/lib/auth";
import {
  portalDelete,
  portalGet,
  portalPatch,
  portalPost,
  mediaUrl,
  type AppRole,
} from "@/lib/portal";
import { PortalHeader } from "@/components/portal/PortalHeader";

const ROLES: AppRole[] = ["customer", "staff", "admin"];

type CartItem = {
  id: number;
  quantity: number;
  expiresAt: string | null;
  color: string;
  size: string;
  product: { documentId: string; title: string; photos: { url: string; formats?: Record<string, { url: string }> }[] } | null;
};

export const Route = createFileRoute("/showroom/cart")({
  head: () => ({ meta: [{ title: "Your cart — DomexKids" }] }),
  component: () => (
    <RequireRole roles={ROLES} redirect="/login">
      <CartPage />
    </RequireRole>
  ),
});

function Countdown({ expiresAt }: { expiresAt: string | null }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!expiresAt) return <span className="text-muted-foreground">Held</span>;
  const ms = new Date(expiresAt).getTime() - now;
  if (ms <= 0) return <span className="text-destructive">Expired</span>;
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return (
    <span className="text-amber-700">
      {m}:{String(s).padStart(2, "0")} left
    </span>
  );
}

function CartPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [requested, setRequested] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["showroom", "cart"],
    queryFn: () => portalGet<{ items: CartItem[] }>("/showroom/cart"),
    refetchInterval: 15000,
  });

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ["showroom", "cart"] });
    queryClient.invalidateQueries({ queryKey: ["showroom", "home"] });
    queryClient.invalidateQueries({ queryKey: ["showroom", "category"] });
  };

  const updateMutation = useMutation({
    mutationFn: (vars: { id: number; quantity: number }) => portalPatch(`/showroom/cart/${vars.id}`, { quantity: vars.quantity }),
    onSuccess: invalidate,
  });
  const removeMutation = useMutation({
    mutationFn: (id: number) => portalDelete(`/showroom/cart/${id}`),
    onSuccess: invalidate,
  });
  const requestMutation = useMutation({
    mutationFn: () => portalPost<{ ok: boolean; message?: string }>("/showroom/request"),
    onSuccess: (res) => {
      if (res.ok) {
        setRequested(true);
        invalidate();
      } else {
        alert(res.message ?? "Could not send request");
      }
    },
  });

  const items = data?.items ?? [];

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader title="Your Cart" back="/showroom" />

      <div className="mx-auto max-w-2xl px-4 py-6">
        {requested ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center text-green-800">
            <div className="text-3xl">🎉</div>
            <h2 className="mt-2 text-lg font-medium">Request sent!</h2>
            <p className="mt-1 text-sm">
              Our staff will pull your selected items. Please wait at the counter.
            </p>
            <button
              onClick={() => navigate({ to: "/showroom" })}
              className="mt-4 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background"
            >
              Back to showroom
            </button>
          </div>
        ) : (
          <>
            {isLoading && <p className="text-sm text-muted-foreground">Loading…</p>}
            {!isLoading && items.length === 0 && (
              <div className="rounded-2xl border border-border p-6 text-center text-sm text-muted-foreground">
                Your cart is empty.{" "}
                <Link to="/showroom" className="underline">
                  Browse the showroom
                </Link>
                .
              </div>
            )}

            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-2xl border border-border bg-card p-3">
                  <div className="h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-muted">
                    {item.product?.photos?.[0] && (
                      <img src={mediaUrl(item.product.photos[0])} alt="" className="h-full w-full object-cover" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{item.product?.title ?? "Item"}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.color} · Size {item.size}
                    </p>
                    <div className="mt-1 text-xs">
                      <Countdown expiresAt={item.expiresAt} />
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateMutation.mutate({ id: item.id, quantity: item.quantity - 1 })}
                        disabled={item.quantity <= 1}
                        className="h-7 w-7 rounded-full border border-border text-sm disabled:opacity-40"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateMutation.mutate({ id: item.id, quantity: item.quantity + 1 })}
                        className="h-7 w-7 rounded-full border border-border text-sm"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeMutation.mutate(item.id)}
                      className="text-xs text-muted-foreground underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <button
                onClick={() => requestMutation.mutate()}
                disabled={requestMutation.isPending}
                className="mt-6 w-full rounded-full bg-foreground py-3.5 text-sm font-medium text-background disabled:opacity-50"
              >
                {requestMutation.isPending ? "Sending…" : "Request Selected Items"}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
