import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { RequireRole, useAuth } from "@/lib/auth";
import { portalGet, portalPost, type AppRole } from "@/lib/portal";
import { PortalHeader } from "@/components/portal/PortalHeader";

const ROLES: AppRole[] = ["staff", "admin"];

type StaffCustomer = {
  sessionId: number;
  checkInAt: string;
  masterPassActive: boolean;
  customer: { fullName: string | null; email: string; picture: string | null } | null;
  unlocked: { documentId: string | null; title: string | null }[];
  cart: { title: string; color: string; size: string; quantity: number }[];
  openOrders: number;
};

type Order = {
  documentId: string;
  status: string;
  requestedAt: string | null;
  totalItems: number;
  customer: { fullName: string | null; email: string } | null;
  items: { title: string; color: string; size: string; quantity: number }[];
};

export const Route = createFileRoute("/staff/dashboard")({
  head: () => ({ meta: [{ title: "Staff dashboard — DomexKids" }] }),
  component: () => (
    <RequireRole roles={ROLES} redirect="/staff/login">
      <StaffDashboard />
    </RequireRole>
  ),
});

function StaffDashboard() {
  const { user } = useAuth();
  const [tab, setTab] = useState<"customers" | "codes" | "orders">("customers");

  const categoriesQuery = useQuery({
    queryKey: ["staff", "categories"],
    queryFn: async () => {
      const res = await portalGet<{ data: { documentId: string; title: string }[] }>("/categories");
      return res.data ?? [];
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader
        title="Staff Dashboard"
        subtitle={user?.appRole === "admin" ? "Admin access" : user?.fullName ?? user?.email ?? undefined}
        right={
          user?.appRole === "admin" ? (
            <Link to="/staff/admin-dashboard" className="rounded-full border border-border px-4 py-1.5 text-sm font-medium">
              Admin
            </Link>
          ) : undefined
        }
      />

      <div className="mx-auto max-w-5xl px-4 py-5">
        <div className="mb-5 flex gap-2">
          {(["customers", "codes", "orders"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium capitalize ${
                tab === t ? "border-foreground bg-foreground text-background" : "border-border"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "customers" && <CustomersTab categories={categoriesQuery.data ?? []} />}
        {tab === "codes" && <CodesTab categories={categoriesQuery.data ?? []} />}
        {tab === "orders" && <OrdersTab />}
      </div>
    </div>
  );
}

function CustomersTab({ categories }: { categories: { documentId: string; title: string }[] }) {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["staff", "customers"],
    queryFn: () => portalGet<{ customers: StaffCustomer[] }>("/staff/customers"),
    refetchInterval: 4000,
  });

  const unlockMutation = useMutation({
    mutationFn: (vars: { sessionId: number; categoryDocumentId: string }) => portalPost("/staff/unlock", vars),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["staff", "customers"] }),
  });
  const masterMutation = useMutation({
    mutationFn: (sessionId: number) => portalPost("/staff/master-pass", { sessionId }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["staff", "customers"] }),
  });

  const customers = data?.customers ?? [];

  return (
    <div className="space-y-3">
      {customers.length === 0 && (
        <p className="rounded-xl border border-border px-4 py-6 text-center text-sm text-muted-foreground">
          No customers are checked in right now.
        </p>
      )}
      {customers.map((c) => (
        <CustomerRow
          key={c.sessionId}
          customer={c}
          categories={categories}
          onUnlock={(categoryDocumentId) => unlockMutation.mutate({ sessionId: c.sessionId, categoryDocumentId })}
          onMasterPass={() => masterMutation.mutate(c.sessionId)}
        />
      ))}
    </div>
  );
}

