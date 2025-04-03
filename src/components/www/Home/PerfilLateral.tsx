import React from "react";

const PerfilLateral = () => {
  return (
    <aside className="col-span-1">
      <div className="bg-white p-4 rounded-lg shadow h-full">
        <div className="flex justify-center mb-4">
          <img
            src="/img/2BF41C0F-3A4C-4F86-9858-66ED4BBDA1A2.JPG"
            alt="Foto perfil"
            className="w-28 h-28 object-cover rounded shadow"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold border-b pb-1 mb-2">Idiomas</h2>
          <table className="w-full text-sm border">
            <thead className="bg-gray-800 text-white">
              <tr><th className="p-1">Idioma</th><th className="p-1">Estado</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-1">Inglés</td><td className="p-1">En proceso</td></tr>
              <tr className="border-t"><td className="p-1">Francés</td><td className="p-1">Cosas mínimas</td></tr>
              <tr className="border-t"><td className="p-1">Español</td><td className="p-1">Nativo</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-semibold border-b pb-1">Aptitudes</h2>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Trabajo en equipo</li>
            <li>Iniciativa</li>
            <li>Aprendizaje fluido</li>
            <li>Buena comunicación</li>
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-semibold border-b pb-1">Habilidades</h2>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>HTML y CSS (Básico-Medio)</li>
            <li>Java Básico</li>
            <li>Instalación de redes</li>
            <li>Bases de datos (Básico)</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default PerfilLateral;
