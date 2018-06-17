import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import { users, user } from './user';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      users,
      user,
    },
  }),
});
