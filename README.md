# Ganesh Prasad Panda - AI Chatbot

A modern, responsive AI chatbot powered by Google Gemini 2.0 Flash. Built with React, Vite, and Tailwind CSS, featuring a sleek dark theme interface that matches Google Gemini's design.

![AI Chatbot Preview](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.11-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)


## ✨ Features

- 🤖 **Google Gemini 2.0 Flash Integration** - Powered by the latest and fastest Gemini AI model
- 🎨 **Modern UI/UX** - Dark theme interface matching Google Gemini's exact color scheme
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Real-time Chat** - Instant AI responses with streaming support
- 🎯 **Markdown Support** - Rich text formatting in AI responses
- 🔒 **Secure API Key Storage** - Local storage for API key management
- 🌟 **Google Branding** - Official Google Gemini logo integration
- ⚙️ **Settings Modal** - Easy API key configuration

## 🚀 Demo

![Desktop View](https://via.placeholder.com/800x450/131314/e3e3e3?text=Desktop+View)
![Mobile View](https://via.placeholder.com/375x667/131314/e3e3e3?text=Mobile+View)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.11
- **Styling**: Tailwind CSS 3.4.17
- **AI Model**: Google Gemini 2.0 Flash
- **Icons**: Lucide React
- **Markdown**: React Markdown

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API Key ([Get one here](https://aistudio.google.com/app/apikey))

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-chatbot.git
   cd ai-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🎮 Usage

### Setting Up Your API Key

1. Click the **Settings** icon (⚙️) in the top-right corner
2. Enter your Google Gemini API key
3. Click **Save**
4. Start chatting!

### Getting a Free API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

**Free Tier Limits:**
- **Gemini 2.0 Flash**: 15 requests/minute, 1,500 requests/day
- **Lifetime Free** - No credit card required!

## 📱 Responsive Design

The chatbot is fully responsive across all devices:

- **Mobile** (< 640px): Compact layout, hidden attachment buttons
- **Tablet** (≥ 640px): Medium sizing with balanced spacing
- **Desktop** (≥ 1920px): Full desktop experience

## 🎨 Color Scheme

Exact Google Gemini dark theme colors:

```javascript
{
  background: {
    primary: '#131314',
    secondary: '#1c1c1d',
    tertiary: '#2a2a2b'
  },
  text: {
    primary: '#e3e3e3',
    secondary: '#a0a0a0',
    muted: '#6b6b6b'
  },
  accent: {
    primary: '#1f3760',
    secondary: '#333537'
  }
}
```

## 📂 Project Structure

```
ai-chatbot/
├── public/
├── src/
│   ├── components/
│   │   ├── Chat/
│   │   │   ├── ChatArea.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   └── MessageList.jsx
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   └── MainLayout.jsx
│   │   └── UI/
│   │       ├── GoogleGeminiLogo.jsx
│   │       └── SettingsModal.jsx
│   ├── services/
│   │   └── gemini.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📦 Deployment on Netlify

This project is deployed on **Netlify**. Follow these steps to deploy your own instance:

### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ai-chatbot.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 or higher

4. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add variable:
     - **Key**: `VITE_GEMINI_API_KEY`
     - **Value**: Your Google Gemini API key
   - Click "Save"

5. **Deploy**
   - Click "Deploy site"
   - Wait for deployment to complete
   - Your site will be live at `https://your-site-name.netlify.app`

### Method 2: Manual Deploy (Drag & Drop)

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `dist/` folder
   - Your site will be deployed instantly!

3. **Configure Environment Variables** (Important!)
   - Go to your site dashboard
   - Navigate to Site settings → Environment variables
   - Add `VITE_GEMINI_API_KEY` with your API key
   - Trigger a new deployment for changes to take effect

### Netlify Configuration File (Optional)

Create a `netlify.toml` file in the root directory for advanced configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## 🌐 Live Demo

**Deployed on Netlify**: [View Live Demo](https://your-site-name.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ganesh Prasad Panda**

- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Google Gemini](https://deepmind.google/technologies/gemini/) for the amazing AI model
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for beautiful icons
- [React Markdown](https://remarkjs.github.io/react-markdown/) for markdown rendering

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](https://via.placeholder.com/1200x675/131314/e3e3e3?text=Desktop+View)

### Mobile View
![Mobile Screenshot](https://via.placeholder.com/375x812/131314/e3e3e3?text=Mobile+View)

### Settings Modal
![Settings Screenshot](https://via.placeholder.com/600x400/131314/e3e3e3?text=Settings+Modal)

---

<div align="center">
  <p>Made with ❤️ by Ganesh Prasad Panda</p>
  <p>Powered by Google Gemini 2.0 Flash</p>
</div>
