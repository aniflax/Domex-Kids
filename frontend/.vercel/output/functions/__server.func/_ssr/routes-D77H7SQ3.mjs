import { t as images } from "./site-config-D34R8I9m.mjs";
import { a as fetchVideos, i as fetchHomeProducts, r as fetchHomeCategories } from "./strapi-Cs3xkAto.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D77H7SQ3.js
var $$splitComponentImporter = () => import("./routes-b3oIXwX-.mjs");
var Route = createFileRoute("/")({
	loader: async () => {
		const [homeCategories, homeProducts, videos] = await Promise.all([
			fetchHomeCategories().catch(() => []),
			fetchHomeProducts().catch(() => []),
			fetchVideos().catch(() => [])
		]);
		return {
			homeCategories,
			homeProducts,
			videos
		};
	},
	head: () => ({
		meta: [
			{ title: "DOMEX KIDS — Premium Wholesale Kids Wear Manufacturer" },
			{
				name: "description",
				content: "Premium kids wear manufacturer delivering trendy, comfortable and affordable garments to retailers across India since 2014."
			},
			{
				property: "og:title",
				content: "DOMEX KIDS — Premium Wholesale Kids Wear"
			},
			{
				property: "og:description",
				content: "Style that grows with every childhood. Wholesale kids garments from Delhi's Gandhi Nagar."
			},
			{
				property: "og:image",
				content: images.hero
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
