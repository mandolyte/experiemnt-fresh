// routes/github/[username].tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
// import React from "https://esm.sh/react";
// import document from "https://esm.sh/react-dom";
// import ReactJson from "https://esm.sh/react-json-view";
// import ReactJson from 'react-json-view';


// interface Project {
//   name: string;
//   stars: number;
// }

export const handler: Handlers = {
  async GET(_req, ctx) {
    // const project = await db.projects.findOne({ id: ctx.params.id });
    const project = JSON.stringify({name: "Cecil's Project", stars: 123}, null, '  ');
    return ctx.render(project);
  },
};

export default function ProjectPage(props: PageProps<string>) {
  return (
    <div>
      <pre>{props.data}</pre>
    </div>
    // <ReactJson
    //   style={{ maxHeight: '500px', overflow: 'scroll', whiteSpace: 'pre' }}
    //   src={props.data}
    //   theme="monokai"
    // />
  );
}

/*
    <div>
      <h1>{props.data}</h1>
    </div>

    <ReactJson
      style={{ maxHeight: '500px', overflow: 'scroll', whiteSpace: 'pre' }}
      src={props.data}
      theme="monokai"
    />
*/
