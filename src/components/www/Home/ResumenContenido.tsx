import React from "react";
import CarruselTecnologias from "./Carrusel";

const ResumenContenido = () => {
  return (
    <section className="col-span-1 md:col-span-3">
      <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Sergio Gallardo <span className="text-primary">Grima</span>
          </h1>
          <p className="text-primary font-medium mt-1 uppercase text-xs tracking-[0.2em]">Estudiante de Desarrollo Multiplataforma</p>
        </div>

        <div className="grid gap-8">
          <article>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              Resumen profesional
            </h3>
            <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
              Apasionado de la tecnología con experiencia como técnico de redes de fibra. 
              Poseo un sólido conocimiento del hardware informático, habiendo montado y optimizado múltiples equipos. 
              Actualmente enfocado en expandir mis capacidades hacia el desarrollo de software.
            </p>
          </article>

          <div className="grid md:grid-cols-2 gap-8">
            <article>
              <h3 className="text-md font-bold text-primary mb-4 uppercase tracking-widest text-xs">Historial Laboral</h3>
              <div className="border-l-2 border-primary/20 pl-4 space-y-4">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  <h4 className="font-bold text-sm">Prácticas - Acaciophone</h4>
                  <p className="text-xs text-muted-foreground mb-1">Abril 2024 — Junio 2024</p>
                  <p className="text-sm text-foreground/70">Instalación de fibra óptica, antenas y configuración de redes avanzadas.</p>
                </div>
              </div>
            </article>

            <article>
              <h3 className="text-md font-bold text-primary mb-4 uppercase tracking-widest text-xs">Formación</h3>
              <div className="border-l-2 border-primary/20 pl-4 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-primary/40 border-4 border-background"></div>
                  <h4 className="font-bold text-sm">G.S. Desarrollo de Aplicaciones Multiplataforma</h4>
                  <p className="text-xs text-muted-foreground">2025 — Actualidad</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-primary/40 border-4 border-background"></div>
                  <h4 className="font-bold text-sm">G.M. Sistemas Microinformáticos y Redes</h4>
                  <p className="text-xs text-muted-foreground">IES Cura Valera | 2024</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <CarruselTecnologias />
        </div>
      </div>
    </section>
  );
};

export default ResumenContenido;