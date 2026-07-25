//#region node_modules/.nitro/vite/services/ssr/assets/strapi-Cs3xkAto.js
var STRAPI_URL = "http://localhost:1337";
async function fetchStrapi(endpoint) {
	const res = await fetch(`${STRAPI_URL}/api${endpoint}`);
	if (!res.ok) throw new Error(`Strapi API error: ${res.status}`);
	return res.json();
}
function mediaUrl(media) {
	let url = media.formats?.medium?.url || media.formats?.small?.url || media.url;
	url = url.replace("https://7429f0c7b407b1d7acb237af144dcc67.r2.cloudflarestorage.com", "https://pub-0de6857b497142ab923e109463ce4e64.r2.dev");
	if (url.startsWith("http")) return url;
	return `${STRAPI_URL}${url}`;
}
function extractYouTubeId(url) {
	for (const p of [/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/, /^([a-zA-Z0-9_-]{11})$/]) {
		const m = url.match(p);
		if (m) return m[1];
	}
	return url;
}
function mapProduct(sp) {
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
		description: sp.description ?? ""
	};
}
function mapCategory(sc) {
	return {
		id: sc.id,
		name: sc.title,
		description: sc.description ?? "",
		image: sc.image ? mediaUrl(sc.image) : ""
	};
}
function mapVideo(sv) {
	return {
		title: sv.title,
		videoUrl: sv.videoUrl,
		videoId: extractYouTubeId(sv.videoUrl)
	};
}
async function fetchHomeCategories() {
	return (await fetchStrapi("/categories?filters[showOnHomepage][$eq]=true&populate=image")).data.map(mapCategory);
}
async function fetchHomeProducts() {
	return (await fetchStrapi("/products?filters[showOnHomepage][$eq]=true&populate=category,photos")).data.map(mapProduct);
}
async function fetchAllProducts() {
	return (await fetchStrapi("/products?populate=category,photos")).data.map(mapProduct);
}
async function fetchAllCategories() {
	return (await fetchStrapi("/categories?populate=image")).data.map(mapCategory);
}
async function fetchVideos() {
	return (await fetchStrapi("/videos")).data.map(mapVideo);
}
//#endregion
export { fetchVideos as a, fetchHomeProducts as i, fetchAllProducts as n, fetchHomeCategories as r, fetchAllCategories as t };
