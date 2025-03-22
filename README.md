# Me-Talk Telegram Userbot

A personalized Telegram userbot that represents me (Tamirat Kebede) and interacts with friends and colleagues using the Gemini AI model. The bot maintains context-aware conversations, understands both English and Amharic, and responds with my personality and expertise as a Software Engineer.

## Features

- 🤖 Powered by Google's Gemini 2.0 Flash AI model
- 💬 Supports both English and Amharic languages
- 🧠 Maintains conversation context and history
- 👤 Personalized responses based on my background and expertise
- 📝 Automatic message history management with TTL
- 🔄 Seamless integration with Telegram
- 🗄️ MongoDB-based message storage

## Prerequisites

Before running the bot, make sure you have:

- Node.js (v14 or higher)
- MongoDB instance
- Telegram API credentials (API ID and Hash)
- Google Gemini API key

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd me-talk
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following configuration:
```env
TELEGRAM_API_ID=your_telegram_api_id
TELEGRAM_API_HASH=your_telegram_api_hash
GEMINI_API_KEY=your_gemini_api_key
MONGODB_URI=your_mongodb_connection_string
MESSAGE_TTL_DAYS=7
```

## Configuration

The bot is configured to represent me with the following context:

- Professional background as a Software Engineer with 3+ years experience
- Expertise in MERN stack and Flutter development
- Current role as Head of Education Intern at A2SV
- Bilingual communication in English and Amharic
- Professional yet friendly personality

You can modify the system context in `src/services/geminiService.js` to customize the bot's personality and knowledge base.

## Project Structure

```
me-talk/
├── src/
│   ├── controllers/
│   │   └── messageController.js    # Message handling logic
│   ├── models/
│   │   └── Message.js             # MongoDB message schema
│   ├── services/
│   │   ├── geminiService.js       # AI integration
│   │   └── telegramService.js     # Telegram client setup
│   ├── utils/
│   │   └── logger.js              # Logging utility
│   ├── config/
│   │   └── config.js             # Configuration management
│   └── index.js                  # Application entry point
├── package.json
└── README.md
```

## Usage

1. Start the bot:
```bash
npm start
```

2. On first run, you'll be prompted to:
   - Enter your phone number
   - Enter the verification code sent to your Telegram
   - Enter your 2FA password (if enabled)

3. The bot will now respond to messages sent to your account, maintaining conversations and context.

## Features in Detail

### Conversation Context
- Maintains chat history with MongoDB
- Automatically expires old messages based on TTL
- Tracks user information and language preferences

### Language Support
- Automatically detects Amharic and English text
- Responds in the same language as the received message
- Handles multilingual conversations seamlessly

### AI Integration
- Uses Gemini 2.0 Flash for fast, context-aware responses
- Maintains professional tone while being friendly
- Leverages my technical background for relevant discussions

### Message Management
- Stores message history with user context
- Tracks conversation language
- Distinguishes between user and bot messages
- Implements automatic cleanup of old messages

## Error Handling

The bot includes robust error handling for:
- Invalid API credentials
- Network issues
- AI service disruptions
- Message delivery failures

## Contributing

Feel free to submit issues and enhancement requests!

## License

ISC License

## Contact

Tamirat Kebede
- LinkedIn: [Profile]
- Role: Head of Education Intern at A2SV
- Expertise: Software Engineering, AI Product Development

---

*Note: This is a personal userbot that represents me in Telegram conversations. It's designed to maintain my professional image while providing helpful and context-aware responses to friends and colleagues.*
#   m e - t a l k  
 