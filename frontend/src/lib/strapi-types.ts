export type StrapiMedia = {
  id: number;
  url: string;
  alternativeText: string | null;
  name: string;
  formats?: Record<string, { url: string }>;
};

export type StrapiCategory = {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  showOnHomepage: boolean;
  image: StrapiMedia | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiProduct = {
  id: number;
  documentId: string;
  title: string;
  tagline: string | null;
  subText: string | null;
  description: string | null;
  showOnHomepage: boolean;
  price: number | null;
  category: StrapiCategory | null;
  photos: StrapiMedia[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiVideo = {
  id: number;
  documentId: string;
  title: string;
  videoUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Product = {
  id: number;
  name: string;
  categoryId: number;
  categoryName: string;
  categoryDocumentId: string;
  tagline: string;
  subText: string;
  price: number | null;
  image: string;
  gallery: string[];
  description: string;
};

export type Category = {
  id: number;
  documentId: string;
  name: string;
  description: string;
  image: string;
};

export type Video = {
  title: string;
  videoUrl: string;
  videoId: string;
};
