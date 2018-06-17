import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export const metaObject = new GraphQLObjectType({
  name: 'meta',
  fields: {
    createdAt: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
  },
});

// Schema User
export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: GraphQLID,
    },
    username: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    meta: {
      type: metaObject,
    },
  },
});
