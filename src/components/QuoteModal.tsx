import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceType } from '../types';
import logoBlanco from '../assets/logos/agroLogo_blanco.png';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Picado y ensilado',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState<ServiceType>(initialService);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Update initial service when prop changes
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor ingresá tu nombre');
      return;
    }
    if (!phone.trim()) {
      setError('Por favor ingresá tu teléfono o WhatsApp');
      return;
    }

    // Official WhatsApp message template from Prompt 2
    const cleanConsulta = message.trim() ? ` ${message.trim()}` : '';
    const text = `Hola AGRO PICADO, quiero consultar/presupuestar el servicio de ${service}. Mi nombre es ${name.trim()}.${cleanConsulta}`;
    
    // Target WhatsApp: +54 2227 58-0720 -> 5492227580720
    const targetUrl = `https://wa.me/5492227580720?text=${encodeURIComponent(text)}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const servicesList: ServiceType[] = [
    'Picado y ensilado',
    'Rollos',
    'Abono orgánico',
    'Labranza',
    'Otro',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal / Native Bottom Sheet Container */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{
              type: 'spring',
              damping: 28,
              stiffness: 350,
            }}
            className="relative z-10 w-full max-w-lg bg-[#002714] border-t sm:border border-[#003a1e] rounded-t-3xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/90 max-h-[92dvh] overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            {/* Mobile Native Drag Handle Pill */}
            <div className="sm:hidden w-12 h-1.5 bg-neutral-600 rounded-full mx-auto mb-4" />

            {/* Header with White Logo & Close Button */}
            <div className="flex items-start justify-between pb-4 border-b border-[#003a1e] mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={logoBlanco}
                  alt="AGRO PICADO"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/logos/agroLogo_blanco.png';
                  }}
                  className="h-9 w-auto object-contain"
                />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#fad25b] block">
                    Presupuesto
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                    SOLICITAR PRESUPUESTO
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-[#003a1e] transition-colors"
                aria-label="Cerrar modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-xs text-rose-200 bg-rose-950/60 border border-rose-800 rounded-md">
                  {error}
                </div>
              )}

              {/* Nombre */}
              <div>
                <label
                  htmlFor="quote-name"
                  className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5"
                >
                  Nombre completo <span className="text-[#fad25b]">*</span>
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Tu nombre o establecimiento rural"
                  className="w-full px-3.5 py-3 text-base bg-[#001a0d] border border-[#003a1e] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#fad25b] focus:ring-1 focus:ring-[#fad25b] transition-colors"
                />
              </div>

              {/* Teléfono / WhatsApp */}
              <div>
                <label
                  htmlFor="quote-phone"
                  className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5"
                >
                  Teléfono / WhatsApp <span className="text-[#fad25b]">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Ej: 2227 580720"
                  className="w-full px-3.5 py-3 text-base bg-[#001a0d] border border-[#003a1e] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#fad25b] focus:ring-1 focus:ring-[#fad25b] transition-colors"
                />
              </div>

              {/* Servicio */}
              <div>
                <label
                  htmlFor="quote-service"
                  className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5"
                >
                  Servicio
                </label>
                <select
                  id="quote-service"
                  value={service}
                  onChange={(e) => setService(e.target.value as ServiceType)}
                  className="w-full px-3.5 py-3 text-base bg-[#001a0d] border border-[#003a1e] rounded-xl text-white focus:outline-none focus:border-[#fad25b] focus:ring-1 focus:ring-[#fad25b] transition-colors"
                >
                  {servicesList.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje / Consulta */}
              <div>
                <label
                  htmlFor="quote-message"
                  className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5"
                >
                  Consulta / Detalle del lote
                </label>
                <textarea
                  id="quote-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hectáreas aproximadas, cultivo, zona o fecha estimada..."
                  className="w-full px-3.5 py-3 text-base bg-[#001a0d] border border-[#003a1e] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#fad25b] focus:ring-1 focus:ring-[#fad25b] transition-colors resize-none"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm font-bold text-[#003a1e] bg-[#fad25b] active:bg-[#f5c73c] rounded-xl transition-all uppercase tracking-wider cursor-pointer shadow-lg shadow-[#fad25b]/20 active:scale-[0.98] no-select"
                >
                  ENVIAR CONSULTA
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
