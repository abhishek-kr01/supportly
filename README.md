# Supportly 🚀

Supportly is an AI-powered customer support platform that helps businesses create, train, and embed intelligent AI chat assistants directly into their websites.

Built with modern web technologies and Google Gemini AI, Supportly enables businesses to automate customer interactions, provide instant responses, and improve customer support efficiency using custom business knowledge.

---

## ✨ Features

### 🔐 Authentication
- Secure authentication with Scalekit
- Protected dashboard routes
- Session management
- Login & logout functionality

### 🤖 AI Customer Support
- AI-powered responses using Google Gemini
- Custom AI knowledge training
- FAQ and support information handling
- 24/7 automated customer support
- Business-specific AI assistant behavior

### 🌐 Embeddable Chat Widget
- Lightweight embeddable chatbot script
- Easy website integration
- Plug-and-play setup
- Works across modern websites

### 📊 Dashboard Management
- Configure business information
- Manage support email and AI knowledge
- Save and update chatbot settings
- Real-time AI configuration experience

### 🎨 Modern SaaS UI
- Responsive design
- Smooth animations
- Modern dark theme
- Glassmorphism-inspired interface

---

# 🛠️ Tech Stack

## Frontend
- Next.js 16
- TypeScript
- Tailwind CSS
- Motion

## Backend & AI
- Next.js API Routes
- MongoDB
- Mongoose
- Google Gemini API

## Authentication
- Scalekit

## Deployment
- Vercel

---

# 📂 Folder Structure

```bash
supportly/
├── public/
│   └── chatBot.js
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── callback/
│   │   │   │   ├── login/
│   │   │   │   └── logout/
│   │   │   │
│   │   │   ├── chat/
│   │   │   └── settings/
│   │   │
│   │   ├── dashboard/
│   │   ├── embed/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── DashboardClient.tsx
│   │   ├── EmbedClient.tsx
│   │   └── HomeClient.tsx
│   │
│   ├── lib/
│   │
│   ├── model/
│   ├── proxy.ts
│   └── types.d.ts
│
├── .env.local
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000

MONGODB_URI=your_mongodb_connection_string

GEMINI_API_KEY=your_gemini_api_key

SCALEKIT_CLIENT_ID=your_scalekit_client_id
SCALEKIT_CLIENT_SECRET=your_scalekit_client_secret
SCALEKIT_ENVIRONMENT_URL=your_scalekit_env_url
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/abhishek-kr01/supportly.git
```

## Navigate into the project

```bash
cd supportly
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🧠 How Supportly Works

1. Businesses configure their AI support assistant.
2. Business knowledge is stored inside MongoDB.
3. Customers interact with the embeddable chatbot widget.
4. Google Gemini generates AI responses using business information.
5. Businesses can update and manage chatbot settings anytime.

---

# 🌟 Future Improvements

- Real-time AI streaming responses
- Chat history management
- Multi-tenant SaaS architecture
- AI analytics dashboard
- Team collaboration support
- Billing & subscriptions
- Multi-language AI support
- File & document AI training

---

# 📌 Project Status

🚧 Currently under active development.

Supportly is being built as a modern AI SaaS product focused on simplifying customer support automation for businesses.

---

# 👨‍💻 Author

Built by Abhishek Kumar

GitHub: https://github.com/abhishek-kr01

---

# ⭐ Support

If you like this project, consider giving it a star on GitHub.