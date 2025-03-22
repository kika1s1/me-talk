import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  username: String,
});

export const User = mongoose.model('User', UserSchema);
