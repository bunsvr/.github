import plugins from './plugins';
import { Router } from '@stricjs/router';

export default new Router()
    .plug(...plugins)
    .use(404)
    .use(500);

