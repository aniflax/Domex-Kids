import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "@tanstack/react-router";
import { portalGet, portalPost, setAuthToken, type AppRole, type PortalUser } from "./portal";

const TOKEN_KEY = "domex_portal_token";

type AuthState = {
  user: PortalUser | null;
  loading: boolean;
  loginWithGoogle: (idToken: string, mode?: "customer" | "staff") => Promise<PortalUser>;
  logout: () => void;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<PortalUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
    if (!token) {
      setLoading(false);
      return;
    }
    setAuthToken(token);
    portalGet<{ user: PortalUser }>("/auth/me")
      .then((res) => setUser(res.user))
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY);
        setAuthToken(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const loginWithGoogle = useCallback(async (idToken: string, mode: "customer" | "staff" = "customer") => {
    const res = await portalPost<{ jwt: string; user: PortalUser }>("/auth/google", { idToken, mode });
    localStorage.setItem(TOKEN_KEY, res.jwt);
    setAuthToken(res.jwt);
    setUser(res.user);
    return res.user;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setAuthToken(null);
    setUser(null);
  }, []);

  const refresh = useCallback(async () => {
    try {
      const res = await portalGet<{ user: PortalUser }>("/auth/me");
      setUser(res.user);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function homeForRole(role: AppRole | undefined): string {
  if (role === "admin" || role === "staff" || role === "pending_staff") return "/staff/dashboard";
  return "/showroom";
}

export function RequireRole({
  roles,
  redirect,
  children,
}: {
  roles: AppRole[];
  redirect: string;
  children: ReactNode;
}) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate({ to: redirect });
      return;
    }
    if (!roles.includes(user.appRole)) {
      navigate({ to: homeForRole(user.appRole) });
    }
  }, [user, loading, roles, redirect, navigate]);

  if (loading) {
    return <div className="p-16 text-center text-sm text-muted-foreground">Loading…</div>;
  }
  if (!user || !roles.includes(user.appRole)) return null;
  return <>{children}</>;
}
