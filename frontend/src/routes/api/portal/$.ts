import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

async function proxy(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const splat = url.pathname.replace(/^\/api\/portal\/?/, "");
  const target = `${STRAPI_URL}/api/${splat}${url.search}`;

  const headers = new Headers();
  const auth = request.headers.get("authorization");
  if (auth) headers.set("authorization", auth);
  const contentType = request.headers.get("content-type");
  if (contentType) headers.set("content-type", contentType);

  let body: BodyInit | undefined;
  if (!["GET", "HEAD"].includes(request.method)) {
    body = await request.text();
  }

  const upstream = await fetch(target, { method: request.method, headers, body });
  const responseHeaders = new Headers();
  const upstreamType = upstream.headers.get("content-type");
  if (upstreamType) responseHeaders.set("content-type", upstreamType);
  return new Response(upstream.body, { status: upstream.status, headers: responseHeaders });
}

const handler = ({ request }: { request: Request }) => proxy(request);

export const Route = createFileRoute("/api/portal/$")({
  server: {
    handlers: {
      GET: handler,
      POST: handler,
      PUT: handler,
      PATCH: handler,
      DELETE: handler,
    },
  },
});
