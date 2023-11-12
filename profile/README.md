<h1>Stric</h1><br/>
A web framework focused on performance and scalability.

```typescript
import { routes } from '@stricjs/app';
import { text, json } from '@stricjs/app/send';

// Each route file exports a main function
export function main() {
    return routes()
        .get('/', () => text('Hi'))
        .post('/json', c => c.json().then(json));
}
```

Stric is one of the fastest Bun HTTP framework. See [benchmark](https://github.com/bunsvr/benchmark) for more details.

<h2>License</h2><br/>
This license applied to the whole project, see [LICENSE.md](/LICENSE.md).
