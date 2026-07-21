import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Watchlists from './pages/Watchlists';
import StockView from './pages/StockView';
import Compare from './pages/Compare';
import IpoAnalysis from './pages/IpoAnalysis';
import Screener from './pages/Screener';
import Portfolio from './pages/Portfolio';
import Alerts from './pages/Alerts';
import { useAuth } from './context/AuthContext';
import './App.css';

function App() {
  const { user } = useAuth();

  if (!user) return <Login />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlists" element={<Watchlists />} />
        <Route path="/screener" element={<Screener />} />
        <Route path="/stock/:symbol" element={<StockView />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/ipos" element={<IpoAnalysis />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
