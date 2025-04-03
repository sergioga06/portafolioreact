import './App.css';
import { useState } from 'react';
import Navbar from './components/www/site/Navbar';
import AppRoutes from './routes/AppRoutes';
import { Header } from './components/www/site/Header';
import Footer from './components/www/site/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;