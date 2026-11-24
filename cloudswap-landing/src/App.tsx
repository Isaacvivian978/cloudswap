import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import FeaturesCarousel from './components/FeaturesCarousel';
import DemoTerminal from './components/DemoTerminal';
import InstallationGuide from './components/InstallationGuide';
import PricingFAQ from './components/PricingFAQ';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "CloudSwap | Autonomous Firebase Migrations";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Seamlessly migrate legacy Firebase projects to Google Cloud Run and Cloud SQL with guaranteed API Parity.");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <header 
        style={{ 
          position: 'fixed', 
          top: 0, left: 0, right: 0, 
          zIndex: 100, 
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(11, 13, 20, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          padding: scrolled ? '1rem 0' : '2rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo text-gradient" style={{ cursor: 'pointer', zIndex: 110, position: 'relative' }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth'}); setMobileMenuOpen(false); }}>
            CloudSwap.
          </div>
          
          <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem' }}>Architecture</a>
            <a href="#demo" onClick={(e) => scrollToSection(e, 'demo')} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem' }}>Live Demo</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem' }}>Pricing</a>
            <a href="#installation" onClick={(e) => scrollToSection(e, 'installation')} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Deploy Node</a>
          </nav>

          <button 
            className="mobile-menu-toggle"
            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', zIndex: 110, position: 'relative' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', marginTop: '6rem' }}>
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 600 }}>Architecture</a>
            <a href="#demo" onClick={(e) => scrollToSection(e, 'demo')} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 600 }}>Live Demo</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 600 }}>Pricing</a>
            <a href="#installation" onClick={(e) => scrollToSection(e, 'installation')} className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '1.1rem', marginTop: '1rem' }}>Deploy Node</a>
          </nav>
        </div>
      </header>
      
      {/* Padding top to offset fixed header */}
      <main style={{ paddingTop: '80px' }}>
        <HeroSection />
        <div id="features"><FeaturesCarousel /></div>
        <div id="demo"><DemoTerminal /></div>
        <InstallationGuide />
        <PricingFAQ />
      </main>

      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '5rem 0 3rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
        <div className="container">
           <div className="logo text-gradient" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>CloudSwap.</div>
           <p style={{ fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
            Engineered for international tech scale. Built to ensure seamless, autonomous transition from legacy to modern.
           </p>
           
           <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Documentation</a>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
              <a href="https://github.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>GitHub</a>
           </div>

           <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>© 2026 CloudSwap Autonomous Engine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
