# Kreo 📈

A full-stack web application for Indian stock analysis, live IPO Grey Market Premium (GMP) tracking, and fundamental stock evaluation.

Built with **React (Vite)** on the frontend, **FastAPI** on the backend, and **MongoDB Atlas** for data storage.

---

## Features

- 📊 **Fundamental Scoring**: Automatically evaluates stocks using key ratios (PE, PB, ROE, ROCE, Sales Growth, EPS) and outputs investment verdicts (*Strong Buy*, *Buy*, *Hold*, *Sell*, *Strong Sell*).
- 🇮🇳 **Live IPO GMP Tracker**: Real-time IPO GMP estimates, subscription numbers, issue details, and listing strategy suggestions.
- 😱 **Fear & Greed Index**: Visual market sentiment gauge and sector strength tracking.
- 📋 **Watchlists & Portfolio**: Create custom watchlists, track stock holdings, and monitor P&L.
- 🔐 **Authentication**: User accounts with password login + Google OAuth support.
- 🌙 **Dark Mode**: Clean dark UI with glassmorphism styling and mobile responsiveness.

---

## Tech Stack

- **Frontend**: React 19, Vite, React Router, Axios
- **Backend**: Python 3.11, FastAPI, Uvicorn, Motor (MongoDB async driver), Pydantic
- **Database**: MongoDB Atlas
- **Hosting**: Render (Backend API), Vercel (Frontend SPA)

---

## Local Setup

### 1. Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create a `backend/.env` file:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
FRONTEND_URL=http://localhost:5173
```

Run the backend server:
```bash
uvicorn main:app --reload --port 8000
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create a `frontend/.env` file:
```env
VITE_API_BASE=http://localhost:8000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

Run the dev server:
```bash
npm run dev
```

App will be available at `http://localhost:5173`.

---

## License

[MIT](./LICENSE)
