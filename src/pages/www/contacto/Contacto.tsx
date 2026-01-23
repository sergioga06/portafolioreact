import React, { useEffect, useState } from 'react'
import { Spinner } from "@/components/ui/spinner"
import MapaUbicacion from "@/components/www/contacto/Mapa"
import ContactForm from '@/components/www/contacto/Formulario';

const Contacto = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spinner className="text-primary" />
      </div>
    ) : (
      <main className="container mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <MapaUbicacion />
        </div>
      </main>
    )
  )
}

export default Contacto