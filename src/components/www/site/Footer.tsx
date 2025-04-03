import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto py-6 px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Columna izquierda: Info */}
          <div className="text-center md:text-left">
            <h5 className="uppercase text-lg font-semibold mb-2">
              Técnico en sistemas microinformáticos y redes
            </h5>
            <p className="text-sm">
              Estudiante en formación de DAW (Desarrollo de Aplicaciones Web), cuento con el módulo de SMR.
            </p>
          </div>

          {/* Columna derecha: Redes */}
          <div className="text-center md:text-right">
            <h5 className="uppercase text-lg font-semibold mb-3">Redes Sociales</h5>
            <div className="flex justify-center md:justify-end items-center space-x-4">
              <a href="https://x.com/sergioalfa06" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/sergio.gallardogrima" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/seergiiogg__" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-black text-white text-sm py-2">
        © 2025 Sergio.
      </div>
    </footer>

  );
};

export default Footer;
