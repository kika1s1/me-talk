import { getAIResponse } from "../services/geminiService.js";
import { Message } from "../models/Message.js";
import { logMessage } from "../utils/logger.js";
import { telegramClient as client } from "../services/telegramService.js"; // Connected GramJS client

export async function handleMessage(event) {
  const message = event.message;
  
  try {
    // Skip if there's no message or no text
    if (!message || !message.text) {
      console.log("Skipping non-text message");
      return;
    }
    
    // Skip self-sent messages (messages sent by the userbot itself)
    if (message.out) {
      console.log("Skipping self-sent message");
      return;
    }
    
    // Only process private chats: Check that peerId exists and is of type "PeerUser"
    if (!message.peerId || message.peerId.className !== "PeerUser") {
      console.log("Skipping message from non-private chat");
      return;
    }
    
    // Extract the user ID and user name
    const userId = message.senderId?.value?.toString() || message.senderId?.toString();
    const userName = ([message.sender?.firstName, message.sender?.lastName]
                      .filter(Boolean)
                      .join(" ")) || userId;
    
    if (!userId) {
      console.log("Could not determine user ID, skipping message");
      return;
    }
    
    console.log(`Received message from ${userName}`);
    
    // Retrieve previous messages for context from the DB
    const previousMessages = await Message.find({ userId: userId }).sort({ timestamp: 1 });
    const context = previousMessages.map((msg) => ({
      role: msg.isFromBot ? "assistant" : "user",
      content: msg.text,
    }));
    
    // Get AI response using the conversation context
    const aiResponse = await getAIResponse(message.text, context);
    
    // Send the response directly to the user (not as a reply)
    await client.sendMessage(userId, { message: aiResponse });
    
    // Save both the user's message and the bot's response
    await Message.create([
      { 
        userId: userId,
        text: message.text,
        userName: userName,
        isFromBot: false,
        language: detectLanguage(message.text)
      },
      {
        userId: userId,
        text: aiResponse,
        userName: userName,
        isFromBot: true,
        language: detectLanguage(aiResponse)
      }
    ]);
    
    logMessage(`Sent direct message to ${userName || userId}: ${aiResponse}`);
  } catch (error) {
    console.error("Error handling message:", error);
  }
}

// Simple language detection (can be made more sophisticated)
function detectLanguage(text) {
  // Check if the text contains Amharic characters
  const amharicPattern = /[\u1200-\u137F]/;
  return amharicPattern.test(text) ? "am" : "en";
}
