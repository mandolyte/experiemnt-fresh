// routes/github/[username].tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";


interface Project {
  name: string;
  stars: number;
}

export const handler: Handlers<Project> = {
  async GET(_req, ctx) {
    // const project = await db.projects.findOne({ id: ctx.params.id });
    const project = {name: "Cecil's Project", stars: 123};
    if (!project) {
      return new Response("Project not found", { status: 404 });
    }
    return ctx.render(project);
  },
};

export default function ProjectPage(props: PageProps<Project>) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.stars} stars</p>
    </div>
  );
}
