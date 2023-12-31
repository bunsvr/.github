# Stric
A web framework focused on performance and scalability.

```typescript
import { routes } from '@stricjs/app';
import { text, json } from '@stricjs/app/send';

// Each route file exports a routes store
export default routes()
    .get('/', () => text('Hi'))
    .post('/json', c => c.req.json().then(json));
}
```

Stric is one of the fastest Bun HTTP framework. See [benchmark](https://github.com/bunsvr/benchmark) for more details.

## License 
This license applied to the whole project, see [LICENSE.md](/LICENSE.md).
