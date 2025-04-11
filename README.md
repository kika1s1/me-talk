# Me-Talk 🤖

<div align="center">

![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
[![License](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](LICENSE)

</div>

## 📖 Overview

A personalized Telegram userbot powered by Gemini AI that acts as my digital twin. It maintains context-aware conversations in both English and Amharic, representing my personality and expertise as a Computer Science student at ASTU.

### ✨ Key Features

- 🤖 **AI-Powered**: Utilizes Google's Gemini 2.0 Flash model for intelligent responses
- 🌍 **Bilingual**: Seamlessly handles both English and Amharic
- 🧠 **Context-Aware**: Maintains conversation history and context
- 👤 **Personalized**: Responds with my personality and expertise
- 📝 **Auto-Managing**: Handles message history with TTL
- 🔄 **Integrated**: Seamless Telegram integration
- 🗄️ **Persistent**: MongoDB-based storage

## 🚀 Getting Started

### Prerequisites

Before running the bot, ensure you have:

- Node.js (v14 or higher)
- MongoDB instance
- Telegram API credentials
- Google Gemini API key

### Installation

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd me-talk
   npm install
   ```

2. **Configure Environment**
   
   Create a `.env` file:
   ```env
   TELEGRAM_API_ID=your_telegram_api_id
   TELEGRAM_API_HASH=your_telegram_api_hash
   GEMINI_API_KEY=your_gemini_api_key
   MONGODB_URI=your_mongodb_uri
   MESSAGE_TTL_DAYS=7
   ```

3. **Start the Bot**
   ```bash
   npm start
   ```

### First Run Setup

On first run, you'll need to:
1. Enter your phone number
2. Input the Telegram verification code
3. Provide 2FA password (if enabled)

## 🎯 Features in Detail

### 💬 Conversation Management

- **History Tracking**: MongoDB-based chat history
- **Auto Cleanup**: TTL-based message expiration
- **User Context**: Maintains user information and preferences
- **Language Detection**: Automatic Amharic/English detection

### 🤖 AI Integration

- **Fast Responses**: Gemini 2.0 Flash for quick processing
- **Context Awareness**: Maintains conversation flow
- **Technical Knowledge**: Leverages my CS background
- **Personality Matching**: Maintains my communication style

### 📊 System Architecture

```
me-talk/
├── src/
│   ├── controllers/   # Message handling
│   ├── models/        # Data schemas
│   ├── services/      # Core services
│   ├── utils/         # Utilities
│   ├── config/        # Configuration
│   └── index.js       # Entry point
```

## 🛠️ Configuration

The bot represents me with the following context:

- 🎓 Computer Science student at ASTU
- 💻 Passionate about software development
- 🌐 Bilingual (English & Amharic)
- 👥 Professional yet friendly personality

> Customize the bot's personality in `src/services/geminiService.js`

## ⚠️ Error Handling

Robust error handling for:
- API credential issues
- Network disruptions
- Service interruptions
- Message delivery failures

## 👤 About Me

**Tamirat Kebede**
- 🎓Software Engineering Student at ASTU
- 💻 Passionate about AI and Software Development
- 🌐 Bilingual in English, Amharic and Afaan Oromo

## 📝 License

This project is licensed under the ISC License.

---

<div align="center">
Made with ❤️ by <a href="https://github.com/kika1s1">Tamirat Kebede</a>
</div>