function CustomerRow({
  customer,
  categories,
  onUnlock,
  onMasterPass,
}: {
  customer: StaffCustomer;
  categories: { documentId: string; title: string }[];
  onUnlock: (documentId: string) => void;
  onMasterPass: () => void;
}) {
  const [selected, setSelected] = useState(categories[0]?.documentId ?? "");

  useEffect(() => {
    if (!selected && categories[0]) setSelected(categories[0].documentId);
  }, [categories, selected]);

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {customer.customer?.picture ? (
            <img src={customer.customer.picture} alt="" className="h-9 w-9 rounded-full" />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm">
              {(customer.customer?.fullName ?? customer.customer?.email ?? "?").charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-sm font-medium">{customer.customer?.fullName ?? customer.customer?.email}</p>
            <p className="text-xs text-muted-foreground">
              {customer.customer?.email} · checked in {new Date(customer.checkInAt).toLocaleTimeString()}
            </p>
          </div>
        </div>
        {customer.masterPassActive && (
          <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
            Master Pass
          </span>
        )}
      </div>

      {customer.unlocked.length > 0 && (
        <p className="mt-2 text-xs text-muted-foreground">
          Unlocked: {customer.unlocked.map((u) => u.title).join(", ")}
        </p>
      )}
      {customer.cart.length > 0 && (
        <p className="mt-1 text-xs text-muted-foreground">
          Cart: {customer.cart.map((i) => `${i.title} (${i.color}/${i.size}) ×${i.quantity}`).join(", ")}
        </p>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="rounded-full border border-border bg-background px-3 py-1.5 text-sm"
        >
          {categories.map((c) => (
            <option key={c.documentId} value={c.documentId}>
              {c.title}
            </option>
          ))}
        </select>
        <button
          onClick={() => selected && onUnlock(selected)}
          className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background"
        >
          Unlock category
        </button>
        <button
          onClick={onMasterPass}
          className="rounded-full border border-border px-4 py-1.5 text-sm font-medium"
        >
          Give 2-hour Master Pass
        </button>
      </div>
    </div>
  );
}

function CodesTab({ categories }: { categories: { documentId: string; title: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {categories.map((c) => (
        <CategoryCodeCard key={c.documentId} category={c} />
      ))}
    </div>
  );
}

function CategoryCodeCard({ category }: { category: { documentId: string; title: string } }) {
  const [qr, setQr] = useState<string | null>(null);
  const { data } = useQuery({
    queryKey: ["staff", "code", category.documentId],
    queryFn: () =>
      portalGet<{ code: string; qrUrl: string; version: number }>(
        `/staff/access/${category.documentId}/code`,
      ),
    refetchInterval: 8000,
  });

  useEffect(() => {
    if (data?.qrUrl) {
      QRCode.toDataURL(data.qrUrl, { width: 180, margin: 1 }).then(setQr).catch(() => setQr(null));
    }
  }, [data?.qrUrl]);

  return (
    <div className="rounded-2xl border border-border bg-card p-4 text-center">
      <p className="text-sm font-medium">{category.title}</p>
      <p className="mt-3 font-display text-4xl tracking-[0.3em]">{data?.code ?? "····"}</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Tell the customer this code — it changes the moment it's used.
      </p>
      {qr && <img src={qr} alt="QR" className="mx-auto mt-3 rounded-lg" />}
    </div>
  );
}

function OrdersTab() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["staff", "orders"],
    queryFn: () => portalGet<{ orders: Order[] }>("/staff/orders"),
    refetchInterval: 4000,
  });

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ["staff", "orders"] });
    queryClient.invalidateQueries({ queryKey: ["staff", "customers"] });
  };
  const statusMutation = useMutation({
    mutationFn: (vars: { documentId: string; status: string }) =>
      portalPost(`/staff/orders/${vars.documentId}/status`, { status: vars.status }),
    onSuccess: invalidate,
  });
  const checkoutMutation = useMutation({
    mutationFn: (documentId: string) => portalPost(`/staff/orders/${documentId}/checkout`),
    onSuccess: invalidate,
  });

  const orders = data?.orders ?? [];

  return (
    <div className="space-y-3">
      {orders.length === 0 && (
        <p className="rounded-xl border border-border px-4 py-6 text-center text-sm text-muted-foreground">
          No open pick-lists.
        </p>
      )}
      {orders.map((o) => (
        <div key={o.documentId} className="rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">{o.customer?.fullName ?? o.customer?.email ?? "Customer"}</p>
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs capitalize">{o.status}</span>
          </div>
          <ul className="mt-2 space-y-1 text-sm">
            {o.items.map((it, i) => (
              <li key={i} className="flex justify-between border-b border-border/50 pb-1">
                <span>{it.title}</span>
                <span className="text-muted-foreground">
                  {it.color} / {it.size} × {it.quantity}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {o.status === "requested" && (
              <button
                onClick={() => statusMutation.mutate({ documentId: o.documentId, status: "picking" })}
                className="rounded-full border border-border px-4 py-1.5 text-sm font-medium"
              >
                Start picking
              </button>
            )}
            {o.status !== "ready" && (
              <button
                onClick={() => statusMutation.mutate({ documentId: o.documentId, status: "ready" })}
                className="rounded-full border border-border px-4 py-1.5 text-sm font-medium"
              >
                Mark ready
              </button>
            )}
            <button
              onClick={() => checkoutMutation.mutate(o.documentId)}
              className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background"
            >
              Check out customer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
