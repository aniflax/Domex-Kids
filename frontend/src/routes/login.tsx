import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { GoogleSignIn } from "@/components/portal/GoogleSignIn";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — DomexKids Showroom" }] }),
  component: CustomerLogin,
});

function CustomerLogin() {
  const { user, loading, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigate({ to: user.appRole === "customer" ? "/showroom" : "/staff/dashboard" });
    }
  }, [user, loading, navigate]);

  const handle = async (idToken: string) => {
    setBusy(true);
    setError(null);
    try {
      await loginWithGoogle(idToken, "customer");
      navigate({ to: "/showroom" });
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
          <p className="mt-1 text-sm text-muted-foreground">Digital Showroom</p>
        </div>

        <div className="mt-8 space-y-1 text-center">
          <h1 className="text-lg font-medium">Sign in to start browsing</h1>
          <p className="text-sm text-muted-foreground">
            Use your Google account — no passwords to remember.
          </p>
        </div>

        <div className="mt-6">
          <GoogleSignIn onCredential={handle} />
        </div>

        {busy && <p className="mt-4 text-center text-sm text-muted-foreground">Signing you in…</p>}
        {error && <p className="mt-4 text-center text-sm text-destructive">{error}</p>}

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Store staff?{" "}
          <a href="/staff/login" className="font-medium underline underline-offset-2">
            Staff sign in
          </a>
        </p>
      </div>
    </div>
  );
}
