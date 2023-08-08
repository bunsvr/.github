import { Group } from '@stricjs/router';
import { guard, response } from '@stricjs/utils';
import { badReq } from '../../utils/responses';
import { users } from '../../databases';

// Validate the new data
const check = guard.create({
    name: 'str',
    age: 'num'
});

const userCount = users.query('select * from Basic'),
    insert = users.query('insert into Basic (id, name, age) values ($id, $name, $age)'),
    all = users.query('select * from Basic');

export default new Group('/admin')
    // Guard all sub-route of '/admin' and check for headers 
    // Return null to tell the fetch function to return a 404 response
    .guard('/', req => req.headers.get('Authorization') === 'admin' || null)
    // Return basic JSON if passed
    .get('/welcome', response({ message: 'Hi admin!' }))
    // Get all users
    .get('/user/all', () => Response.json(all.all()))
    // Add new user
    .post('/user/create', req => {
        const body = check(req.data);
        if (body === null) return badReq(); 

        const totalUsers = userCount.all().length;
        insert.run(totalUsers, body.name, body.age);

        // Return the new user id
        return new Response(String(totalUsers));
    }, { body: 'json' });
