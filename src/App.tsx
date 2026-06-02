/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Showcase from './components/Showcase';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-main font-sans selection:bg-accent selection:text-white pb-0">
      <Header />
      <main>
        <Hero />
        <Process />
        <Services />
        <BeforeAfter />
        <Showcase />
        <Gallery />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
