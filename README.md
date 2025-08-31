# MAS Frontend Dashboard

A modern React/Next.js frontend for the Multi-Agent System (MAS) built for Vercel deployment.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CHAIN-RAPTOR/mas-frontend)

## 📋 Environment Variables

Set these in your Vercel dashboard:

```
NEXT_PUBLIC_MAS_API_URL=https://api-mas.cyberellum.technology
NEXT_PUBLIC_MAS_API_KEY=sk-super-secret-key-12345
```

## 🛠️ Local Development

```bash
npm install
npm run dev
```

## ✨ Features

- 📊 **Real-time Dashboard** - System status, metrics, recent activity
- 🚀 **Mission Dispatch** - Send missions to MAS agents
- 📈 **System Monitor** - CPU, memory, disk, network monitoring
- 🤖 **Agent Manager** - View and manage all MAS agents

## 🏗️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - API client
- **Vercel** - Deployment platform

## 📁 Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── MissionDispatch.tsx
│   ├── SystemMonitor.tsx
│   └── AgentManager.tsx
├── lib/               # Utilities
│   └── api.ts         # MAS API client
├── types/             # TypeScript types
│   └── mas.ts         # MAS interfaces
└── package.json       # Dependencies
```

## 🔧 Configuration

The app automatically connects to your MAS API using the environment variables. Make sure your MAS API is running and accessible.

## 📄 License

MIT
