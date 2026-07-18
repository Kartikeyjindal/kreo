# SmartStocks 📈

A full-stack stock recommendation app using fundamental analysis, scoring logic, and verdict tiers.

## Tech Stack

- **Frontend**: React 19 + Vite + React Router
- **Backend**: Python FastAPI + MongoDB
- **Auth**: JWT + Google OAuth

---

## Running Locally

### 1. Backend Setup

```bash
cd backend

# Create & activate a virtual environment
python3 -m venv venv
source venv/bin/activate       # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create a .env file with these keys:
# MONGO_URI=<your MongoDB connection string>
# JWT_SECRET=<any random secret string>
# GOOGLE_CLIENT_ID=<your Google OAuth client ID>
# FRONTEND_URL=http://localhost:5173

# Start the server
uvicorn main:app --reload --port 8000
```

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# The .env file is already configured:
# VITE_API_BASE=http://localhost:8000

# Start the dev server
npm run dev
```

The app will open at **http://localhost:5173**

---

## Environment Variables

### Backend (`backend/.env`)
| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection URI (e.g. MongoDB Atlas) |
| `JWT_SECRET` | Secret key for JWT signing |
| `GOOGLE_CLIENT_ID` | Google OAuth 2.0 Client ID |
| `FRONTEND_URL` | URL of the frontend (`http://localhost:5173` for local) |

### Frontend (`frontend/.env`)
| Variable | Description |
|----------|-------------|
| `VITE_API_BASE` | URL of the backend (`http://localhost:8000` for local) |

---

## Features

- 🔍 Smart stock search with fuzzy matching
- 📊 Fundamental analysis (PE, PB, ROE, ROCE, EPS, etc.)
- 🏆 Verdict tiers: Strong Buy / Buy / Hold / Sell / Strong Sell
- 📋 Watchlists with create/rename/delete
- 🔐 Email + Google OAuth login
- 🌙 Dark mode
