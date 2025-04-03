import React from "react";
import CarruselTecnologias from "./Carrusel";

const ResumenContenido = () => {
  return (
    <section className="col-span-1 md:col-span-3">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-900">Sergio Gallardo Grima</h2>

        <article className="mt-4">
          <h3 className="text-md font-semibold">Resumen profesional</h3>
          <p className="text-sm mt-1">
            Meses trabajando como técnico de redes de fibra. Siempre me ha gustado el tema de los ordenadores a nivel físico.
            Estoy al día de los últimos componentes que salen al mercado. He montado mi propio ordenador y el de algunas amistades.
          </p>
        </article>

        <article className="mt-4">
          <h3 className="text-md font-semibold">Historial laboral</h3>
          <p className="text-sm mt-1">
            Abril 2024 - Junio 2024<br />
            Prácticas en Acaciophone: instalación de fibra, antena y configuración/redes.
          </p>
        </article>

        <article className="mt-4">
          <h3 className="text-md font-semibold">Formación</h3>
          <p className="text-sm mt-1">
            2024<br />
            Grado Medio en Sistemas Microinformáticos y Redes – IES Cura Valera, Huércal-Overa
          </p>
          <p className="text-sm mt-1">
            2025<br />
            Acabando el primer año de Grado Superior en Desarrollo de Aplicaciones Multiplataforma para poder conseguir un buen trabajo, fijo y estable para poder establecerme un buen futuro.
          </p>
        </article>
        <CarruselTecnologias />
      </div>
    </section>
  );
};

export default ResumenContenido;
