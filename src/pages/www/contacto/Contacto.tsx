import React, { useEffect, useState } from 'react'
import { Spinner } from "@/components/ui/spinner"
import MapaUbicacion from "@/components/www/contacto/Mapa"
import ContactForm from '@/components/www/contacto/Formulario';

const Contacto = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    ) : (
      <main className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <MapaUbicacion />
        </div>
      </main>
    )
  )
}

export default Contacto
