# Kreo 📈 — Indian Stock Analysis, IPO GMP & Investment Platform

A modern, full-stack stock analysis and investment platform tailored for the Indian stock market (NSE/BSE). Powered by fundamental analysis scoring algorithms, live IPO Grey Market Premium (GMP) tracking, Fear & Greed Index, sector heatmaps, watchlists, portfolio management, and interactive charts.

---

## 🌟 Key Features

- **🔍 Smart Stock Screener & Search**: Real-time search with fuzzy symbol and company name matching.
- **📊 Fundamental Analysis & Scoring Tiers**: Automated 100-point fundamental evaluation (PE, PB, ROE, ROCE, Sales Growth, Profit Growth, EPS, Dividend Yield) outputting clear verdicts (**Strong Buy**, **Buy**, **Hold**, **Sell**, **Strong Sell**).
- **🇮🇳 IPO Grey Market Premium (GMP)**: Live NSE IPO bidding demand, estimated listing gains, subscription rates, issue breakdowns (Fresh vs OFS), and listing day strategy metrics + Historical IPO performance.
- **😱 Fear & Greed Index & Sector Heatmap**: Market sentiment gauge with real-time sector strength heatmaps.
- **📋 Custom Watchlists**: Create, rename, and manage multiple stock watchlists.
- **💼 Portfolio & Trade Log**: Track holdings, average buy prices, profit/loss metrics, and execution history.
- **🔐 Secure Authentication**: JWT authentication supporting both Email/Password registration and Google OAuth 2.0.
- **🌙 Premium Dark Glassmorphism UI**: High-performance responsive design with Google Fonts (Inter), smooth CSS micro-animations, and dynamic visual indicators.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, React Router v6, Axios, Recharts, `@react-oauth/google`
- **Backend**: Python 3.11, FastAPI, Uvicorn / Gunicorn, Motor (Async MongoDB Driver), Pydantic v2, Python-Jose (JWT), Passlib (Bcrypt)
- **Database**: MongoDB Atlas (Cloud Managed NoSQL)
- **Deployment**: Render (Backend Web Service) + Vercel (Frontend Single Page Application)

---

## 🚀 Deployment Guide

### 1. Backend (Render)
- **Runtime**: Python 3 (pinned to `3.11.9`)
- **Root Directory**: `backend`
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- **Environment Variables**:
  - `MONGO_URI`: MongoDB Atlas connection string (`mongodb+srv://...`)
  - `JWT_SECRET`: Random secret string for JWT signing
  - `GOOGLE_CLIENT_ID`: Google OAuth 2.0 Client ID
  - `FRONTEND_URL`: URL of the deployed Vercel frontend

### 2. Frontend (Vercel)
- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_BASE`: Render Backend URL (e.g., `https://kreo-5cuc.onrender.com`)
  - `VITE_GOOGLE_CLIENT_ID`: Google OAuth 2.0 Client ID

---

## 💻 Running Locally

### 1. Prerequisites
- Python 3.10+
- Node.js 18+
- MongoDB (Local instance or MongoDB Atlas URI)

### 2. Backend Setup
```bash
cd backend

# Create & activate a Python virtual environment
python3 -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create a backend/.env file:
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/smartstocks?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
FRONTEND_URL=http://localhost:5173

# Start the FastAPI dev server
uvicorn main:app --reload --port 8000
```

### 3. Frontend Setup
```bash
cd frontend

# Install Node dependencies
npm install

# Create a frontend/.env file:
VITE_API_BASE=http://localhost:8000
VITE_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com

# Start the Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔒 Environment Variables Reference

### Backend (`backend/.env`)
| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas URI or local MongoDB connection string |
| `JWT_SECRET` | Secret key for signing JSON Web Tokens |
| `GOOGLE_CLIENT_ID` | Google OAuth 2.0 Web Application Client ID |
| `FRONTEND_URL` | Frontend origin URL for CORS policy enforcement |
| `FINNHUB_API_KEY` | *(Optional)* Finnhub API Key for real-time global market data |

### Frontend (`frontend/.env`)
| Variable | Description |
|----------|-------------|
| `VITE_API_BASE` | Base URL of the backend API (`http://localhost:8000` or Render URL) |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth 2.0 Client ID for `@react-oauth/google` |

---

## 📜 License

MIT License © 2026 Kartikey Jindal. All rights reserved.
