import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { GoogleSignIn } from "@/components/portal/GoogleSignIn";

export const Route = createFileRoute("/staff/login")({
  head: () => ({ meta: [{ title: "Staff sign in — DomexKids" }] }),
  component: StaffLogin,
});

function StaffLogin() {
  const { user, loading, loginWithGoogle, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user && (user.appRole === "staff" || user.appRole === "admin")) {
      navigate({ to: "/staff/dashboard" });
    }
    if (!loading && user && (user.appRole === "pending_staff" || user.appRole === "customer")) {
      setPending(true);
    }
  }, [user, loading, navigate]);

  const handle = async (idToken: string) => {
    setBusy(true);
    setError(null);
    setPending(false);
    try {
      const u = await loginWithGoogle(idToken, "staff");
      if (u.appRole === "admin" || u.appRole === "staff") {
        navigate({ to: "/staff/dashboard" });
      } else {
        setPending(true);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sign-in failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-sm">
        <div className="text-center">
          <p className="font-display text-3xl tracking-tight text-foreground">DOMEX KIDS</p>
          <p className="mt-1 text-sm text-muted-foreground">Staff &amp; Admin Portal</p>
        </div>

        {pending ? (
          <div className="mt-8 space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">
              ⏳
            </div>
            <h1 className="text-lg font-medium">Waiting for approval</h1>
            <p className="text-sm text-muted-foreground">
              Your account is registered but needs to be approved by the store owner before you can
              access the staff dashboard. Please check back shortly.
            </p>
            <button
              onClick={() => {
                logout();
                setPending(false);
              }}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium hover:bg-accent"
            >
              Sign out
            </button>
          </div>
        ) : (
          <>
            <div className="mt-8 space-y-1 text-center">
              <h1 className="text-lg font-medium">Staff sign in</h1>
              <p className="text-sm text-muted-foreground">Sign in with your Google account.</p>
            </div>
            <div className="mt-6">
              <GoogleSignIn onCredential={handle} />
            </div>
            {busy && (
              <p className="mt-4 text-center text-sm text-muted-foreground">Signing you in…</p>
            )}
            {error && <p className="mt-4 text-center text-sm text-destructive">{error}</p>}
            <p className="mt-8 text-center text-xs text-muted-foreground">
              Customer?{" "}
              <a href="/login" className="font-medium underline underline-offset-2">
                Customer sign in
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
