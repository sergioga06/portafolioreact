import React, { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import PerfilLateral from "@/components/www/Home/PerfilLateral";
import ResumenContenido from "@/components/www/Home/ResumenContenido";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aumentamos ligeramente el tiempo para apreciar la transición suave
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Spinner className="text-primary w-10 h-10" />
    </div>
  ) : (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <main className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <PerfilLateral />
          <ResumenContenido />
        </div>
      </main>
    </div>
  );
};

export default Home;