import React from "react";

const PerfilLateral = () => {
  return (
    <aside className="col-span-1">
      <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-xl h-full transition-all hover:shadow-primary/5">
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/img/2BF41C0F-3A4C-4F86-9858-66ED4BBDA1A2.JPG"
              alt="Foto perfil"
              className="relative w-32 h-32 object-cover rounded-full border-2 border-background shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-border pb-2 mb-3">Idiomas</h2>
            <div className="space-y-2">
              {[
                { lang: "Español", level: "Nativo" },
                { lang: "Inglés", level: "B1 - En proceso" },
                { lang: "Francés", level: "Básico" }
              ].map((i) => (
                <div key={i.lang} className="flex justify-between items-center text-sm">
                  <span className="font-medium text-foreground">{i.lang}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{i.level}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-border pb-2 mb-3">Aptitudes</h2>
            <div className="flex flex-wrap gap-2">
              {["Trabajo en equipo", "Iniciativa", "Aprendizaje fluido", "Comunicación"].map((apt) => (
                <span key={apt} className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-md border border-border">
                  {apt}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-border pb-2 mb-3">Habilidades</h2>
            <ul className="space-y-2 text-sm text-foreground/80">
              {["HTML & CSS Moderno", "Java SE", "Instalación de Redes", "Bases de Datos SQL"].map((hab) => (
                <li key={hab} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {hab}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </aside>
  );
};

export default PerfilLateral;