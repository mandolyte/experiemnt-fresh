# fresh project

Create the project:

```
deno run -A -r https://fresh.deno.dev fresh-mui
```


Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

I replaced the index.tsx with content using MUI components.
Then I save the file and these errors were shown:
```
error: TypeError: Relative import path "@mui/material/Box" not prefixed with / or ./ or ../ and not in import map from "file:///home/mando/Projects/github.com/mandolyte/experiemnt-fresh/fresh-mui/routes/index.tsx"
    at file:///home/mando/Projects/github.com/mandolyte/experiemnt-fresh/fresh-mui/routes/index.tsx:6:17
    at async dev (https://deno.land/x/fresh@1.0.0/src/dev/mod.ts:163:3)
    at async file:///home/mando/Projects/github.com/mandolyte/experiemnt-fresh/fresh-mui/dev.ts:5:1
Watcher Process finished. Restarting on file change...
```

**Plan A.**

So the errors point to using the import map. This is contents before modifying:
```json
{
  "imports": {
    "$fresh/": "https://deno.land/x/fresh@1.0.0/",
    "preact": "https://esm.sh/preact@10.8.1",
    "preact/": "https://esm.sh/preact@10.8.1/",
    "preact-render-to-string": "https://esm.sh/preact-render-to-string@5.2.0?deps=preact@10.8.1"
  }
}
```

Given: `import Container from '@mui/material/Container';`, it isn't clear how ot add this to the import map.

**Plan B.**

Add a package.json file and use yarn install to retrieve the packages. Then point to the file location.

Pointing to the folder of say Container did not work since it complained of it being a folder.

Then I add enough to get to the js file:
```ts
import Container from '../node_modules/@mui/material/Container/Container.js';
import Typography from '../node_modules/@mui/material/Typography/Typography.js';
import Box from '../node_modules/@mui/material/Box/Box.js';
```
That did not work either:

```
error: TypeError: Relative import path "@mui/system" not prefixed with / or ./ or ../ and not in import map from "file:///home/mando/Projects/github.com/mandolyte/experiemnt-fresh/fresh-mui/node_modules/@mui/material/Container/Container.js"
```

... since the imports of the files are not full path specs.

**Plan C.**

Update imports to use urls from a CDN... even tho I'm not sure what they should look like.
First this:
```ts
import Container from 'https://esm.sh/@mui/material/Container';
import Typography from 'https://esm.sh/@mui/material/Typography/Typography.js';
import Box from 'https://esm.sh/@mui/material/Box/Box.js';
```
This looked pretty good, download a lot of stuff and doing it transitively to pick up everything.

But at render build time, this:
```
Server listening on http://localhost:8000
An error occured during route handling or page rendering. Error: [object Object] is not a valid HTML tag name in <[object Object] maxWidth="sm">
```

So I removed that from the container attributes and saved.
From:
```
    <Container maxWidth="sm">
```
To:
```
    <Container >
```
Then:
```
Watcher File change detected! Restarting!
Server listening on http://localhost:8000
An error occured during route handling or page rendering. Error: [object Object] is not a valid HTML tag name in <[object Object]>
    at h (https://esm.sh/v86/preact-render-to-string@5.2.0/X-ZC9wcmVhY3RAMTAuOC4x/deno/preact-render-to-string.js:7:35)
    at h (https://esm.sh/v86/preact-render-to-string@5.2.0/X-ZC9wcmVhY3RAMTAuOC4x/deno/preact-render-to-string.js:4:1103)
```

Tried various other things, to no avail. It seems to think that the components cannot be used as valid HTML tags.