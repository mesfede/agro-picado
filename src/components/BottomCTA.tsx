import React from 'react';
import agroPasturaFondo from '../assets/images/agro_pastura_fardo_fondo_1791403250547.jpg';

interface BottomCTAProps {
  onOpenQuote: () => void;
}

const INSTAGRAM_URL =
  'https://www.instagram.com/agro_picado?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==';

export const BottomCTA: React.FC<BottomCTAProps> = ({ onOpenQuote }) => {
  return (
    <section id="contacto" className="py-24 sm:py-32 px-5 sm:px-8 bg-[#002714] border-t border-[#003a1e] relative overflow-hidden">
      {/* Agricultural Pasture Background with Smooth Mimetized Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={agroPasturaFondo}
          alt=""
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/agro_pastura_fardo_fondo.jpg';
          }}
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002714] via-[#002714]/65 to-[#002714]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002714]/85 via-transparent to-[#002714]/85" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#fad25b] block mb-4">
          Respuesta Inmediata
        </span>

        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.05] mb-6">
          ¿NECESITÁS PRESUPUESTAR UN TRABAJO?
        </h2>

        <p className="text-base sm:text-lg text-neutral-200 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
          Completá el formulario en segundos para coordinar picado, ensilado, rollos, abono orgánico o labranza en Lobos y zona.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-12 py-4 text-base font-bold text-[#003a1e] bg-[#fad25b] hover:bg-[#f5c73c] active:scale-[0.98] rounded-md transition-all shadow-2xl shadow-[#fad25b]/25 cursor-pointer uppercase tracking-wider"
          >
            PRESUPUESTAR
          </button>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white hover:text-[#fad25b] border border-white/20 hover:border-[#fad25b] rounded-md transition-all uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4 fill-currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>

        <div className="mt-14 pt-8 border-t border-[#003a1e] flex flex-wrap justify-center items-center gap-6 text-xs text-neutral-300 font-medium">
          <span>Lobos, Buenos Aires</span>
          <span className="text-[#fad25b] font-bold">·</span>
          <span>Cobertura: Lobos y partidos vecinos</span>
        </div>
      </div>
    </section>
  );
};
