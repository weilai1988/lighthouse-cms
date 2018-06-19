import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  password: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
});

UserSchema.pre('save', function (next) {
  const now = Date.now();
  if (this.isNew) {
    this.meta.createdAt = now;
    this.meta.updatedAt = now;
  } else {
    this.meta.updatedAt = now;
  }

  next();
});

mongoose.model('User', UserSchema);
