import React from "react";

const MapaUbicacion = () => {
  return (
    <div className="bg-white p-6 rounded shadow h-full">
      <h2 className="text-2xl font-bold mb-6">Ubicación</h2>
      <div className="aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1807.7939901623633!2d-1.8238370807795352!3d37.173789481198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1739474972656!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default MapaUbicacion;
