import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions/index.js';
import input from 'input';
import { config } from '../config/config.js';

const stringSession = new StringSession(config.SESSION_STRING); // Empty string for the first run

export async function createTelegramClient() {
  console.log("Loading interactive example...");
  const client = new TelegramClient(
    stringSession,
    config.TELEGRAM_API_ID,
    config.TELEGRAM_API_HASH,
    { connectionRetries: 5 }
  );

  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });
  
  console.log("You should now be connected.");
  console.log("Session string:", client.session.save());
  return client;
}
