import React from 'react';
import logoBlanco from '../assets/logos/agroLogo_blanco.png';

const INSTAGRAM_URL =
  'https://www.instagram.com/agro_picado?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00170c] py-12 px-5 sm:px-8 border-t border-[#003a1e] text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <img
            src={logoBlanco}
            alt="AGRO PICADO"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/logos/agroLogo_blanco.png';
            }}
            className="h-9 w-auto object-contain"
          />
          <span className="hidden sm:inline text-[#003a1e]">|</span>
          <span className="text-neutral-300 font-medium">Lobos, Buenos Aires, Argentina</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-neutral-300">
          <a href="#servicios" className="hover:text-[#fad25b] transition-colors">
            Servicios
          </a>
          <a href="#capacidad" className="hover:text-[#fad25b] transition-colors">
            Capacidad
          </a>
          <a href="#rollos" className="hover:text-[#fad25b] transition-colors">
            Rollos
          </a>
          <a href="#contacto" className="hover:text-[#fad25b] transition-colors">
            Presupuesto
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fad25b] hover:underline flex items-center gap-1.5"
          >
            <svg
              className="w-3.5 h-3.5 fill-currentColor inline"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#002714] text-center text-neutral-500">
        © {new Date().getFullYear()} AGRO PICADO. Servicios agropecuarios en Lobos y zona.
      </div>
    </footer>
  );
};
