import './App.css';
import Navbar from './components/www/site/Navbar';
import AppRoutes from './routes/AppRoutes';
import { Header } from './components/www/site/Header';
import Footer from './components/www/site/Footer';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background selection:bg-primary/30">
      {/* Fondo decorativo moderno */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10" />
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px] dark:bg-primary/5" />
      </div>

      <Header />
      
      <main className="flex-grow container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AppRoutes />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;