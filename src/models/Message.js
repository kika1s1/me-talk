import mongoose from 'mongoose';
import { config } from '../config/config.js';

const MessageSchema = new mongoose.Schema({
  userId: String,
  text: String,
  timestamp: { type: Date, default: Date.now, expires: 86400 * config.MESSAGE_TTL_DAYS },
  userName: String,  // Store the user's name if available
  language: String,  // Track which language was used
  isFromBot: { type: Boolean, default: false }, // Distinguish between user and bot messages
});

export const Message = mongoose.model('Message', MessageSchema);
