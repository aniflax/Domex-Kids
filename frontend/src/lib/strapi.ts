import { useQuery } from "@tanstack/react-query";
import type {
  StrapiCategory,
  StrapiProduct,
  StrapiVideo,
  Product,
  Category,
  Video,
} from "./strapi-types";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

function strapiUrl(path: string, params: Record<string, string>): string {
  const url = new URL(`${STRAPI_URL}/api${path}`);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.append(k, v);
  }
  return url.toString();
}

export async function fetchStrapi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api${endpoint}`);
  if (!res.ok) throw new Error(`Strapi API error: ${res.status}`);
  return res.json();
}

export function mediaUrl(media: { url: string; formats?: Record<string, { url: string }> }): string {
  const url = media.formats?.medium?.url || media.formats?.small?.url || media.url;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

function extractYouTubeId(url: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return url;
}

function extractInstagramId(url: string): string | null {
  const patterns = [
    /instagram\.com\/reel\/([a-zA-Z0-9_-]+)/,
    /instagram\.com\/p\/([a-zA-Z0-9_-]+)/,
    /instagram\.com\/reels\/([a-zA-Z0-9_-]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function detectPlatform(url: string): "youtube" | "instagram" {
  if (/youtube\.com|youtu\.be/i.test(url)) return "youtube";
  if (/instagram\.com/i.test(url)) return "instagram";
  return "youtube";
}

async function fetchInstagramThumbnail(id: string): Promise<string | undefined> {
  try {
    const res = await fetch(`https://api.instagram.com/oembed?url=https://www.instagram.com/reel/${id}/`);
    if (res.ok) {
      const data = await res.json();
      return data.thumbnail_url;
    }
  } catch {}
  return undefined;
}

export function mapProduct(sp: StrapiProduct): Product {
  const images = sp.photos?.length > 0 ? sp.photos.map((m) => mediaUrl(m)) : [];
  const cat = typeof sp.category === "string" ? null : sp.category;
  return {
    id: sp.id,
    name: sp.title,
    categoryId: cat?.id ?? 0,
    categoryName: cat?.title ?? "",
    categoryDocumentId: cat?.documentId ?? (typeof sp.category === "string" ? sp.category : ""),
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
    documentId: sc.documentId,
    name: sc.title,
    description: sc.description ?? "",
    image: sc.image ? mediaUrl(sc.image) : "",
  };
}

export function mapVideo(sv: StrapiVideo): Video {
  const platform = detectPlatform(sv.videoUrl);
  if (platform === "youtube") {
    return {
      title: sv.title,
      videoUrl: sv.videoUrl,
      platform: "youtube",
      id: extractYouTubeId(sv.videoUrl),
    };
  }
  return {
    title: sv.title,
    videoUrl: sv.videoUrl,
    platform: "instagram",
    id: extractInstagramId(sv.videoUrl) || sv.videoUrl,
  };
}

async function enrichVideos(videos: Video[]): Promise<Video[]> {
  await Promise.all(videos.map(async (v) => {
    if (v.platform === "instagram") {
      v.thumbnail = await fetchInstagramThumbnail(v.id);
    }
  }));
  return videos;
}

export async function fetchHomeCategories(): Promise<Category[]> {
  const res = await fetchStrapi<{ data: StrapiCategory[] }>(
    "/categories?filters[showOnHomepage][$eq]=true&populate=image",
  );
  return res.data.map(mapCategory);
}

export async function fetchHomeProducts(): Promise<Product[]> {
  const res = await fetch(
    strapiUrl("/products", {
      "filters[showOnHomepage][$eq]": "true",
      "populate[0]": "category",
      "populate[1]": "photos",
    }),
  );
  if (!res.ok) throw new Error(`Strapi API error: ${res.status}`);
  const json: { data: StrapiProduct[] } = await res.json();
  return json.data.map(mapProduct);
}

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(
    strapiUrl("/products", {
      "populate[0]": "category",
      "populate[1]": "photos",
    }),
  );
  if (!res.ok) throw new Error(`Strapi API error: ${res.status}`);
  const json: { data: StrapiProduct[] } = await res.json();
  return json.data.map(mapProduct);
}

export async function fetchAllCategories(): Promise<Category[]> {
  const res = await fetchStrapi<{ data: StrapiCategory[] }>("/categories?populate=image");
  return res.data.map(mapCategory);
}

export async function fetchVideos(): Promise<Video[]> {
  const res = await fetchStrapi<{ data: StrapiVideo[] }>("/videos");
  const videos = res.data.map(mapVideo);
  return enrichVideos(videos);
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
