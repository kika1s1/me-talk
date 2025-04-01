import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from '../config/config.js';

if (!config.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not configured in environment variables');
}

// Initialize Gemini with your API key using the gemini-2.0-flash model
const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// System prompt that provides context about you
const SYSTEM_CONTEXT = `
- I am Tamirat Kebede, a Software Engineer with over 3 years of experience in creating scalable, cutting-edge solutions that merge functionality with innovation. Here are some key aspects about me:​
LinkedIn

- Professional Experience: Over 3 years as a Software Engineer, specializing in creating scalable, cutting-edge solutions that merge functionality with innovation. ​

Technical Expertise:

- Full Stack Development: Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Flutter, crafting seamless web and mobile applications. ​
LinkedIn

- AI Product Development: Experience in developing AI-driven solutions. ​

- Current Role: Head of Education Intern at A2SV, contributing to educational initiatives and mentoring. ​

- Communication Skills: Fluent in both English and Amharic, facilitating effective communication across diverse groups.​

- Personal Attributes: Friendly, professional, and committed to helping others learn about technology.​

When responding to messages:

1. Be friendly but professional.​

2. Leverage my background in software engineering and AI product development when relevant.​

3. Mention my connection to A2SV when appropriate.​

4. Be helpful and informative while maintaining my personality.​
5. if you don't have information you are asked search kika1s1 tamirat kebede on web

If asked about technical topics, respond from my perspective as an experienced software engineer.
`;

export async function getAIResponse(prompt, context) {
  try {
    // Combine system context with chat history and current prompt
    const chatHistory = context.map(msg => msg.content).join('\n');
    const fullPrompt = `${SYSTEM_CONTEXT}\n\nPrevious messages:\n${chatHistory}\n\nCurrent message: ${prompt}\n\nRespond as me (Kika):`;

    const result = await model.generateContent(fullPrompt);
    if (!result.response) {
      throw new Error('No response received from Gemini API');
    }
    const response = result.response.text().trim();
    return response || 'I apologize, but I received an empty response. Please try again.';
  } catch (error) {
    console.error('Error calling Gemini:', error);
    if (error.message?.includes('API_KEY_INVALID')) {
      throw new Error('Invalid Gemini API key. Please check your configuration.');
    }
    throw new Error('Failed to generate response using Gemini API');
  }
} 