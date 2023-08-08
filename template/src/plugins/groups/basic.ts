import { Group, macro } from '@stricjs/router';
import { users } from '../../databases';
import { qs } from '@stricjs/utils';
import { badReq } from '../../utils/responses';

const searchQuery = users.query('select name, age from Basic where id = $id'),
    // Only search for a single value of key 'id'
    getID = qs.searchKey('id');

export default new Group()
    // Response with 'Hi there!' on requests to '/'
    // For more info, see https://stricjs.gitbook.io/docs/basic/routing#using-macros
    .get('/', macro('Hi there!'))
    // Search for users 
    .get('/search', req => {
        const id = Number(getID(req));
        if (isNaN(id) || id < 0) return badReq();

        const result = searchQuery.get(id);
        if (result === undefined) return badReq();

        return Response.json(result);
    });

