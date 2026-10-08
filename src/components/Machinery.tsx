import React from 'react';
import corteActionImg from '../assets/images/paraconfeccionderollos_01.png';
import agroCampoFondo from '../assets/images/agro_campo_cosecha_fondo_1791403239917.jpg';

interface MachineryProps {
  onOpenQuote: () => void;
}

export const Machinery: React.FC<MachineryProps> = ({ onOpenQuote }) => {
  const fleet = [
    {
      number: '01',
      title: 'PICADORA',
      description: 'Unidad de picado de alta precisión y rendimiento para ensilaje de cultivos.',
    },
    {
      number: '06',
      title: 'CAMIONES',
      description: 'Logística continua para transporte y movimiento de forraje y grano en lote.',
    },
    {
      number: '02',
      title: 'EMBOLSADORAS',
      description: 'Confección de silos bolsa con óptima compactación y sellado forrajero.',
    },
    {
      number: '02',
      title: 'TRACTORES',
      description: 'Potencia de arrastre para labranza, tolvas, movimientos y embolsado.',
    },
  ];

  return (
    <section id="capacidad" className="py-24 sm:py-32 px-5 sm:px-8 bg-[#fad25b] text-[#002714] border-t-2 border-[#003a1e] relative overflow-hidden">
      {/* Agricultural Harvest Field Background with Smooth Yellow Mimetized Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={agroCampoFondo}
          alt=""
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/agro_campo_cosecha_fondo.jpg';
          }}
          className="w-full h-full object-cover object-center opacity-25 mix-blend-multiply scale-105"
        />
        {/* Soft edge blend so the image is part of the yellow field */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fad25b] via-transparent to-[#fad25b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fad25b]/80 via-transparent to-[#fad25b]/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-[#003a1e]/20">
          <div>
            <span className="text-xs font-black tracking-widest uppercase text-[#003a1e] mb-2 block">
              Parque de Maquinaria
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#002714] tracking-tight uppercase">
              CAPACIDAD OPERATIVA
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#003a1e] font-semibold mb-2">
              Flota y maquinaria propia preparada para responder a tiempos de cosecha y labores continuas en el campo.
            </p>
            <span className="text-xs text-[#002714]/80 font-bold">Lobos · San Miguel del Monte · Navarro · Cañuelas y zona</span>
          </div>
        </div>

        {/* Machinery Grid with Massive Numbers and High Contrast Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {fleet.map((item) => (
            <div
              key={item.title}
              className="bg-[#002714] text-white p-8 rounded-2xl flex flex-col justify-between shadow-2xl border border-[#003a1e] hover:-translate-y-1 transition-all group"
            >
              <div>
                <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#fad25b] group-hover:text-white transition-colors block leading-none mb-4 tabular-nums">
                  {item.number}
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase mb-3">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium pt-4 border-t border-[#003a1e] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Camiones y Carros Sileros - Clean Photo without blurring */}
        <div className="bg-white text-[#002714] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#003a1e]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black tracking-wider text-[#003a1e] uppercase block mb-2">
                  Logística y Transporte Continuo
                </span>
                <h4 className="font-display font-black text-2xl sm:text-4xl text-[#002714] uppercase tracking-tight mb-4">
                  CAMIONES + CARROS SILEROS
                </h4>
                <p className="text-sm sm:text-base text-neutral-700 font-medium max-w-xl mb-8 leading-relaxed">
                  Circuito cerrado de picado, acarreo y ensilado continuo para garantizar la calidad del forraje sin detenciones en lote. Capacidad logística para abastecer las embolsadoras sin tiempos muertos.
                </p>
              </div>
              <div>
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 text-xs sm:text-sm font-bold text-white bg-[#002714] hover:bg-[#003a1e] active:scale-[0.98] rounded-md transition-all uppercase tracking-wider cursor-pointer shadow-lg shadow-[#002714]/20"
                >
                  CONSULTAR DISPONIBILIDAD
                </button>
              </div>
            </div>

            {/* Direct, clean and crisp photography without gradient or blur overlay */}
            <div className="lg:col-span-5 min-h-[260px] sm:min-h-[320px] bg-neutral-100">
              <img
                src={corteActionImg}
                alt="Maquinaria y trabajo de campo real"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/paraconfeccionderollos_01.png';
                }}
                className="w-full h-full object-cover object-center block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
