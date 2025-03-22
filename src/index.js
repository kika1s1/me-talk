import { createTelegramClient } from './services/telegramService.js';
import { handleMessage } from './controllers/messageController.js';
import { connectDatabase } from './services/databaseService.js';
import { NewMessage } from 'telegram/events/index.js';

(async () => {
  await connectDatabase();
  const client = await createTelegramClient();

  client.addEventHandler(handleMessage, new NewMessage({}));
  
  console.log('Bot is running and listening for messages...');
})();
