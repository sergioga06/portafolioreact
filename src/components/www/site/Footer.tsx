import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-background/80 backdrop-blur-md border-t border-border/40 text-foreground mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Sección de Información Personal */}
          <div className="text-center md:text-left space-y-4">
            <h5 className="uppercase text-xs font-bold tracking-[0.2em] text-primary">
              Sergio Gallardo Grima
            </h5>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-sm mx-auto md:mx-0">
              Técnico en Sistemas Microinformáticos y Redes. 
              Estudiante apasionado de Desarrollo Multiplataforma (DAW/SMR).
            </p>
          </div>

          {/* Sección de Redes Sociales */}
          <div className="text-center md:text-right space-y-4">
            <h5 className="uppercase text-xs font-bold tracking-[0.2em] text-primary">Conecta conmigo</h5>
            <div className="flex justify-center md:justify-end items-center space-x-6">
              {[
                { Icon: Twitter, href: "https://x.com/sergioalfa06", color: "hover:text-sky-400" },
                { Icon: Facebook, href: "https://www.facebook.com/sergio.gallardogrima", color: "hover:text-blue-600" },
                { Icon: Instagram, href: "https://www.instagram.com/seergiiogg__", color: "hover:text-pink-500" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/sergio-gallardo-grima-41243b359/", color: "hover:text-blue-500" }
              ].map(({ Icon, href, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${color} text-foreground/70 transition-all duration-300 hover:scale-125`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="text-center py-6 border-t border-border/10 text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-semibold">
        © 2025 Sergio Gallardo • Diseñado con React & Tailwind
      </div>
    </footer>
  );
};

export default Footer;