/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Machinery } from './components/Machinery';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingCTA } from './components/FloatingCTA';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ServiceType } from './types';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType>('Picado y ensilado');

  const handleOpenQuote = (service?: ServiceType | string) => {
    if (service) {
      setSelectedService(service as ServiceType);
    }
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#00170c] text-white flex flex-col selection:bg-[#fad25b] selection:text-[#003a1e] font-sans antialiased pb-16 md:pb-0">
      {/* Top App Bar */}
      <Header />

      {/* Main Experience */}
      <main className="flex-1">
        <Hero onOpenQuote={() => handleOpenQuote()} />
        <Services onOpenQuote={handleOpenQuote} />
        <Machinery onOpenQuote={() => handleOpenQuote()} />
        <BottomCTA onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Native Mobile Bottom Navigation (Visible exclusively on mobile) */}
      <MobileBottomNav onOpenQuote={() => handleOpenQuote()} />

      {/* Persistent Budget Action Modal / Bottom Sheet */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialService={selectedService}
      />

      {/* Desktop Floating Action Button */}
      <FloatingCTA />
    </div>
  );
}
