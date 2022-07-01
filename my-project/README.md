# fresh project

## Links

Docs: https://fresh.deno.dev/docs/getting-started
Deno installation: https://deno.land/manual/getting_started/installation
Netlify support: https://deno.com/blog/netlify-edge-functions-on-deno-deploy


## Usage

Create the sample project:
```sh
deno run -A -r https://fresh.deno.dev my-project
```

Start the project:

```sh
deno task start
```

This will watch the project directory and restart as necessary.

## Notes

### Getting Started

There is no "package.json", but there is a "deno.json". Scripts are defined there.
It also points to an "import map".

`deno.json`:
```json
{
  "tasks": {
    "start": "deno run -A --watch=static/,routes/ dev.ts"
  },
  "importMap": "./import_map.json"
}
```

`import_map.json`:
```json
{
  "imports": {
    "$fresh/": "https://deno.land/x/fresh@1.0.0-rc.3/",
    "preact": "https://esm.sh/preact@10.8.1",
    "preact/": "https://esm.sh/preact@10.8.1/",
    "preact-render-to-string": "https://esm.sh/preact-render-to-string@5.2.0?deps=preact@10.8.1",
    "$twind": "https://esm.sh/twind@0.16.17",
    "$twind/": "https://esm.sh/twind@0.16.17/",
    "twind": "./utils/twind.ts"
  }
}
```

*No need for yarn or npm. There is no "build" step as such.*

### Routes

Nice... routes are handled by convention. Just put the files under the "routes" folder. Then:
- index.tsx is routed to by "/"
- about.tsx is routed by by "/about"
- a filepath named "/about/contact.tsx" is routed to by "/about/contact"

Dynamic routes are handled also by convention.
The route "/greet/:name" is served by "/greet/[name].tsx".

The component is provided the info in the URL via the "PageProps" parameter.
Thus these lines in the file:
```ts
import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  console.log("PageProps:", props);
  const { name } = props.params;
```

I added the "console.log" and the output goes to the terminal window, not the browser console.
Not what I expected. If the 

### Handlers

A handler is a way for a route (ie, a page) to fetch data needed (or other asynchronous activities).

Thus the component does not directly fetch the data; this is a nice separation of concerns.

In this example: https://fresh.deno.dev/docs/getting-started/fetching-data, 
data is fetched from Github and then returned via the context (the render function actually).

The component then is provided the data via its properties.

### Islands

Fresh supports the Island Architecture. Link: https://jasonformat.com/islands-architecture/.

The idea is that in a mostly static page, there will be small bits of highly interactive components.
Thus the term "islands" -- in the midst of an ocean.

In the example, a countdown component is created in the islands folder.
Then a page is created under the routes folder to use it.
- Component: `islands/Countdown.tsx`
- Page (route): `routes/countdown.tsx`

Note that the countdown component looks familiar since it uses useEffect/useState, etc. -- 
just normal parts of React. Remember is use `preact` version of React. Thus the import:
```ts
import { useEffect, useState } from "preact/hooks";
```


### Deploy

This [section](https://fresh.deno.dev/docs/getting-started/deploy-to-production) is about
deploying to the deno edge. Similar to netlify, I assume. But I decided not to try that.

