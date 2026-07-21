import { useQuery } from "@tanstack/react-query";
import type {
  StrapiCategory,
  StrapiProduct,
  StrapiVideo,
  Product,
  Category,
  Video,
} from "./strapi-types";

const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL ||
  (typeof window !== "undefined" && window.location.hostname === "domex-kids.vercel.app"
    ? "https://domex-kids-strapi.onrender.com"
    : "http://localhost:1337");

export async function fetchStrapi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api${endpoint}`);
  if (!res.ok) throw new Error(`Strapi API error: ${res.status}`);
  return res.json();
}

function mediaUrl(media: { url: string; formats?: Record<string, { url: string }> }): string {
  let url = media.formats?.medium?.url || media.formats?.small?.url || media.url;
  url = url.replace(
    "https://7429f0c7b407b1d7acb237af144dcc67.r2.cloudflarestorage.com",
    "https://pub-0de6857b497142ab923e109463ce4e64.r2.dev",
  );
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

function extractYouTubeId(url: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return url;
}

export function mapProduct(sp: StrapiProduct): Product {
  const images = sp.photos?.length > 0 ? sp.photos.map((m) => mediaUrl(m)) : [];
  return {
    id: sp.id,
    name: sp.title,
    categoryId: sp.category?.id ?? 0,
    categoryName: sp.category?.title ?? "",
    tagline: sp.tagline ?? "",
    subText: sp.subText ?? "",
    price: sp.price ?? null,
    image: images[0] ?? "",
    gallery: images.slice(0, 3),
    description: sp.description ?? "",
  };
}

export function mapCategory(sc: StrapiCategory): Category {
  return {
    id: sc.id,
    name: sc.title,
    description: sc.description ?? "",
    image: sc.image ? mediaUrl(sc.image) : "",
  };
}

export function mapVideo(sv: StrapiVideo): Video {
  return {
    title: sv.title,
    videoUrl: sv.videoUrl,
    videoId: extractYouTubeId(sv.videoUrl),
  };
}

export async function fetchHomeCategories(): Promise<Category[]> {
  const res = await fetchStrapi<{ data: StrapiCategory[] }>(
    "/categories?filters[showOnHomepage][$eq]=true&populate=image",
  );
  return res.data.map(mapCategory);
}

export async function fetchHomeProducts(): Promise<Product[]> {
  const res = await fetchStrapi<{ data: StrapiProduct[] }>(
    "/products?filters[showOnHomepage][$eq]=true&populate=category,photos",
  );
  return res.data.map(mapProduct);
}

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetchStrapi<{ data: StrapiProduct[] }>("/products?populate=category,photos");
  return res.data.map(mapProduct);
}

export async function fetchAllCategories(): Promise<Category[]> {
  const res = await fetchStrapi<{ data: StrapiCategory[] }>("/categories?populate=image");
  return res.data.map(mapCategory);
}

export async function fetchVideos(): Promise<Video[]> {
  const res = await fetchStrapi<{ data: StrapiVideo[] }>("/videos");
  return res.data.map(mapVideo);
}

export function useCategories() {
  return useQuery({
    queryKey: ["strapi", "categories"],
    queryFn: fetchAllCategories,
    staleTime: 5 * 60 * 1000,
  });
}

export function useProducts() {
  return useQuery({
    queryKey: ["strapi", "products"],
    queryFn: fetchAllProducts,
    staleTime: 5 * 60 * 1000,
  });
}
