import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { RequireRole } from "@/lib/auth";
import { portalGet, portalPost, type AppRole } from "@/lib/portal";
import { PortalHeader } from "@/components/portal/PortalHeader";

const ROLES: AppRole[] = ["admin"];
const ROLE_OPTIONS = ["customer", "pending_staff", "staff", "admin", "blocked"];

type AdminUser = {
  id: number;
  email: string;
  fullName: string | null;
  appRole: string;
  blocked: boolean;
  createdAt: string;
};

type InventoryRow = {
  documentId: string;
  title: string;
  productCount: number;
  totalStock: number;
  totalReserved: number;
  available: number;
};

type LogRow = {
  id: number;
  action: string;
  targetType: string | null;
  targetId: string | null;
  meta: any;
  at: string;
  actor: { fullName: string | null; email: string } | null;
};

export const Route = createFileRoute("/staff/admin-dashboard")({
  head: () => ({ meta: [{ title: "Admin — DomexKids" }] }),
  component: () => (
    <RequireRole roles={ROLES} redirect="/staff/login">
      <AdminDashboard />
    </RequireRole>
  ),
});

function AdminDashboard() {
  const [tab, setTab] = useState<"users" | "inventory" | "logs">("users");

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader
        title="Admin Command Center"
        right={
          <Link to="/staff/dashboard" className="rounded-full border border-border px-4 py-1.5 text-sm font-medium">
            Staff view
          </Link>
        }
      />
      <div className="mx-auto max-w-5xl px-4 py-5">
        <div className="mb-5 flex gap-2">
          {(["users", "inventory", "logs"] as const).map((t) => (
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
        {tab === "users" && <UsersTab />}
        {tab === "inventory" && <InventoryTab />}
        {tab === "logs" && <LogsTab />}
      </div>
    </div>
  );
}

function UsersTab() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["admin", "users"],
    queryFn: () => portalGet<{ users: AdminUser[] }>("/admin/users"),
    refetchInterval: 8000,
  });
  const roleMutation = useMutation({
    mutationFn: (vars: { id: number; appRole: string }) => portalPost(`/admin/users/${vars.id}/role`, { appRole: vars.appRole }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin", "users"] }),
  });

  const users = data?.users ?? [];
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t border-border">
              <td className="px-4 py-2">
                <p className="font-medium">{u.fullName ?? u.email}</p>
                <p className="text-xs text-muted-foreground">{u.email}</p>
              </td>
              <td className="px-4 py-2">
                <select
                  value={u.appRole}
                  onChange={(e) => roleMutation.mutate({ id: u.id, appRole: e.target.value })}
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    u.appRole === "pending_staff" ? "border-amber-400 bg-amber-50" : "border-border bg-background"
                  }`}
                >
                  {ROLE_OPTIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan={2} className="px-4 py-6 text-center text-muted-foreground">
                No users yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function InventoryTab() {
  const { data } = useQuery({
    queryKey: ["admin", "inventory"],
    queryFn: () => portalGet<{ categories: InventoryRow[] }>("/admin/inventory"),
    refetchInterval: 8000,
  });
  const rows = data?.categories ?? [];
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2 text-right">Stock</th>
            <th className="px-4 py-2 text-right">Reserved</th>
            <th className="px-4 py-2 text-right">Available</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.documentId} className="border-t border-border">
              <td className="px-4 py-2">
                {r.title}
                <span className="ml-1 text-xs text-muted-foreground">({r.productCount} products)</span>
              </td>
              <td className="px-4 py-2 text-right">{r.totalStock}</td>
              <td className="px-4 py-2 text-right">{r.totalReserved}</td>
              <td className="px-4 py-2 text-right font-medium">{r.available}</td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={4} className="px-4 py-6 text-center text-muted-foreground">
                No inventory data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function LogsTab() {
  const { data } = useQuery({
    queryKey: ["admin", "logs"],
    queryFn: () => portalGet<{ logs: LogRow[] }>("/admin/logs"),
    refetchInterval: 8000,
  });
  const logs = data?.logs ?? [];
  return (
    <div className="space-y-2">
      {logs.length === 0 && (
        <p className="rounded-xl border border-border px-4 py-6 text-center text-sm text-muted-foreground">
          No activity yet.
        </p>
      )}
      {logs.map((l) => (
        <div key={l.id} className="rounded-xl border border-border bg-card px-4 py-2 text-sm">
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium capitalize">{l.action.replace(/[._]/g, " ")}</span>
            <span className="text-xs text-muted-foreground">
              {new Date(l.at).toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {l.actor?.fullName ?? l.actor?.email ?? "system"}
            {l.targetType ? ` → ${l.targetType}` : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
