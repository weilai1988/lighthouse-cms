import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import mongoose from 'mongoose';
import { UserType } from './_types';

const User = mongoose.model('User');

export const users = {
  type: new GraphQLList(UserType),
  args: {},
  resolve() {
    return User.find({}).exec();
  },
};

export const user = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    return User.findOne({ _id: params.id }).exec();
  },
};
