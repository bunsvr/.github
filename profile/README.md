A web framework for a new generation of JavaScript, [Bun.js](https://bun.sh)!

```typescript
import { Router } from "@stricjs/router";

// Create a new router
export default new Router()
    // Add a route handler
    .get("/", () => new Response("Hello!"))
```

Stric is one of the fastest Bun HTTP framework. See [benchmark](https://github.com/bunsvr/benchmark) for more details.

The documentation is under construction, you can see it [here](https://stricjs.gitbook.io).

# License 
This license applied to the whole project, see [LICENSE.md](/LICENSE.md).
