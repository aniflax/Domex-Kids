import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { RequireRole } from "@/lib/auth";
import {
  portalGet,
  portalPost,
  mediaUrl,
  formatPrice,
  type AppRole,
  type ShowroomProduct,
} from "@/lib/portal";
import { PortalHeader } from "@/components/portal/PortalHeader";

const ROLES: AppRole[] = ["customer", "staff", "admin"];

type CategoryResponse = {
  locked: boolean;
  category: {
    documentId: string;
    title: string;
    image: any;
    subcategories: { documentId: string; title: string; image: any }[];
  };
  products?: ShowroomProduct[];
};

export const Route = createFileRoute("/showroom/category/$documentId")({
  head: () => ({ meta: [{ title: "Browse — DomexKids" }] }),
  component: () => (
    <RequireRole roles={ROLES} redirect="/login">
      <CategoryPage />
    </RequireRole>
  ),
});

function CategoryPage() {
  const { documentId } = Route.useParams();
  const queryClient = useQueryClient();
  const [subFilter, setSubFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [added, setAdded] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["showroom", "category", documentId],
    queryFn: () => portalGet<CategoryResponse>(`/showroom/category/${documentId}`),
    refetchInterval: 10000,
  });

  const addMutation = useMutation({
    mutationFn: (variantDocumentId: string) =>
      portalPost<{ ok: boolean; message?: string; available?: number }>("/showroom/cart", {
        variantDocumentId,
        quantity: 1,
      }),
    onSuccess: (res, variantDocumentId) => {
      if (res.ok) {
        setAdded(variantDocumentId);
        queryClient.invalidateQueries({ queryKey: ["showroom", "category", documentId] });
        queryClient.invalidateQueries({ queryKey: ["showroom", "home"] });
        setTimeout(() => setAdded(null), 1500);
      } else {
        setAdded(null);
        alert(res.message ?? "Could not add to cart");
      }
    },
  });

  const unlockMutation = useMutation({
    mutationFn: () =>
      portalPost<{ ok: boolean; message?: string }>("/showroom/unlock/code", {
        categoryDocumentId: documentId,
        code,
      }),
    onSuccess: (res) => {
      if (res.ok) {
        setCodeError(null);
        queryClient.invalidateQueries({ queryKey: ["showroom", "category", documentId] });
        queryClient.invalidateQueries({ queryKey: ["showroom", "home"] });
      } else {
        setCodeError(res.message ?? "Incorrect code");
      }
    },
    onError: (e) => setCodeError(e instanceof Error ? e.message : "Something went wrong"),
  });

  const products = data?.products ?? [];
  const subOptions = useMemo(() => {
    const map = new Map<string, string>();
    for (const p of products) if (p.subcategory) map.set(p.subcategory.documentId, p.subcategory.title);
    return Array.from(map.entries());
  }, [products]);
  const colorOptions = useMemo(() => {
    const set = new Set<string>();
    for (const p of products) for (const v of p.variants) set.add(v.color);
    return Array.from(set);
  }, [products]);
  const sizeOptions = useMemo(() => {
    const set = new Set<string>();
    for (const p of products) for (const v of p.variants) set.add(v.size);
    return Array.from(set).sort((a, b) => Number(a) - Number(b));
  }, [products]);

  const filtered = products.filter((p) => {
    if (subFilter && p.subcategory?.documentId !== subFilter) return false;
    if (colorFilter && !p.variants.some((v) => v.color === colorFilter)) return false;
    if (sizeFilter && !p.variants.some((v) => v.size === sizeFilter)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader
        title={data?.category.title ?? "Browsing"}
        back="/showroom"
        right={
          <Link to="/showroom/cart" className="rounded-full border border-border px-4 py-1.5 text-sm font-medium">
            Cart
          </Link>
        }
      />

      <div className="mx-auto max-w-5xl px-4 py-6">
        {isLoading && <p className="text-sm text-muted-foreground">Loading…</p>}

        {data?.locked && (
          <div className="mx-auto max-w-sm rounded-2xl border border-border bg-card p-6 text-center">
            <div className="text-3xl">🔒</div>
            <h2 className="mt-2 text-lg font-medium">This category is locked</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Ask our staff for the 4-digit code to unlock it.
            </p>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
              inputMode="numeric"
              placeholder="0000"
              className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-center text-2xl tracking-[0.5em]"
            />
            {codeError && <p className="mt-2 text-sm text-destructive">{codeError}</p>}
            <button
              onClick={() => unlockMutation.mutate()}
              disabled={code.length !== 4 || unlockMutation.isPending}
              className="mt-4 w-full rounded-full bg-foreground py-2.5 text-sm font-medium text-background disabled:opacity-50"
            >
              {unlockMutation.isPending ? "Checking…" : "Unlock"}
            </button>
          </div>
        )}

        {data && !data.locked && (
          <>
            <div className="mb-5 space-y-3">
              {subOptions.length > 0 && (
                <FilterRow
                  label="Type"
                  options={[["", "All"], ...subOptions]}
                  value={subFilter}
                  onChange={setSubFilter}
                />
              )}
              {colorOptions.length > 0 && (
                <FilterRow
                  label="Colour"
                  options={[["", "All"], ...colorOptions.map((c) => [c, c] as [string, string])]}
                  value={colorFilter}
                  onChange={setColorFilter}
                />
              )}
              {sizeOptions.length > 0 && (
                <FilterRow
                  label="Size"
                  options={[["", "All"], ...sizeOptions.map((s) => [s, s] as [string, string])]}
                  value={sizeFilter}
                  onChange={setSizeFilter}
                />
              )}
            </div>

            {filtered.length === 0 && (
              <p className="rounded-xl border border-border px-4 py-6 text-center text-sm text-muted-foreground">
                No products match these filters.
              </p>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {filtered.map((product) => (
                <div key={product.documentId} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[4/3] bg-muted">
                    {product.photos[0] && (
                      <img src={mediaUrl(product.photos[0])} alt={product.title} className="h-full w-full object-cover" />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="font-medium">{product.title}</p>
                      {product.price !== null && (
                        <span className="text-sm text-muted-foreground">{formatPrice(product.price)}</span>
                      )}
                    </div>
                    {product.tagline && (
                      <p className="mt-0.5 text-xs text-muted-foreground">{product.tagline}</p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.variants
                        .filter((v) => (!colorFilter || v.color === colorFilter) && (!sizeFilter || v.size === sizeFilter))
                        .map((v) => (
                          <button
                            key={v.documentId}
                            disabled={v.available <= 0 || addMutation.isPending}
                            onClick={() => addMutation.mutate(v.documentId)}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                              added === v.documentId
                                ? "border-green-500 bg-green-50 text-green-700"
                                : "border-border hover:bg-accent disabled:opacity-40"
                            }`}
                          >
                            {v.color} / {v.size} · {v.available}
                            {added === v.documentId ? " ✓" : ""}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: [string, string][];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      {options.map(([val, text]) => (
        <button
          key={val || "all"}
          onClick={() => onChange(val)}
          className={`shrink-0 rounded-full border px-3 py-1 text-xs ${
            value === val ? "border-foreground bg-foreground text-background" : "border-border hover:bg-accent"
          }`}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
