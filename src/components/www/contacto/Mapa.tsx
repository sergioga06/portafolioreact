import React from "react";

const MapaUbicacion = () => {
  return (
    <div className="bg-card/50 backdrop-blur-md p-8 rounded-2xl border border-border/50 shadow-xl h-full min-h-[400px]">
      <h2 className="text-2xl font-bold mb-8 text-foreground">Mi Ubicación</h2>
      <div className="relative aspect-square md:aspect-auto md:h-[calc(100%-100px)] rounded-xl overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1807.7939901623633!2d-1.8238370807795352!3d37.173789481198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1739474972656!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full grayscale invert-[0.9] contrast-[0.9]"
        ></iframe>
      </div>
    </div>
  );
};

export default MapaUbicacion;