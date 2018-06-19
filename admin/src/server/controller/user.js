import mongoose from 'mongoose';

const UserModel = mongoose.model('User');

export const saveUser = async (ctx, next) => {
  const opts = ctx.request.body;
  const user = new UserModel(opts);
  const data = await user.save();

  if (data) {
    ctx.body = {
      success: true,
      data,
    };
  } else {
    ctx.body = {
      success: false,
    };
  }

  next();
};


export const fetchUser = async (ctx, next) => {
  const data = await UserModel.find({});

  if (data.length) {
    ctx.body = {
      success: true,
      data,
    };
  } else {
    ctx.body = {
      success: false,
    };
  }

  next();
};

