import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroVideo from '../assets/videos/agro_hero_video.mp4';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const phrases = [
    'MAQUINARIA Y CAPACIDAD OPERATIVA EN EL CAMPO',
    'PICADO, ENSILADO Y CONFECCIÓN DE ROLLOS',
    'TRABAJO EFICIENTE Y RESULTADOS ÓPTIMOS EN TUS CULTIVOS',
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    // Each phrase stays for 5 seconds then transitions
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <section className="relative min-h-[100dvh] sm:min-h-screen flex items-center justify-center pt-24 pb-20 px-5 sm:px-8 overflow-hidden bg-[#00170c]">
      {/* Real Hero Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Lightweight natural dark scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#00170c]/95 z-10" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Rotating Editorial Titles with subtle transparency (not blinding pure white) */}
        <div className="min-h-[120px] sm:min-h-[150px] md:min-h-[170px] flex items-center justify-center mb-6 w-full max-w-4xl px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentPhrase}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/90 uppercase tracking-tight leading-tight drop-shadow-md"
            >
              {phrases[currentPhrase]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Rotation Indicators */}
        <div className="flex items-center gap-2.5 mb-10">
          {phrases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPhrase(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentPhrase
                  ? 'w-8 bg-[#fad25b]'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ver título ${idx + 1}`}
            />
          ))}
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-10 py-4 text-base font-bold text-[#003a1e] bg-[#fad25b] hover:bg-[#f5c73c] active:scale-[0.98] rounded-md transition-all shadow-2xl shadow-[#fad25b]/30 cursor-pointer uppercase tracking-wider"
          >
            PRESUPUESTAR
          </button>
          <a
            href="#servicios"
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white/90 hover:text-[#fad25b] border border-white/30 hover:border-[#fad25b] rounded-md transition-all uppercase tracking-wider backdrop-blur-sm"
          >
            VER SERVICIOS
          </a>
        </div>

        {/* Operational Highlights Strip - Positioned further down with generous spacing */}
        <div className="mt-24 sm:mt-32 pt-8 border-t border-white/15 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-white/90">Lobos y zona</div>
            <div className="text-xs text-neutral-300 font-medium mt-0.5">Cobertura de trabajo</div>
          </div>
          <div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-[#fad25b]">Equipo Propio</div>
            <div className="text-xs text-neutral-300 font-medium mt-0.5">Capacidad operativa</div>
          </div>
          <div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-white/90">Picado y Ensilado</div>
            <div className="text-xs text-neutral-300 font-medium mt-0.5">Cosecha y conservación</div>
          </div>
          <div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-white/90">Atención Directa</div>
            <div className="text-xs text-neutral-300 font-medium mt-0.5">Presupuesto inmediato</div>
          </div>
        </div>
      </div>
    </section>
  );
};
