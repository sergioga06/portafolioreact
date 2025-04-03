import React, { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import PerfilLateral from "@/components/www/Home/PerfilLateral";
import ResumenContenido from "@/components/www/Home/ResumenContenido";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="flex justify-center items-center min-h-screen">
      <Spinner />
    </div>
  ) : (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <PerfilLateral />
        <ResumenContenido />
      </div>
    </main>
  );
};

export default Home;
