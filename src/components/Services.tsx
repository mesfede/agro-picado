import React from 'react';
import { ServiceType } from '../types';

import picadoImg from '../assets/images/calidaddelpicado.png';
import rollosTrigoImg from '../assets/images/rollosdetrigo.png';
import rollosAlfalfaImg from '../assets/images/rollosdealfalfa.png';
import confeccionRollosImg from '../assets/images/paraconfeccionderollos.png';

import agroCampoFondo from '../assets/images/agro_campo_cosecha_fondo_1791403239917.jpg';
import agroPasturaFondo from '../assets/images/agro_pastura_fardo_fondo_1791403250547.jpg';

interface ServicesProps {
  onOpenQuote: (service?: ServiceType) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  return (
    <div id="servicios">
      {/* ========================================================
          01. COSECHA Y ENSILAJE - SECCIÓN EN BLANCO / EDITORIAL LIGHT
          Con imagen de campo de cosecha visible y degradé mimetizado
         ======================================================== */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 bg-[#f8f9f6] text-[#002714] border-t border-neutral-200 relative overflow-hidden">
        {/* Visible Agricultural Harvest Background with Smooth Mimetized Fade */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src={agroCampoFondo}
            alt=""
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/agro_campo_cosecha_fondo.jpg';
            }}
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          {/* Smooth Vertical and Horizontal Blend Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9f6] via-[#f8f9f6]/40 to-[#f8f9f6]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9f6]/80 via-transparent to-[#f8f9f6]/80" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Sub-header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-neutral-300">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#003a1e] mb-2 block">
                01. Cosecha y Ensilaje
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#002714] tracking-tight uppercase">
                PICADO Y ENSILADO
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-700 max-w-md font-medium">
              Servicio integral de cosecha forrajera con equipamiento de alta capacidad operativa en Lobos y zona.
            </p>
          </div>

          {/* Balanced Editorial Spread: Rich Content + Clean Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column (7 cols): Detailed Text & Operations */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-md">
                <p className="text-lg sm:text-xl text-[#002714] font-medium leading-relaxed mb-6">
                  Contamos con un equipo de maquinaria de alta calidad para garantizar un trabajo eficiente y profesional, preparados para manejar cualquier desafío y ofrecer resultados óptimos en el picado y ensilaje de tus cultivos.
                </p>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Cuidamos cada etapa de la recolección para lograr un tamaño de corte homogéneo, adecuada compactación y máxima conservación del valor nutricional del forraje.
                </p>
              </div>

              {/* Structured Operational Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-neutral-200 shadow-sm">
                  <span className="text-xs font-bold text-[#003a1e] uppercase tracking-wider block mb-1">
                    Picadora
                  </span>
                  <div className="font-display font-extrabold text-2xl text-[#002714] mb-1">01 Unidad</div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Alta precisión de corte para maíz, sorgo y pasturas.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-neutral-200 shadow-sm">
                  <span className="text-xs font-bold text-[#003a1e] uppercase tracking-wider block mb-1">
                    Embolsado
                  </span>
                  <div className="font-display font-extrabold text-2xl text-[#002714] mb-1">02 Equipos</div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Confección de silos bolsa con óptima compactación y sellado.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-neutral-200 shadow-sm">
                  <span className="text-xs font-bold text-[#003a1e] uppercase tracking-wider block mb-1">
                    Transporte
                  </span>
                  <div className="font-display font-extrabold text-2xl text-[#002714] mb-1">06 Camiones</div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Logística continua de acarreo con camiones y carros sileros.
                  </p>
                </div>
              </div>

              {/* Action Button & Geographic note */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  onClick={() => onOpenQuote('Picado y ensilado')}
                  className="px-8 py-4 text-xs sm:text-sm font-bold text-[#003a1e] bg-[#fad25b] hover:bg-[#f5c73c] active:scale-[0.98] rounded-md transition-all uppercase tracking-wider cursor-pointer shadow-lg shadow-[#fad25b]/25"
                >
                  PRESUPUESTAR PICADO Y ENSILADO
                </button>
                <div className="text-xs text-neutral-600 font-semibold">
                  Atención directa en Lobos y partidos vecinos
                </div>
              </div>
            </div>

            {/* Right Photo Column (5 cols): Clean photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-200">
                <img
                  src={picadoImg}
                  alt="Calidad de picado de forraje en campo real"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/calidaddelpicado.png';
                  }}
                  className="w-full h-[360px] sm:h-[420px] object-cover block"
                />
                <div className="p-4 bg-white border-t border-neutral-100">
                  <span className="text-xs font-bold text-[#003a1e] uppercase tracking-wider block">
                    Trabajo en Lote
                  </span>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Fibra y grano con picado homogéneo para silo de alta digestibilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          02. ROLLOS - SECCIÓN CON PAISAJE DE PASTURAS Y ROLLOS
          Visible, nítido y mimetizado con el fondo verde profundo
         ======================================================== */}
      <section id="rollos" className="py-24 sm:py-32 px-5 sm:px-8 bg-[#001b0e] text-white relative overflow-hidden">
        {/* Visible Agricultural Pasture & Round Bales Background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src={agroPasturaFondo}
            alt=""
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/agro_pastura_fardo_fondo.jpg';
            }}
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
          {/* Mimetizado con degradé suave en todos los bordes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#001b0e] via-[#001b0e]/60 to-[#001b0e]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001b0e]/85 via-transparent to-[#001b0e]/85" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#003a1e]">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#fad25b] mb-2 block">
                02. Confección y Forrajes
              </span>
              <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
                ROLLOS
              </h3>
            </div>
            <button
              onClick={() => onOpenQuote('Rollos')}
              className="self-start sm:self-auto px-7 py-3.5 text-xs sm:text-sm font-bold text-[#003a1e] bg-[#fad25b] hover:bg-[#f5c73c] rounded-md transition-colors uppercase tracking-wider cursor-pointer shadow-lg shadow-[#fad25b]/20"
            >
              PRESUPUESTAR ROLLOS
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rollos de paja de trigo */}
            <div className="bg-[#002714]/90 backdrop-blur-md border border-[#003a1e] rounded-2xl overflow-hidden group hover:border-[#fad25b]/50 transition-colors flex flex-col shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-[#00170c]">
                <img
                  src={rollosTrigoImg}
                  alt="Rollos de paja de trigo"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/rollosdetrigo.png';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-xl text-white uppercase mb-2">
                    Rollos de paja de trigo
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                    Confección y provisión de rollos de paja de trigo para alimentación animal y cobertura de suelos.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#003a1e] flex items-center justify-between">
                  <span className="text-xs text-[#fad25b] font-semibold">Lobos y zona</span>
                  <button
                    onClick={() => onOpenQuote('Rollos')}
                    className="text-xs font-bold text-white hover:text-[#fad25b] transition-colors uppercase tracking-wider"
                  >
                    Consultar →
                  </button>
                </div>
              </div>
            </div>

            {/* Rollos de alfalfa */}
            <div className="bg-[#002714]/90 backdrop-blur-md border border-[#003a1e] rounded-2xl overflow-hidden group hover:border-[#fad25b]/50 transition-colors flex flex-col shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-[#00170c]">
                <img
                  src={rollosAlfalfaImg}
                  alt="Rollos de alfalfa"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/rollosdealfalfa.png';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-xl text-white uppercase mb-2">
                    Rollos de alfalfa
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                    Pastura seleccionada y enrollada con la densidad adecuada para reserva forrajera de alto valor proteico.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#003a1e] flex items-center justify-between">
                  <span className="text-xs text-[#fad25b] font-semibold">Lobos y zona</span>
                  <button
                    onClick={() => onOpenQuote('Rollos')}
                    className="text-xs font-bold text-white hover:text-[#fad25b] transition-colors uppercase tracking-wider"
                  >
                    Consultar →
                  </button>
                </div>
              </div>
            </div>

            {/* Corte de moha para confección de rollos */}
            <div className="bg-[#002714]/90 backdrop-blur-md border border-[#003a1e] rounded-2xl overflow-hidden group hover:border-[#fad25b]/50 transition-colors flex flex-col shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-[#00170c]">
                <img
                  src={confeccionRollosImg}
                  alt="Corte de moha para confección de rollos"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/paraconfeccionderollos.png';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-xl text-white uppercase mb-2">
                    Corte de moha
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                    Corte y acondicionado oportuno de moha para la posterior confección de rollos forrajeros de primera línea.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#003a1e] flex items-center justify-between">
                  <span className="text-xs text-[#fad25b] font-semibold">Servicio en lote</span>
                  <button
                    onClick={() => onOpenQuote('Rollos')}
                    className="text-xs font-bold text-white hover:text-[#fad25b] transition-colors uppercase tracking-wider"
                  >
                    Consultar →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          03 & 04. ABONO ORGÁNICO & LABRANZA
          Con paisaje de campo mimetizado de fondo
         ======================================================== */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-[#002412] text-white border-t border-[#003a1e] relative overflow-hidden">
        {/* Visible Agricultural Landscape Blend */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src={agroCampoFondo}
            alt=""
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/agro_campo_cosecha_fondo.jpg';
            }}
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002412] via-[#002412]/60 to-[#002412]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002412]/85 via-transparent to-[#002412]/85" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 03. Abono Orgánico */}
            <div className="bg-[#002f18]/90 backdrop-blur-md border border-[#003a1e] p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <span className="font-display text-[#fad25b] font-bold text-xs tracking-wider uppercase block mb-3">
                  03. Distribución Especializada
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4">
                  ABONO ORGÁNICO
                </h3>
                <p className="text-base text-neutral-200 mb-6 leading-relaxed">
                  Servicio de distribución de abono en canchas de polo y establecimientos rurales de la zona.
                </p>
                <div className="text-xs text-[#fad25b] font-semibold bg-[#002212] border border-[#fad25b]/25 px-4 py-2.5 rounded-lg inline-block">
                  Canchas de polo · Campos de Lobos y alrededores
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#003a1e] flex items-center justify-between">
                <span className="text-xs text-neutral-300 font-medium">Distribución uniforme</span>
                <button
                  onClick={() => onOpenQuote('Abono orgánico')}
                  className="px-6 py-3 text-xs font-bold text-[#003a1e] bg-[#fad25b] hover:bg-[#f5c73c] rounded-md transition-colors uppercase tracking-wider cursor-pointer"
                >
                  PRESUPUESTAR
                </button>
              </div>
            </div>

            {/* 04. Labranza */}
            <div className="bg-[#002f18]/90 backdrop-blur-md border border-[#003a1e] p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <span className="font-display text-[#fad25b] font-bold text-xs tracking-wider uppercase block mb-3">
                  04. Laboreo de Suelo
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4">
                  LABRANZA
                </h3>
                <p className="text-base text-neutral-200 mb-6 leading-relaxed">
                  Servicio de labranza y preparación del terreno con tractores propios y equipamiento adecuado para siembra.
                </p>
                <div className="text-xs text-neutral-300 font-medium">
                  Potencia operativa para laboreo y acondicionamiento de lotes.
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#003a1e] flex items-center justify-between">
                <span className="text-xs text-neutral-300 font-medium">Tractores propios</span>
                <button
                  onClick={() => onOpenQuote('Labranza')}
                  className="px-6 py-3 text-xs font-bold text-[#003a1e] bg-[#fad25b] hover:bg-[#f5c73c] rounded-md transition-colors uppercase tracking-wider cursor-pointer"
                >
                  PRESUPUESTAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
