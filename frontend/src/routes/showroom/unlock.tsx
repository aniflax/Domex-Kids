import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RequireRole } from "@/lib/auth";
import { portalPost, type AppRole } from "@/lib/portal";

const ROLES: AppRole[] = ["customer", "staff", "admin"];

export const Route = createFileRoute("/showroom/unlock")({
  validateSearch: (search: Record<string, unknown>) => ({ t: String(search.t ?? "") }),
  head: () => ({ meta: [{ title: "Unlocking — DomexKids" }] }),
  component: () => (
    <RequireRole roles={ROLES} redirect="/login">
      <UnlockPage />
    </RequireRole>
  ),
});

function UnlockPage() {
  const { t } = Route.useSearch();
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!t) {
      setState("error");
      setMessage("No unlock code was provided.");
      return;
    }
    portalPost<{ ok: boolean; message?: string; category?: { title: string } }>(
      "/showroom/unlock/scan",
      { token: t },
    )
      .then((res) => {
        if (res.ok) {
          setState("ok");
          setMessage(res.category?.title ?? "Category");
        } else {
          setState("error");
          setMessage(res.message ?? "This code is no longer valid.");
        }
      })
      .catch((e) => {
        setState("error");
        setMessage(e instanceof Error ? e.message : "Something went wrong.");
      });
  }, [t]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-8 text-center">
        {state === "loading" && <p className="text-sm text-muted-foreground">Unlocking…</p>}
        {state === "ok" && (
          <>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl">
              ✅
            </div>
            <h1 className="mt-4 text-lg font-medium">“{message}” unlocked</h1>
            <p className="mt-1 text-sm text-muted-foreground">You can now browse this category.</p>
          </>
        )}
        {state === "error" && (
          <>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-3xl">
              ⚠️
            </div>
            <h1 className="mt-4 text-lg font-medium">Couldn't unlock</h1>
            <p className="mt-1 text-sm text-muted-foreground">{message}</p>
          </>
        )}
        <Link
          to="/showroom"
          className="mt-6 inline-block rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background"
        >
          Go to showroom
        </Link>
      </div>
    </div>
  );
}
