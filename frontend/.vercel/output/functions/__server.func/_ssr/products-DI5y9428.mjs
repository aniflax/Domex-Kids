import { t as images } from "./site-config-D34R8I9m.mjs";
import { n as fetchAllProducts, t as fetchAllCategories } from "./strapi-Cs3xkAto.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DI5y9428.js
var $$splitComponentImporter = () => import("./products-BX9cZKlh.mjs");
var Route = createFileRoute("/products")({
	validateSearch: (search) => ({ category: Number(search.category) || 0 }),
	loader: async () => {
		const [cats, allProducts] = await Promise.all([fetchAllCategories().catch(() => []), fetchAllProducts().catch(() => [])]);
		return {
			cats,
			allProducts
		};
	},
	head: () => ({
		meta: [
			{ title: "Products — DOMEX KIDS Wholesale Kids Wear" },
			{
				name: "description",
				content: "Explore boys shirts, t-shirts and jeans — wholesale kids wear collections for ages 1–16 years."
			},
			{
				property: "og:title",
				content: "DOMEX KIDS Products"
			},
			{
				property: "og:description",
				content: "Wholesale kids wear collections — shirts, t-shirts, jeans."
			},
			{
				property: "og:image",
				content: images.editorial1
			},
			{
				property: "og:url",
				content: "/products"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
