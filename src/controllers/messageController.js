import { getAIResponse } from "../services/geminiService.js";
import { Message } from "../models/Message.js";
import { logMessage } from "../utils/logger.js";
import { Api } from 'telegram';

export async function handleMessage(event) {
  const message = event.message;
  
  try {
    // Debug logging
    console.log('Processing message event:', {
      messageId: message?.id,
      fromId: message?.senderId,
      text: message?.text,
      chat: message?.chat,
      firstName: message?.sender?.firstName,
      lastName: message?.sender?.lastName
    });

    if (!message || !message.text) {
      console.log('Skipping non-text message');
      return;
    }

    // Extract the user ID and name from the message
    const userId = message.senderId?.value?.toString() || message.senderId?.toString();
    const userName = [message.sender?.firstName, message.sender?.lastName]
      .filter(Boolean)
      .join(' ');

    if (!userId) {
      console.log('Could not determine user ID, skipping message');
      return;
    }

    console.log(`Received message: ${message.text} from user ${userName || userId}`);

    try {
      // Retrieve previous messages for context from the DB
      const previousMessages = await Message.find({
        userId: userId
      }).sort({ timestamp: 1 });
      
      const context = previousMessages.map((msg) => ({
        role: msg.isFromBot ? "assistant" : "user",
        content: msg.text,
      }));

      // Get AI response using the conversation context
      const aiResponse = await getAIResponse(message.text, context);

      // Send the response back to the chat
      await event.message.reply({ message: aiResponse });

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

      logMessage(`Replied to ${userName || userId}: ${aiResponse}`);
    } catch (error) {
      console.error('AI Service Error:', error);
      const errorMessage = error.message?.includes('API key') 
        ? "Service configuration error. Please contact the administrator."
        : "I apologize, but I'm currently unable to process your request. Please try again later.";
      
      try {
        await event.message.reply({ message: errorMessage });
      } catch (sendError) {
        console.error('Failed to send error message:', sendError);
      }
    }
  } catch (error) {
    console.error('Error handling message:', error);
  }
}

// Simple language detection (can be made more sophisticated)
function detectLanguage(text) {
  // Check if the text contains Amharic characters
  const amharicPattern = /[\u1200-\u137F]/;
  return amharicPattern.test(text) ? 'am' : 'en';
}
