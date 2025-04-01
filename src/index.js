import { createTelegramClient } from './services/telegramService.js';
import { handleMessage } from './controllers/messageController.js';
import { connectDatabase } from './services/databaseService.js';
import { NewMessage } from 'telegram/events/index.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
// Health check route for UptimeRobot
app.get('/live', (req, res) => {
  res.json({"message":'Dude bot is alive!'});
});
(async () => {
  await connectDatabase();
  const client = await createTelegramClient();

  client.addEventHandler(handleMessage, new NewMessage({}));
  
  console.log('Bot is running and listening for messages...');
})();

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});