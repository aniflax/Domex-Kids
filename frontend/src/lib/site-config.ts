// DOMEX KIDS — Central config. Replace values here to update site-wide.
export const site = {
  name: "DOMEX KIDS",
  tagline: "Style That Grows With Every Childhood.",
  founded: 2014,
  address: {
    line1: "9/7075, Guru Nanak Gali",
    line2: "Gandhi Nagar",
    city: "Delhi",
    postal: "110031",
    country: "India",
  },
  phones: ["9899977787", "9899977784", "9625248588"],
  whatsapp: "919899977787", // international format for wa.me
  email: "creativebusinesstalk@gmail.com",
  hours: "Tuesday – Sunday · 9:00 AM – 6:00 PM (Monday Closed)",
  social: {
    instagram: "https://instagram.com/",
    youtube: "https://www.youtube.com/@DomexKids/featured",
  },
  // REPLACE: Google Maps embed URL (centered on Gandhi Nagar, Delhi)
  mapEmbedUrl:
    "https://www.google.com/maps?q=Gandhi+Nagar,+Delhi+110031&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Gandhi+Nagar+Delhi+110031",
  // REPLACE: brand assets
  logoText: "DOMEX KIDS",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/founder", label: "Founder" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/contact", label: "Contact" },
] as const;

// Replaceable Unsplash placeholder images (royalty-free)
export const images = {
  hero: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=1600&q=80",
  heroSide: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=1200&q=80",
  aboutLarge: "https://images.unsplash.com/photo-1503944168849-8bf86651b1d7?auto=format&fit=crop&w=1200&q=80",
  founder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
  factory1: "https://images.unsplash.com/photo-1581091012184-7a1fd6c3c1a1?auto=format&fit=crop&w=1200&q=80",
  factory2: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  factory3: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
  factory4: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  factory5: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
  wholesale: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=80",
  editorial1: "https://images.unsplash.com/photo-1518831959646-742c3a14ceb7?auto=format&fit=crop&w=1200&q=80",
  editorial2: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80",
  editorial3: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
};

export const categories = [
  { slug: "all", name: "All" },
  { slug: "shirts", name: "Shirts" },
  { slug: "t-shirts", name: "T-Shirts" },
  { slug: "jeans", name: "Jeans" },
] as const;

export const products = [
  {
    slug: "boys-shirts",
    name: "Boys Shirts",
    category: "shirts",
    tagline: "Crisp cottons, modern cuts",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ceb7?auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Everyday and occasion shirts crafted from breathable, durable fabrics with contemporary silhouettes.",
  },
  {
    slug: "boys-t-shirts",
    name: "Boys T-Shirts",
    category: "t-shirts",
    tagline: "Soft knits, everyday ease",
    image: "https://images.unsplash.com/photo-1503944168849-8bf86651b1d7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Premium jersey tees with printed and plain variants — designed for movement and long wear.",
  },
  {
    slug: "boys-jeans",
    name: "Boys Jeans",
    category: "jeans",
    tagline: "Denim built for play",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Stretch denim in modern washes — engineered to last through every childhood adventure.",
  },
];
