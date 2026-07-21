import { useQuery } from "@tanstack/react-query";
import type {
  StrapiCategory,
  StrapiProduct,
  StrapiVideo,
  Product,
  Category,
  Video,
} from "./strapi-types";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

function mediaUrl(media: { url: string; formats?: Record<string, { url: string }> }): string {
  const url = media.formats?.medium?.url || media.formats?.small?.url || media.url;
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

function mapProduct(sp: StrapiProduct): Product {
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

function mapCategory(sc: StrapiCategory): Category {
  return {
    id: sc.id,
    name: sc.title,
    description: sc.description ?? "",
    image: sc.image ? mediaUrl(sc.image) : "",
  };
}

function mapVideo(sv: StrapiVideo): Video {
  return {
    title: sv.title,
    videoUrl: sv.videoUrl,
    videoId: extractYouTubeId(sv.videoUrl),
  };
}

export function useCategories() {
  return useQuery({
    queryKey: ["strapi", "categories"],
    queryFn: async () => {
      const res = await fetchAPI<{ data: StrapiCategory[] }>("/categories?populate=image");
      return res.data.map(mapCategory);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useHomeCategories() {
  return useQuery({
    queryKey: ["strapi", "categories", "home"],
    queryFn: async () => {
      const res = await fetchAPI<{ data: StrapiCategory[] }>(
        "/categories?filters[showOnHomepage][$eq]=true&populate=image",
      );
      return res.data.map(mapCategory);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useProducts() {
  return useQuery({
    queryKey: ["strapi", "products"],
    queryFn: async () => {
      const res = await fetchAPI<{ data: StrapiProduct[] }>("/products?populate=category,photos");
      return res.data.map(mapProduct);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useHomeProducts() {
  return useQuery({
    queryKey: ["strapi", "products", "home"],
    queryFn: async () => {
      const res = await fetchAPI<{ data: StrapiProduct[] }>(
        "/products?filters[showOnHomepage][$eq]=true&populate=category,photos",
      );
      return res.data.map(mapProduct);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useVideos() {
  return useQuery({
    queryKey: ["strapi", "videos"],
    queryFn: async () => {
      const res = await fetchAPI<{ data: StrapiVideo[] }>("/videos");
      return res.data.map(mapVideo);
    },
    staleTime: 5 * 60 * 1000,
  });
}
