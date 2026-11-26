import { mediaUrl } from "./strapi";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export type AppRole = "customer" | "pending_staff" | "staff" | "admin" | "blocked";

export type PortalUser = {
  id: number;
  documentId: string;
  email: string;
  username: string;
  fullName: string | null;
  picture: string | null;
  appRole: AppRole;
};

let authToken: string | null = null;

export function setAuthToken(token: string | null) {
  authToken = token;
}

const API_BASE = typeof window === "undefined" ? `${STRAPI_URL}/api` : "/api/portal";

export async function portalRequest<T = any>(
  path: string,
  options: { method?: string; body?: any } = {},
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: options.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    const message = data?.error?.message ?? `Request failed (${res.status})`;
    const err = new Error(message) as Error & { status?: number };
    err.status = res.status;
    throw err;
  }
  return data as T;
}

export const portalGet = <T = any>(path: string) => portalRequest<T>(path);
export const portalPost = <T = any>(path: string, body?: any) =>
  portalRequest<T>(path, { method: "POST", body });
export const portalPatch = <T = any>(path: string, body?: any) =>
  portalRequest<T>(path, { method: "PATCH", body });
export const portalDelete = <T = any>(path: string) =>
  portalRequest<T>(path, { method: "DELETE" });

export { mediaUrl };
export { STRAPI_URL };

export type PublicCategory = {
  documentId: string;
  title: string;
  image: { url: string; formats?: Record<string, { url: string }> } | null;
  unlocked: boolean;
  subcategories: { documentId: string; title: string; image: any }[];
};

export type Variant = {
  documentId: string;
  color: string;
  size: string;
  sku: string | null;
  stock: number;
  available: number;
};

export type ShowroomProduct = {
  documentId: string;
  title: string;
  tagline: string | null;
  subText: string | null;
  price: number | null;
  photos: { url: string; formats?: Record<string, { url: string }> }[];
  subcategory: { documentId: string; title: string } | null;
  variants: Variant[];
};

export function formatPrice(price: number | null) {
  if (price === null || price === undefined) return "";
  return `₹${Number(price).toLocaleString("en-IN")}`;
}
