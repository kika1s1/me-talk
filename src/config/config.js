import dotenv from 'dotenv';
dotenv.config();

export const config = {
  TELEGRAM_API_ID: Number(process.env.TELEGRAM_API_ID),
  TELEGRAM_API_HASH: process.env.TELEGRAM_API_HASH,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  MONGODB_URI: process.env.MONGODB_URI,
  MESSAGE_TTL_DAYS: process.env.MESSAGE_TTL_DAYS || 7,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  SESSION_STRING: process.env.SESSION_STRING,
};
