// routes/html.tsx

/** @jsx h */
import { h } from "preact";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx: HandlerContext) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello World");
    return resp;
  },
};

export default function Page(props: PageProps) {
  return <div>You are on the page '{props.url.href}'.
      <p>NOTE! had to fix the handler to add req as first arg</p>
    </div>;
}
// corrected example code in the docs with:
// https://github.com/denoland/fresh/pull/357
