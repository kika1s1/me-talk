import mongoose from 'mongoose';
import { config } from '../config/config.js';

export async function connectDatabase() {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database Connection Error:', error);
  }
}
