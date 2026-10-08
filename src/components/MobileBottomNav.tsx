import React, { useState, useEffect } from 'react';

interface MobileBottomNavProps {
  onOpenQuote: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenQuote }) => {
  const [activeSection, setActiveSection] = useState('servicios');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const serviciosEl = document.getElementById('servicios');
      const capacidadEl = document.getElementById('capacidad');
      const rollosEl = document.getElementById('rollos');
      const contactoEl = document.getElementById('contacto');

      if (contactoEl && scrollPos >= contactoEl.offsetTop) {
        setActiveSection('contacto');
      } else if (capacidadEl && scrollPos >= capacidadEl.offsetTop) {
        setActiveSection('capacidad');
      } else if (rollosEl && scrollPos >= rollosEl.offsetTop) {
        setActiveSection('rollos');
      } else if (serviciosEl && scrollPos >= serviciosEl.offsetTop) {
        setActiveSection('servicios');
      } else {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#00170c]/98 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_35px_rgba(0,0,0,0.9)] pb-[max(0.6rem,env(safe-area-inset-bottom))]"
      aria-label="Navegación móvil"
    >
      <div className="grid grid-cols-4 items-center h-16 px-1">
        {/* Tab 1: Servicios (Linear Icon) */}
        <a
          href="#servicios"
          onClick={() => setActiveSection('servicios')}
          className={`flex flex-col items-center justify-center py-1 px-1 h-full active:scale-95 transition-all no-select ${
            activeSection === 'servicios' ? 'text-[#fad25b]' : 'text-neutral-400 hover:text-white'
          }`}
        >
          {/* Linear Grid Icon */}
          <svg
            className="w-5 h-5 mb-1 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          <span className="text-[10px] font-semibold tracking-tight whitespace-nowrap leading-none block">
            Servicios
          </span>
        </a>

        {/* Tab 2: Capacidad (Linear Fleet/Machine Icon) */}
        <a
          href="#capacidad"
          onClick={() => setActiveSection('capacidad')}
          className={`flex flex-col items-center justify-center py-1 px-1 h-full active:scale-95 transition-all no-select ${
            activeSection === 'capacidad' ? 'text-[#fad25b]' : 'text-neutral-400 hover:text-white'
          }`}
        >
          {/* Linear Machinery Icon */}
          <svg
            className="w-5 h-5 mb-1 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
          <span className="text-[10px] font-semibold tracking-tight whitespace-nowrap leading-none block">
            Capacidad
          </span>
        </a>

        {/* Tab 3: Rollos (Linear Bale Icon) */}
        <a
          href="#rollos"
          onClick={() => setActiveSection('rollos')}
          className={`flex flex-col items-center justify-center py-1 px-1 h-full active:scale-95 transition-all no-select ${
            activeSection === 'rollos' ? 'text-[#fad25b]' : 'text-neutral-400 hover:text-white'
          }`}
        >
          {/* Linear Bale / Round Icon */}
          <svg
            className="w-5 h-5 mb-1 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="8.5" />
            <circle cx="12" cy="12" r="3.5" />
            <path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" />
          </svg>
          <span className="text-[10px] font-semibold tracking-tight whitespace-nowrap leading-none block">
            Rollos
          </span>
        </a>

        {/* Tab 4: Presupuestar (Linear Clipboard/Quote Action) */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-1 px-1 h-full text-[#fad25b] hover:text-[#f5c73c] active:scale-95 transition-all no-select cursor-pointer"
          aria-label="Pedir presupuesto"
        >
          {/* Linear Presupuesto / Quote Icon */}
          <svg
            className="w-5 h-5 mb-1 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 12h6m-6 4h4m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight whitespace-nowrap leading-none block text-[#fad25b]">
            Presupuesto
          </span>
        </button>
      </div>
    </nav>
  );
};
