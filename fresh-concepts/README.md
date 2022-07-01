# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

# Concepts

## architecture

Quoting:
> Fresh is designed to make it easy to build fast, scalable, and reliable applications. To do this, it makes opinionated decisions about how one should build web applications. These decisions are backed by strong empirical data gathered from experts in the field. Some examples of these principles are:

> - Page load times should be reduced to a minimum.
> - The work performed on the client should be minimized.
> - Errors should have a small blast radius - stuff should gracefully degrade.

> The single biggest architecture decision that Fresh makes is its usage of the islands architecture pattern. This means that Fresh applications ship pure HTML to the client by default. Parts of server-rendered page can then be independently re-hydrated with interactive widgets (islands). This means that the client is only responsible for rendering parts of the page that are interactive enough to warrant the extra effort. Any content that is purely static does not have related client-side JavaScript and is thus very lightweight.

## routes

NOTE: doc error on https://fresh.deno.dev/docs/concepts/routes
the GET requires both req and ctx as args.

Quoting:

> At their core, routes describe how a request for a given path should be handled, and what the response should be. To do this, routes have two main parts: the handler, and the component. A route can have either one, or both, but never neither.

> The handler is a function that is called for every request to the route. It needs to return a response that is then sent to the client. The response could be anything: a plain text string, a JSON object, an HTML page, a WebSocket connection, a streaming file, or pretty much anything else. The handler is passed a render function that it can call to invoke rendering a component.

> The component is the template for a page. It is a JSX element that is rendered on the server. The page component gets passed props that can be used by it to determine exactly what should be rendered. By default components receives props consisting of: the request URL, the matches from the URL pattern match, and any data passed to the handler's render function.

## islands

Quoting:
> Islands enable client side interactivity in Fresh. Islands are isolated Preact components that are rendered on the client. This is different from all other components in Fresh, as they are usually just rendered on the server.

> Islands are defined by creating a file in the islands/ folder in a Fresh project. The name of this file must be a PascalCase name of the island. The file must have a default export that is a regular preact component.

Some interesting constraints:
> Passing props to islands is supported, but only if the props are JSON serializable. This means that you can only pass primitive types, plain objects, and arrays. It is currently not possible to pass complex objects like Date, custom classes, or functions. This means that it is not possible to pass children to an island, as children are VNodes, which are not serializable.

> It is also not supported to nest islands within other islands.

