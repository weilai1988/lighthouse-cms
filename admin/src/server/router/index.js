import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { saveUser, fetchUser } from '../controller/user';
import schema from '../graphql/schema';

const router = require('koa-router')();

router.post('/saveuser', saveUser);
router.get('/user', fetchUser);

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

module.exports = router;
